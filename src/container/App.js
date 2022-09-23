import React, { Component } from 'react';
import Button from '../components/Button.js';
import CardList from '../components/CardList.js';
import Scroll from '../components/Scroll.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes:[],
    }
  }

  fetchJoke = async function () {
    const jokes = this.state.jokes;
    console.log(1,jokes)
    const fetchedData = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await fetchedData.json(); 
    jokes.push(joke);
    this.setState({ jokes: jokes })
    console.log(2,jokes);   
  }

  onClickFetch = () => {
    this.fetchJoke();
  }

  onClickRemove = () => {
    this.setState({jokes:[]});
  }

  componentDidMount() {
    this.fetchJoke()  
  }
  
  render() {
    const jokes = this.state.jokes;
    console.log(3,jokes);
    return (
      <div className='pa2 bg-color-red'>
        <h1 className='tc fontAstra'>Chuck Norris Jockes Generator</h1>
        <div className='center mw5'>
          <Button onClick={this.onClickFetch}>Generate joke</Button>
          <Button onClick={this.onClickRemove}>Remove jokes</Button>
        </div>
        <Scroll>
          <CardList jokes={jokes} />
        </Scroll>
      </div>
    )
  };
}

export default App;
