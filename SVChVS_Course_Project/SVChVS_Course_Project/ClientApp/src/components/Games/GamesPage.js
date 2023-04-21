import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import { GameForm} from './GameForm';
import { GamesTable} from './GamesTable'

export class GamesPage extends Component {
    static displayName = GamesPage.name;

    constructor(props) {
        super(props);

        this.state = {
            games: [],
            game: {},
            isDisplayTable: true,
            isDisplayForm: false,
            isAdding: false,
            isUpdating: false,
        };

        this.handleChoose = this.handleChoose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.clearState = this.clearState.bind(this);

        this.getGames = this.getGames.bind(this);
        this.deleteGame = this.deleteGame.bind(this);
    }

    componentDidMount() {
        this.getGames();
    }

    clearState() {
        this.setState(
            {
                game: {},
                isDisplayTable: true,
                isDisplayForm: false,
                isAdding: false,
                isUpdating: false,
            }
        );
    }

    render() {
        return (
            <Row>
                { this.state.isDisplayTable ?
                <GamesTable
                    handleChoose={this.handleChoose}
                    games={this.state.games}
                    isHidden={!this.state.isDisplayTable}
                    handleAdd={this.handleAdd}
                    handleDelete={this.handleDelete}
                    handleUpdate={ this.handleUpdate}
                />
                    :
                <GameForm
                        game={this.state.game}
                        isHidden={!this.state.isDisplayForm}
                        handleBack={this.handleBack}
                        isUpdating={this.state.isUpdating}
                        isAdding={this.state.isAdding}
                        handleDelete={this.state.handleDelete}
                        deleteGame={this.deleteGame}
                />
                }
            </Row>
        );
    }

    handleAdd() {
        this.setState(
            {
                game: {},
                isDisplayTable: false,
                isDisplayForm: true,
                isAdding:true,
            }
        );
    }

    handleBack() {
        this.clearState();

        this.getGames();
    }

    handleChoose(currentGame) {
        if (event.target.name != "btn-delete") {
            this.setState(
                {
                    game: currentGame,
                    isDisplayTable: false,
                    isDisplayForm: true,
                    isUpdating:true
                }
            );
        }
    }

    handleDelete(currentGame) {
        if (confirm("Вы действительно хотите купить игру?")) {
            this.deleteGame(currentGame);
        }
    }

    handleUpdate(currentGame) {
        this.setState(
            {
                game:currentGame,
                isDisplayForm: true,
                isDisplayTable: false,
                isUpdating: true
            }
        );
    }

    async deleteGame(game) {
        console.log("Deleting");

        await fetch('game/delete', {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(game.id)
        });

        this.getGames();
    }

    async getGames() {
        console.log("Receiving");

        const response = await fetch('game');

        const data = await response.json();

        this.setState({ games: data });
    }
}
