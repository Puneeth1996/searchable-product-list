import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FilterableProductTable from './FilterableProductTable';
import Clock from './Clock';


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
class App extends Component {


  render() {
      return (
      <div className="App">
        <header className="App-header">
          <Clock />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Searchable Product List</h2>
          <FilterableProductTable products={PRODUCTS} />          
        </header>
      </div>
    );
  }
}

export default App;
