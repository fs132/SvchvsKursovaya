import React, { Component } from 'react';
import { GameFormView } from './GameFormView';

export class GameForm extends Component {
    static displayName = GameForm.name;

    constructor(props) {
        super(props);

        this.state = {
            game: this.props.game,
            formStateAdding: "Добавление",
            formStateUpdating: "Обновление",
            formStateExamine: "Просмотр",
        };

        this.handlePost = this.handlePost.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.postGame = this.postGame.bind(this);
        this.updateGame = this.updateGame.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    render() {
        return (
                <GameFormView
                game={this.state.game}
                isHidden={this.props.isHidden}
                isAdding={this.props.isAdding}
                isUpdating={this.props.isUpdating}
                handlePost={this.handlePost}
                handleUpdate={this.handleUpdate}
                handleBack={this.handleBack}
                handleDelete={this.handleDelete}
                />
        );
    }

    handlePost(event, game) {
        event.preventDefault();

        this.postGame(game);
    }

    handleUpdate(event, game) {
        event.preventDefault();

        this.updateGame(game);
    }

    handleDelete(event, currentGame) {
        event.preventDefault();

        if (confirm("Вы действительно хотите купить игру?")) {
            this.props.deleteGame(currentGame);
        }
    }

    async postGame(game) {
        console.log("Sending");

        await fetch('game/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(game)
        });
    }

    async updateGame(game) {
        console.log("Updating");

        await fetch('game/update', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(game)
        });
    }

    handleBack(event) {
        event.preventDefault();
        this.props.handleBack();
    }
}
