import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marioKart: [
        {
          name: 'Mario',
          count: 0,
        },
        {
          name: 'Luigi',
          count: 0,
        },
        {
          name: 'Bowser',
          count: 0,
        },
        {
          name: 'Yoshi',
          count: 0,
        },
        {
          name: 'Donkey Kong',
          count: 0,
        },
        {
          name: 'Princess Peach',
          count: 0,
        },
        {
          name: 'Toad',
          count: 0,
        }
      ]
    }
  }
  handleIncrement(char) {
    const { marioKart } = this.state;
    const character = marioKart.find(c => c.name === char );
    character.count++;
    this.setState({ marioKart });
  }

  handleDecrement(char) {
    const { marioKart } = this.state;
    const character = marioKart.find(c => c.name === char );
    character.count--;
    this.setState({ marioKart });
  }

  render() {
    return (
      <div className="App">
        {this.state.marioKart.map(char => <h1 key={char.name}>{char.name}: {char.count}</h1>)}
        <Button handle="inc" char="Mario" updateClick={this.handleIncrement.bind(this)} />
        <Button handle="inc" char="Luigi" updateClick={this.handleIncrement.bind(this)} />
        <Button handle="inc" char="Bowser" updateClick={this.handleIncrement.bind(this)} />
        <Button handle="inc" char="Yoshi" updateClick={this.handleIncrement.bind(this)} />
        <Button handle="inc" char="Donkey Kong" updateClick={this.handleIncrement.bind(this)} />
        <Button handle="inc" char="Princess Peach" updateClick={this.handleIncrement.bind(this)} />
        <Button handle="inc" char="Toad" updateClick={this.handleIncrement.bind(this)} />
        <br />
        <Button handle="dec" char="Mario" updateClick={this.handleDecrement.bind(this)} />
        <Button handle="dec" char="Luigi" updateClick={this.handleDecrement.bind(this)} />
        <Button handle="dec" char="Bowser" updateClick={this.handleDecrement.bind(this)} />
        <Button handle="dec" char="Yoshi" updateClick={this.handleDecrement.bind(this)} />
        <Button handle="dec" char="Donkey Kong" updateClick={this.handleDecrement.bind(this)} />
        <Button handle="dec" char="Princess Peach" updateClick={this.handleDecrement.bind(this)} />
        <Button handle="dec" char="Toad" updateClick={this.handleDecrement.bind(this)} />
      </div>
    );
  }
}

export default App;
