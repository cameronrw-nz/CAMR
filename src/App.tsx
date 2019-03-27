import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter, Link } from 'react-router-dom'

import './App.css';
import Home from './Components/Home';
import { Tabs, Tab } from './Components/Tabs';
import { NavigationConstants } from './Components/NavigationConstants';
import Adventure from './Components/Adventure';
import Coding from './Components/Coding';
import Models, { IModelsProps } from './Components/Models';
import Reading from './Components/Reading';
import styled from 'styled-components';

interface IAppState {
    isNavigationExpanded: boolean;
}

class App extends Component<{}, IAppState> {
    readonly state = {
        isNavigationExpanded: false
    } as IAppState;

    onMenuClick = () => {
        this.setState({
            isNavigationExpanded: !this.state.isNavigationExpanded
        })
    }

    render() {
        console.log(process.env.PUBLIC_URL)

        const tabs = []
        for (const navItem in NavigationConstants) {
            tabs.push(
                <Link to={NavigationConstants[navItem]} onClick={this.onMenuClick}>
                    <Tab key={navItem}>
                        {navItem}
                    </Tab>
                </Link>
            );
        }

        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="background-image" />
                <div className="App">
                    <NavigationPanel style={{ display: this.state.isNavigationExpanded ? "flex" : "none" }}>
                        {tabs}
                    </NavigationPanel>
                    <header className="App-header">
                        <Tabs onMenuClick={this.onMenuClick} />
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

const NavigationPanel = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 3;
    position: absolute;
    background-color: #282c34;;
    height: 100%;
    width: 75%;
    margin-top: 53px;
    padding-top: 30px;
    transition: 0.5s;


    a {
        text-decoration: none;
        color: #EEEEEE;
        border-radius: 6px;
        display: inline;
        margin: 4px 16px;
        font-size: 25px;
        padding: 8px 8px;
        background-color: #444444;

    }

    @media only screen and (min-width: 768px) {
        display: none;
    }
`

export default App;
