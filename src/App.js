import React, { Component } from 'react';
import Videogame from './components/Videogame';
import AddGame from './components/AddGame';
import './App.css';
// CONTAINER COMPONENT
// holds state / hooks state from internet and feeds to UI COMPONENT (like navbar)
class App extends Component {
    state = {
        games: [{
            title: "star wars", genre: "Arcade", platform: "PC", year: 1971, id: 1
        },
        {
            title: "CnC", genre: "RTS", platform: "PC", year: 1985, id: 2
        },
        {
            title: "Alien Isolation", genre: "Horror", platform: "PC, Mac", year: 2010, id: 3
        }
        ]
    }
    addGame = (game) => {
        // child passes new value back through game
        game.id = Math.random();
        console.log (game.id);
        let gameList = [...this.state.games, game];
        // clone games array and add a new game object to it with a spread array
        this.setState({
            games: gameList
        })
        // console.log (ninjaList);
    }
    deleteGame = (id) => {
        console.log (id);
        let gameList = this.state.games.filter(game =>{
            // returns only when true
            // doesnt add to gameList games with id gotten from clicked button
            return game.id !== id;
        })
        this.setState({
            games: gameList
        })
    }
    render() {
        return (
            <div className="app-container">
                <h1>Video Game Catalogue</h1>
                <Videogame deleteGame={this.deleteGame} games={this.state.games} />
                <AddGame addGame={this.addGame}/>
            </div>
        )
    }

}

export default App;
