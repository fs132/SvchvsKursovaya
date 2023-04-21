import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../NavMenu.css';

export class GamesByNameView extends Component {
    static displayName = GamesByNameView.name;

    constructor(props) {
        super(props);

        this.state = {
            games: [],
            name:"",
            isSearching: false,
            isValidated:false,
            id: 0
        }

        this.getGamesByTeam = this.getGamesByTeam.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    render() {
        return (
            <div>
                <Form validated={this.state.isValidated} onSubmit={this.handleSubmit}>
                        <fieldset hidden={this.props.isHidden}>
                            <Row>
                                <Col>
                                    <fieldset>
                                        <Form.Group className="mb-3">
                                        <Form.Label size="sm" className="text">Введите название игры</Form.Label>
                                        <Form.Control size="sm" type="text" name="name" value={this.state.name} placeholder={this.state.name} onChange={this.handleChangeInput} required />
                                        </Form.Group>
                                    </fieldset>
                                </Col>
                        </Row>
                        <Button variant="light" style={{ marginBottom: 10, marginLeft:60 }}
                            onClick={() => this.getGamesByTeam(this.state.name)}>
                            Поиск
                        </Button>
                        </fieldset>
                </Form>
                <fieldset hidden={!this.state.isSearching}>
                    <Button variant="light" style={{ marginBottom: 10, marginTop: 10 }}
                        onClick={() => this.handleBack()}>
                        Назад к поиску
                    </Button>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Цена</th>
                                <th>Описание</th>
                                <th>Общая оценка</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.games.map((game, id) =>
                                <tr key={game.id} onClick={() => { this.props.handleChoose(game) }}>
                                    <td>{id + 1}</td>
                                    <td>{game.price}</td>
                                    <td>{game.description}</td>
                                    <td>{game.averageMark} \ 10</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </fieldset>
            </div>
        );
    }

    async getGamesByTeam(team) {
        console.log("Getting");

        const response = await fetch('game/get-by-name', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(team)
        });

        const responseData = await response.json();

        this.setState({ games: responseData })
        this.setState({ isSearching: !this.state.isSearching })

    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            this.getGamesByTeam(this.state.name);

            this.setState({ isValidated: true });
        }
    }

    handleBack() {
        this.setState({ isSearching: !this.state.isSearching })
    }

    handleChangeInput(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
}