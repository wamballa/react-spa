import React, { Component } from 'react'

export class AddGame extends Component {
    
    state = {
        title: null,
        genre: null,
        platform: null,
        year: null
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addGame(this.state);
    }
    render() {

    return (
            <div >
                Add a game
                <form className="form-group" onSubmit={this.handleSubmit}>

                    <div className="form-inline" style={inputStyle}>
                        <label htmlFor="title">Title:</label>
                        <input className="form-control" type="text" id="title"></input>
                    </div>
                    <div className="form-inline" style={inputStyle}>
                        <label htmlFor="genre">Genre:</label>
                        <input className="form-control" type="text" id="genre" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-inline" style={inputStyle}>
                        <label htmlFor="platform">Platform:</label>
                        <input className="form-control" type="text" id="platform" onChange={this.handleChange}></input>
                    </div>

                    <div className="form-inline" style={inputStyle}>
                        <label htmlFor="year">Release year:</label>
                        <input className="form-control" type="text" id="year" onChange={this.handleChange}></input>
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div >
        )
    }
}

const inputStyle = {
    color: '#000',
    textDecoration: 'none',
    padding: '10px'
}

export default AddGame
