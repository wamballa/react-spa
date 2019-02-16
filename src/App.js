import React, { Component } from 'react';
import Videogame from './components/Videogame';
import './App.css';

// CONTAINER COMPONENT
// holds state / hooks state from internet and feeds to UI COMPONENT (like navbar)

class App extends Component {
    state = {
        games: [{
            title: "star wars",
            genre: "Arcade",
            platform: "PC",
            id: 1
        },
        {
            title: "CnC",
            genre: "RTS",
            platform: "PC",
            id: 2
        }
        ]
    }
    render() {
        return (
            <div className="app-container">
                <h1>Video Game Catalogue</h1>
                <Videogame games={this.state.games} />
            </div>
        )
    }

}

export default App;
