import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { NavigationConstants } from './NavigationConstants';

interface ITabsProps {

}

export function Tabs(props: ITabsProps) {
    const tabs = []
    for (const navItem in NavigationConstants) {
        tabs.push(
            <Tab key={navItem}>
                <Link to={NavigationConstants[navItem]}>
                    {navItem}
                </Link>
            </Tab>
        );
    }

    return (
        <nav>
            <Tab>
                <Link to="/">
                    CAMR
                </Link>
            </Tab>
            <TabList>
                {tabs}
            </TabList>
        </nav>
    )
}

const TabList = styled.ul`
    margin: 8px 0px;
    list-style-type: none;
    padding-inline-start: 0px;
    display: inline-block;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const Tab = styled.li`
    text-decoration: none;
    border-radius: 4px;
    display: inline;
    margin: 0px 4px;
    padding: 4px 16px;
    
    
    :hover {
        background-color: #444444;
    }

    a {
        text-decoration: none;
        color: #EEEEEE;
    }
`