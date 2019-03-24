import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { NavigationConstants } from './NavigationConstants';

export interface IStoryPanelProps {
}

export interface IStoryPanelInfo {
    defaultImgColour?: string;
    title: string;
    item: NavigationConstants;
    markDown?: string;
    description?: string;
    imageUrl?: any;
    id?: string;
}

export function StoryPanel({ defaultImgColour, id, item, imageUrl, title }: IStoryPanelProps & IStoryPanelInfo) {
    let image;

    if (imageUrl) {
        image = (
            <PanelImage
                src={imageUrl}
            />
        )
    }

    return (
        <Link to={`${item}${id ? "/" + id : ""}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Panel>
                <PanelImageContainer style={{ backgroundColor: defaultImgColour || "grey" }}>
                    {image}
                </PanelImageContainer>
                <Footer>
                    {title}
                </Footer>
            </Panel>
        </Link>
    )
}

const Panel = styled.div`
    width: 260px;
    height: 280px;
    padding: 20px 20px 0px 20px;

    :hover {
        
        > div {
            box-shadow: 0px 3px 8px grey;

        }
    }
`

const PanelImageContainer = styled.div`
    height: 260px;
    width: 260px;
`

const PanelImage = styled.img`
    object-fit: cover;
    max-width:100%;
    max-height:100%;
    height: 100%;
`

const Footer = styled.p`
    margin: 0;
    padding: 0;
    font-weight:bold;
`