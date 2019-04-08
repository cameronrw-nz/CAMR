import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { RouteComponentProps } from "react-router";

import { StoryContainer } from "../StoryContainer";
import { IStoryPanelInfo, StoryPanel } from "../StoryPanel";
import { NavigationConstants } from "../NavigationConstants";
import { CommonPage } from "../Page";

interface IHomeProps extends RouteComponentProps<any> {}

function Home({ match }: IHomeProps) {
    const [storyPanels, setStoryPanels] = useState<
        IStoryPanelInfo[] | undefined
    >(undefined);

    useEffect(() => {
        setStoryPanels([
            {
                title: "Coding",
                item: NavigationConstants.Coding,
                imageUrl: require("../../Resources/Images/Coding.jpg")
            },
            {
                title: "Adventures",
                item: NavigationConstants.Adventure,
                imageUrl: require("../../Resources/Images/Fushimi-Inari-Taisha.jpg")
            },
            {
                title: "Models",
                item: NavigationConstants.Models,
                imageUrl: require("../../Resources/Images/TS-Marine.jpg")
            },
            {
                title: "Reading",
                item: NavigationConstants.Reading,
                imageUrl: require("../../Resources/Images/BookShelf.jpg")
            }
        ] as IStoryPanelInfo[]);
    }, []);

    const storyPanelsDisplay =
        storyPanels &&
        storyPanels.map((story: IStoryPanelInfo, index: number) => {
            return <StoryPanel key={index} {...story} />;
        });

    let content = (
        <ReactMarkdown escapeHtml={false} source={homePageMarkdown} />
    );

    return (
        <CommonPage isStoryPage={true}>
            <StoryContainer>
                <div>{content}</div>
                {storyPanelsDisplay}
            </StoryContainer>
        </CommonPage>
    );
}

export default Home;

const homePageMarkdown = `
About Me
============

My name is Cameron Williams and I am a Software Engineer. I was born in New Zealand and currently work in Bangkok Thailand.

For more info on my coding projects please visit:
https://github.com/cameronrw-nz
`;
