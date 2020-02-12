import React, { Component } from 'react';
import Header from './Page/Header.js'
import Main from './Page/Main.js'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}
export default App;
