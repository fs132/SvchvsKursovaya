import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../NavMenu.css';

export class GameFormView extends Component {
    static displayName = GameFormView.name;

    constructor(props) {
        super(props);

        this.state = {
            game: props.game,
            formStateAdding: "Добавление",
            formStateUpdating: "Обновление",
            formStateExamine: "Просмотр",
            id: props.game.id,
            name: props.game.name,
            price: props.game.price,
            releaseYear: props.game.releaseYear,
            description: props.game.description,
            averageMark: props.game.averageMark,
            validated: false
        };

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.createGameModel = this.createGameModel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div hidden={ this.props.isHidden}>
                <Button variant="light" style={{ marginTop: 7 }} onClick={(event) => this.props.handleBack(event)}>
                    Назад к списку
                </Button>
                <p className="text">{this.props.isAdding ? this.state.formStateAdding :
                    this.props.isUpdating ? this.state.formStateUpdating :
                        this.state.formStateExamine}</p>
                <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <fieldset disabled={!this.props.isUpdating && !this.props.isAdding} hidden={ this.props.isHidden}>
                        <Row>
                            <Col>
                                <fieldset>
                                    <Form.Group className="mb-3">
                                        <Form.Label size="sm" className="text" >Название</Form.Label>
                                        <Form.Control size="sm" type="text" name="name" value={this.state.name} placeholder={this.state.game.name} onChange={this.handleChangeInput} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label size="sm" className="text">Цена</Form.Label>
                                        <Form.Control size="sm" type="number" name="price" value={this.state.price} placeholder={this.state.game.price} onChange={this.handleChangeInput} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label size="sm" className="text">Год выпуска</Form.Label>
                                        <Form.Control size="sm" type="number" name="releaseYear" value={this.state.releaseYear} placeholder={this.state.game.releaseYear} onChange={this.handleChangeInput} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label size="sm" className="text" >Описание</Form.Label>
                                        <Form.Control size="sm" type="text" name="description" value={this.state.description} placeholder={this.state.game.description} onChange={this.handleChangeInput} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label size="sm" className="text" >Общая оценка</Form.Label>
                                        <Form.Control size="sm" type="number" name="averageMark" value={this.state.averageMark} placeholder={this.state.game.averageMark} onChange={this.handleChangeInput} required />
                                    </Form.Group>
                                </fieldset>
                                <Button variant="light" style={{ paddingBottom: 10 }} type="submit">
                                    {this.props.isAdding ? "Добавить в корзину" : "Обновить"}
                                </Button>
                                <Button variant="danger" style={{ marginLeft: 10, paddingBottom:10 }} onClick={(event) => this.handleDelete(event)}>
                                    Купить
                                </Button>
                            </Col>
                        </Row>
                    </fieldset>
                </Form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            let game = this.createGameModel();

            this.props.isAdding ? this.props.handlePost(event, game) :
                this.props.handleUpdate(event, game);

            this.setState({validated: true});
        }
    }

    handleDelete(event) {
        event.preventDefault();

        let game = this.createGameModel();

        this.props.handleDelete(event, game);
    }

    createGameModel() {
        let game = {
            "id": this.props.game.id,
            "price": this.state.price,
            "name": this.state.name,
            "releaseYear": this.state.releaseYear,
            "description": this.state.description,
            "averageMark":this.state.averageMark,
        }

        return game;
    }

    handleChangeInput(event) {
        this.setState({[event.target.name]:event.target.value});
    }
}
