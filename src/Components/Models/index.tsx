import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { RouteComponentProps } from "react-router";

import { StoryPanel, IStoryPanelInfo } from "../StoryPanel";
import { StoryContainer } from "../StoryContainer";
import { CommonPage } from "../Page";
import StoryPanelInfos from "./blogPosts";

export interface IModelsProps extends RouteComponentProps<any> {}

function Models({ match }: IModelsProps) {
    const [storyPanels] = useState<IStoryPanelInfo[]>(StoryPanelInfos);

    const storyPanelsDisplay = storyPanels.map(
        (story: IStoryPanelInfo, index: number) => {
            return <StoryPanel key={index} {...story} />;
        }
    );

    let content: React.ReactNode;
    if (match.params.id) {
        const input = storyPanels.find(
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

export default Models;
