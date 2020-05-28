import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


class App extends Component {

  state = {
    user: {
      name: 'Bob',
      age: 60,
      email: 'bfronz1960@gmail.com',
      address: 'Phillipsburg, New Jersey',
      phone: '999-999-9999'
    }
  }

  render() {

    // Destructure name out of state for the Header component

    return (
      <div className="App">
        <header className="App-header">

          {/* Add props to <Header /> to customize the welcome greeting */}
          <Header name={this.state.user.name}/>

          {/* Add props to <Main /> pass down the user profile */}
          <Main user={this.state.user} />

          <Footer />

        </header>
      </div>
    );
  }
}

export default App;
