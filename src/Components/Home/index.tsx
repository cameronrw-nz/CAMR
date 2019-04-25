import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { StoryContainer } from "../StoryContainer";
import { IStoryPanelInfo, StoryPanel } from "../StoryPanel";
import { NavigationConstants } from "../NavigationConstants";
import { CommonPage } from "../Page";
import Icon from "./Icon";

import EmailLogo from "../../Resources/Icons/email.svg";
import GitHubLogo from "../../Resources/Icons/github.svg";
import LinkedInLogo from "../../Resources/Icons/linkedin.svg";

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

    return (
        <CommonPage isStoryPage={true}>
            <StoryContainer>
                <div className="about-me">
                    <div className="about-me-heading">About Me</div>
                    <div className="about-me-content">
                        My name is Cameron Williams and I am a Software
                        Engineer. I was born in New Zealand and currently work
                        in Bangkok, Thailand.
                    </div>
                    <div className="about-me-icon-section">
                        <Icon url="cameronrw.nz@gmail.com" logo={EmailLogo} />
                        <Icon
                            url="https://github.com/cameronrw-nz"
                            logo={GitHubLogo}
                        />
                        <Icon
                            url="https://www.linkedin.com/in/cameron-williams-594754122/"
                            logo={LinkedInLogo}
                        />
                    </div>
                </div>
                {storyPanelsDisplay}
            </StoryContainer>
        </CommonPage>
    );
}

export default Home;
