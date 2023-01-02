import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor({ handleSubmit }) {
        super()
        this.state = {
            stance: 'Choose Your Stance',
            name: '',
            obstacle: 'Choose Your Obstacle',
            tutorial: '',
        }
        this.handleSubmit = handleSubmit
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <form id='form'>
                <select id='stance' name='stance' value={this.state.stance} onChange={this.handleChange}>
                    <option value="Choose Your Stance" disabled hidden>Choose Your Stance</option>
                    <option value="Regular">Regular</option>
                    <option value="Switch">Switch</option>
                </select>
                <input id='name' name='name' placeholder='Name of Trick' value={this.state.name} onChange={this.handleChange}></input>
                <select id='obstacle' name='obstacle' value={this.state.obstacle} onChange={this.handleChange}>
                    <option value="Choose Your Obstacle" disabled hidden>Choose Your Obstacle</option>
                    <option value="Flatground">Flatground</option>
                    <option value="Ledge">Ledge</option>
                    <option value="Rail">Rail</option>
                    <option value="Stairs">Stairs</option>
                    <option value="Pool">Pool</option>
                </select>
                <input id='tutorial' name='tutorial' placeholder='Link to Tutorial' value={this.state.tutorial} onChange={this.handleChange}></input>
                <button onClick={(event) => {
                    event.preventDefault()
                    this.handleSubmit(this.state)
                    }}>Send It!
                </button>
            </form>
        )
    }
}

export default Form;