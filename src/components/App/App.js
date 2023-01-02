import { Component } from 'react';
import './App.css';
import { fetchData } from '../../apiCalls'

class App extends Component {

  componentDidMount() {
    Promise.resolve(fetchData())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;