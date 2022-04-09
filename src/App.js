import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Fact from './components/Fact';


class App extends Component {
  constructor() {
    super();
    this.state =
    {
      category: "math",
      number: "23",
    };
  }

  handleCategoryChange = (event) => {
    const id = event.target.id;
    this.setState({ category: id });
  }

  handleNumberChange = (event) => {
    const number = event.target.value;
    if (number < 9999) this.setState({number});
  }

  handleRandomClick = () => {
    const randomNumber = Math.floor(Math.random() * 3000);
    this.setState({ number: randomNumber });
  }



  render() {
    const { category, number} = this.state;
    return (
      <div className='main'>
        <div className='header'>
          <h1>Numberphile</h1>
          <div>
            <input value={number} type="number" onChange={this.handleNumberChange} autoFocus placeholder="Choose a number"/>
            <button onClick={this.handleRandomClick}>Random Number</button>
          </div>
        </div>
        <div className='content'>
          <SideBar onClick={this.handleCategoryChange}/>
          <Fact category={category} number={number}/>
        </div>
      </div>
    );
  }

}

export default App;
