import React, { useState, useEffect } from 'react';
import { StoryContainer } from './StoryContainer';
import { RouteComponentProps } from 'react-router';
import { IStoryPanelInfo, StoryPanel } from './StoryPanel';
import { NavigationConstants } from './NavigationConstants';
import { CommonPage } from './Page';

interface IHomeProps extends RouteComponentProps<any> {

}

function Home({ match }: IHomeProps) {
    const [storyPanels, setStoryPanels] = useState<IStoryPanelInfo[] | undefined>(undefined);

    useEffect(() => {
        setStoryPanels([
            { title: "Coding", item: NavigationConstants.Coding, imageUrl: require("../Resources/Images/Coding.jpg") },
            { title: "Adventures", item: NavigationConstants.Adventure, imageUrl: require("../Resources/Images/Fushimi-Inari-Taisha.jpg") },
            { title: "Models", item: NavigationConstants.Models, imageUrl: require("../Resources/Images/TS-Marine.jpg") },
            { title: "Reading", item: NavigationConstants.Reading, imageUrl: require("../Resources/Images/BookShelf.jpg") },
        ] as IStoryPanelInfo[])
    }, []);

    const storyPanelsDisplay = storyPanels && storyPanels.map((story: IStoryPanelInfo, index: number) => {
        return (
            <StoryPanel
                key={index}
                {...story}
            />
        )
    });

    return (
        <CommonPage isStoryPage={true}>
            <StoryContainer>
                {storyPanelsDisplay}
            </StoryContainer>
        </CommonPage>
    )
}

export default Home;