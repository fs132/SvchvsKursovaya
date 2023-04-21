import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { GamesTableView } from './GamesTableView';

export class GamesTable extends Component {
    static displayName = GamesTable.name;

    constructor(props) {
        super(props);

        this.state = {
            game:{}
        }

        this.handleChoose = this.handleChoose.bind(this);
    }

    render() {
        return (
            <div hidden={this.props.isHidden}>
                <Button variant="light" style={{ marginBottom: 10,  marginTop:10 }} onClick={(event) => this.handleAdd(event)}>
                    Добавить
                </Button>
                <GamesTableView
                    games={this.props.games}
                    handleChoose={this.handleChoose}
                    handleExamine={this.props.handleExamine}
                    handleUpdate={this.props.handleUpdate}
                    handleDelete={this.props.handleDelete}
                />
            </div>
        );
    }

    handleChoose(game) {
        this.setState(
            {
                game: game
            }
        )

        this.props.handleChoose(game);
    }

    handleAdd(event) {
        event.preventDefault();
        this.props.handleAdd();
    }
}
