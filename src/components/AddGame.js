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
        console.log(this.state);
    }
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange}></input>
                    <label htmlFor="genree">Genre:</label>
                    <input type="text" id="genre" onChange={this.handleChange}></input>
                    <label htmlFor="platform">Platform:</label>
                    <input type="text" id="platform" onChange={this.handleChange}></input>
                    <label htmlFor="year">Release year:</label>
                    <input type="text" id="year" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default AddGame
