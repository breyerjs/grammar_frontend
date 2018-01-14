import React, { Component } from 'react';
import logo from './img/logo.svg';
import './styles/App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './routes/home/Home';
import Exercise from './routes/exercise/Exercise';
import Navigation from './common_components/Navigation';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <main>
                    {/* Switch only allows the first match to render */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/exercise" component={Exercise} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
