import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class GamesTableView extends Component {
    static displayName = GamesTableView.name;

    constructor(props) {
        super(props);

        this.state = {
            id:0
        }
    }

    render() {
        return (
            <Table striped bordered hover variant="dark" hidden={this.props.isHidden}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Год выпуска</th>
                        <th>Общая оценка</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.games.map((game, id) =>
                        <tr key={game.id} onClick={() => { this.props.handleChoose(game) }}>
                            <td>{id + 1}</td>
                            <td>{game.name}</td>
                            <td>{game.description}</td>
                            <td>{game.price} руб.</td>
                            <td>{game.releaseYear} год</td>
                            <td>{game.averageMark} \ 10</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
}
