import React from "react";
import styled from "styled-components";

interface IStoryContainerProps {
    children: React.ReactNode;
}

export function StoryContainer({ children }: IStoryContainerProps) {
    return <Container>{children}</Container>;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
