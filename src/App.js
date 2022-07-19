import React, { Component } from "react";
import './index.css'
import data from'./data.json'
import Products from "./components/Products";

class App extends Component {
  constructor(){
    super()
    this.state={
      products:data.products,
      size:""
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
          <div className="main"><Products products={this.state.products}/></div>
          <div className="sidebar">Cart-Items</div>
        </div>
        <footer className="bg-dark text-light text-center " style={{ position: "fixed", bottom: 0, width: "100%", padding: "10px 10px 0px 10px", height: "40px"}}>All Rights Reserved</footer>
      </>
    );
  }
}

export default App;

