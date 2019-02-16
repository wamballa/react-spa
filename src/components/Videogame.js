import React, { Component } from 'react';

export class Videogame extends Component {
    render() {
        // const {title, genre, platform } = this.props;   
        const { games } = this.props;

        const gameList = games.map(game => {
            console.log (game);
            return (
                <div className="game" key={game.id}>
                    <div>Title: {game.title}</div>
                    <div>Genre: {game.genre}</div>
                    <div>Platform: {game.platform}</div>
                </div>
            )
        })
        return (
            <div className="game-list">
                {gameList}
            </div>
        )
    }
}

export default Videogame
