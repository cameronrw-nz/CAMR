import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavigationConstants } from "./NavigationConstants";

import HamburgerIcon from "../Resources/Icons/Menu.svg";

interface ITabsProps {
    onMenuClick: () => void;
}

export function Tabs(props: ITabsProps) {
    const tabs = [];
    for (const navItem in NavigationConstants) {
        tabs.push(
            <Link to={NavigationConstants[navItem]}>
                <Tab key={navItem}>{navItem}</Tab>
            </Link>
        );
    }

    return (
        <Nav>
            <Home>
                <Link to="/">CAMR</Link>
            </Home>
            <Img>
                <Menu
                    onClick={props.onMenuClick}
                    src={HamburgerIcon}
                    alt="Switch Search Provider"
                />
            </Img>
            <TabList>{tabs}</TabList>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const TabList = styled.ul`
    margin-bottom: 4px;
    margin-top: 4px;
    margin-right: 118px;
    list-style-type: none;
    padding-inline-start: 0px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: #eeeeee;
        border-radius: 4px;

        :hover {
            background-color: #444444;
        }
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Home = styled.div`
    justify-self: flex-start;
    text-decoration: none;
    border-radius: 4px;
    display: inline;
    margin: 4px 4px 4px 22px;
    font-size: 30px;

    a {
        text-decoration: none;
        color: #eeeeee;
        border-radius: 4px;
        padding: 0px 4px;

        :hover {
            background-color: #444444;
        }
    }
`;

export const Tab = styled.li`
    text-decoration: none;
    border-radius: 4px;
    display: inline;
    margin: 0px 4px;
    padding: 4px 16px;
`;

const Img = styled.div`
    justify-content: flex-end;
    flex: 1 1 auto;
    display: flex;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

const Menu = styled.img`
    fill: white;
    height: 40px;
    margin-top: 4px;
    margin-right: 26px;
    justify-self: flex-end;
`;
