import React from 'react';
// UI Component
// Does not have a class so no state. Doesn't need a state as gets from Container Component
const Games = (props) => {
    // could deconstruct props above by replacing props with {games}
    // const {title, genre, platform } = this.props;   
    const { games } = props;
    const { deleteGame } = props;
    const gameList = games.map(game => {
        return game.year > 1960 ? (
            <div className="game" key={game.id}>
                <div>Title: {game.title}</div>
                <div>Genre: {game.genre}</div>
                <div>Platform: {game.platform}</div>
                <div>Release year: {game.year}</div>
                <button onClick={
                    () => {
                        deleteGame(game.id)
                    }
                }>Delete</button>
            </div>
        ) : null;
    })
    return (
        // This is called the template
        <div className="game-list">
            {gameList}
        </div>
    )
}
export default Games
