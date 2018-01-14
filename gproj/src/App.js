import React, { Component } from 'react';
import logo from './img/logo.svg';
import './styles/App.css';
import { Route, Link } from 'react-router-dom';
import Home from './routes/home/home';

class App extends Component {
    render() {
        return (
            <div className="App">
            TODO Navigation
                <main>
                    <Route exact path="/" component={Home} />
                </main>
            </div>
        );
    }
}

export default App;
