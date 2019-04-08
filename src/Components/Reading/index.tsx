import React from "react";
import ReactMarkdown from "react-markdown";
import { RouteComponentProps } from "react-router";

import { StoryPanel, IStoryPanelInfo } from "../StoryPanel";
import { StoryContainer } from "../StoryContainer";
import { CommonPage } from "../Page";
import StoryPanelInfos from "./blogPosts";

interface IReadingProps extends RouteComponentProps<any> {}

function Reading({ match }: IReadingProps) {
    const storyPanelsDisplay = StoryPanelInfos.map(
        (story: IStoryPanelInfo, index: number) => {
            return <StoryPanel key={index} {...story} />;
        }
    );

    let content: React.ReactNode;
    if (match.params.id) {
        const input = StoryPanelInfos.find(
            storyPanel => storyPanel.id === match.params.id
        );

        if (input !== undefined) {
            content = (
                <ReactMarkdown escapeHtml={false} source={input!.markDown} />
            );
        }
    } else {
        content = <StoryContainer>{storyPanelsDisplay}</StoryContainer>;
    }

    return (
        <CommonPage isStoryPage={match.params.id === undefined}>
            {content}
        </CommonPage>
    );
}

export default Reading;
