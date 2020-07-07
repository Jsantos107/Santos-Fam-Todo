import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <header className="header">
            <img src="./Santos-TLogo.png" alt="SantosTo-Do"/>
            <nav className="nav-bar">
                <button>
                  <Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link>
                </button>
            </nav>
          </header>
          <main className='main'>
            <Switch>
              <Route exact path='/'>
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;