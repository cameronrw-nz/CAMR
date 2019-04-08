import React, { useEffect, useState } from "react";
import { StoryPanel, IStoryPanelInfo } from "../StoryPanel";
import ReactMarkdown from "react-markdown";
import { StoryContainer } from "../StoryContainer";
import { RouteComponentProps } from "react-router";
import { CommonPage } from "../Page";
import StoryPanelInfos from "./blogPosts";

export interface IAdventureProps extends RouteComponentProps<any> {}

function Adventure({ match }: IAdventureProps) {
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

export default Adventure;
