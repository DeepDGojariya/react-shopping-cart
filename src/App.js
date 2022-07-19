import React, { Component } from "react";
import './index.css'
import data from './data.json'
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }

  sortProducts = (event) => {

    const sort = event.target.value
    console.log(sort)
    this.setState({
      sort: sort,
      products: this.state.products.slice().sort((a, b) =>
        sort === "lowest" ? a.price > b.price ? 1 : -1 : sort === "highest" ? a.price < b.price ? 1 : -1 : a._id < b._id ? 1 : -1)
    })
  }

  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({
        products: data.products,
        size: event.target.value
      })
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
      })
    }
  }


  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar-fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar w/ text</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-text">
              Admin
            </span>
          </div>
        </nav>
        <div className="content">
          <div className="main">
            <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}></Filter>
            <Products products={this.state.products} />
          </div>
          <div className="sidebar">Cart-Items</div>
        </div>
        <footer className="bg-dark text-light text-center " style={{ position: "fixed", bottom: 0, width: "100%", padding: "10px 10px 0px 10px", height: "40px" }}>All Rights Reserved</footer>
      </>
    );
  }
}

export default App;

