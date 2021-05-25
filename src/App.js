import React from 'react'
import './App.css';
import {mattresses} from './mattresses.json'
import PageHeader from './PageHeader.js'
import Chooser from './Chooser.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {cart: []}
  }

  addToCart(item) {
    this.setState({cart: [...this.state.cart, item]})
  }

  render() {
    return (
      <div className="App">
        <PageHeader cart={this.state.cart} />
        <Chooser mattresses={mattresses} addToCart={this.addToCart.bind(this)} />
      </div>
    );
  }
}
