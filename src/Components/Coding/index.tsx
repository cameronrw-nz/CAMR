import React, { useEffect, useState } from 'react';
import { StoryPanel, IStoryPanelInfo } from '../StoryPanel';
import ReactMarkdown from 'react-markdown'
import { StoryContainer } from '../StoryContainer';
import { RouteComponentProps } from 'react-router';
import { CommonPage } from '../Page';
import StoryPanelInfos from './blogPosts'

interface ICodingProps extends RouteComponentProps<any> {
}

function Coding({ match }: ICodingProps) {
    const [storyPanels, setStoryPanels] = useState<IStoryPanelInfo[] | undefined>(undefined);

    useEffect(() => {
        setStoryPanels(StoryPanelInfos)
    }, []);

    const storyPanelsDisplay = storyPanels && storyPanels.map((story: IStoryPanelInfo, index: number) => {
        return (
            <StoryPanel
                key={index}
                {...story}
            />
        );
    });

    let content: React.ReactNode;
    if (match.params.id) {
        const input = storyPanels && storyPanels.find(storyPanel => storyPanel.id === match.params.id);

        if (input !== undefined) {
            content = <ReactMarkdown escapeHtml={false} source={input!.markDown} />;
        }
    }
    else {
        content = (
            <StoryContainer>
                {storyPanelsDisplay}
            </StoryContainer>
        );
    }

    return (
        <CommonPage isStoryPage={match.params.id === undefined}>
            {content}
        </CommonPage>
    );
}

export default Coding