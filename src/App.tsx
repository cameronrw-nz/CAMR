import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

import './App.css';
import Home from './Components/Home';
import { Tabs } from './Components/Tabs';
import { NavigationConstants } from './Components/NavigationConstants';
import Adventure from './Components/Adventure';
import Coding from './Components/Coding';
import Models, { IModelsProps } from './Components/Models';
import Reading from './Components/Reading';

class App extends Component {
    render() {
        console.log(process.env.PUBLIC_URL)
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="background-image"></div>
                <div className="App">
                    <header className="App-header">
                        <Tabs />
                    </header>
                    <Switch>
                        <Route path="/" exact component={withRouter(Home)} />
                        <Route path={NavigationConstants.Coding} exact component={withRouter(Coding)} />
                        <Route path={`${NavigationConstants.Coding}/:id`} exact component={withRouter(Coding)} />
                        <Route path={NavigationConstants.Adventure} exact component={withRouter(Adventure)} />
                        <Route path={`${NavigationConstants.Adventure}/:id`} exact component={withRouter(Adventure)} />
                        <Route path={NavigationConstants.Models} exact component={withRouter<IModelsProps>(Models)} />
                        <Route path={`${NavigationConstants.Models}/:id`} exact component={withRouter(Models)} />
                        <Route path={NavigationConstants.Reading} exact component={withRouter(Reading)} />
                        <Route path={`${NavigationConstants.Reading}/:id`} exact component={withRouter(Reading)} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
