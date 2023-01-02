import React, { Component } from 'react';
import './App.css';
import { fetchData } from '../../apiCalls';
import TrickList from '../TrickList/TrickList';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [],
    }
  }

  componentDidMount() {
    Promise.resolve(fetchData())
      .then(data => {
        this.setState({tricks: data})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <TrickList tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;