import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../NavMenu.css';

export class GamesByHigherMarkView extends Component {
    static displayName = GamesByHigherMarkView.name;

    constructor(props) {
        super(props);

        this.state = {
            games: [],
            mark: 0,
            isSearching: false,
            isValidated: false,
            id: 0
        }

        this.getGamesByPosition = this.getGamesByPosition.bind(this);
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
                                        <Form.Label size="sm" className="text">Введите минимальную оценку игры для покупки</Form.Label>
                                        <Form.Control size="sm" type="number" name="mark" value={this.state.mark} placeholder={this.state.mark} onChange={this.handleChangeInput} required />
                                    </Form.Group>
                                </fieldset>
                            </Col>
                        </Row>
                        <Button variant="light" style={{ marginBottom: 10, marginLeft: 60 }}
                            onClick={() => this.getGamesByPosition(this.state.mark)}>
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
                                <th>Название</th>
                                <th>Описание</th>
                                <th>Цена</th>
                                <th>Общая оценка</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.games.map((game, id) =>
                                <tr key={game.id} onClick={() => { this.props.handleChoose(game) }}>
                                    <td>{id + 1}</td>
                                    <td>{game.name}</td>
                                    <td>{game.description}</td>
                                    <td>{game.mark} руб.</td>
                                    <td>{game.averageMark} \ 10</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </fieldset>
            </div>
        );
    }

    async getGamesByPosition(mark) {
        console.log("Getting");

        const response = await fetch('game/get-by-higher-mark', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mark)
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
            this.getGamesByPosition(this.state.mark);

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
