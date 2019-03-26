import React from 'react';
import styled from 'styled-components';

interface IPageProps {
    children: React.ReactNode;
    isStoryPage?: boolean;
}

export function CommonPage({ children, isStoryPage = false }: IPageProps) {
    return (
        <Page>
            <ScrollableContent isStoryPage={isStoryPage}>
                {children}
            </ScrollableContent>
        </Page>
    )
}

const Page = styled.div`
    display: flex;
    justify-content: center;
    height: calc(100% - 74px);
    min-height: 0;
    overflow-y: auto;
    padding-bottom: 20px;
    -webkit-overflow-scrolling: touch;
`

const ScrollableContent = styled.div`
    background-position: center;
    background-color: white;
    height: fit-content;
    min-height: calc(100% - 20px);
    width: calc(45% - ${(props: IPageProps) => props.isStoryPage ? -80 : 80}px);
    padding: 0px ${(props: IPageProps) => props.isStoryPage ? 0 : 80}px;
    padding-bottom: 20px;

    @media only screen and (max-width: 768px) {
        min-height: calc(100% - 20px);
        width: calc(90% - ${(props: IPageProps) => props.isStoryPage ? -20 : 20}px);
        max-width: calc(300px - ${(props: IPageProps) => props.isStoryPage ? -20 : 20}px);
        padding: 0px ${(props: IPageProps) => props.isStoryPage ? 0 : 20}px;
        padding-bottom: 20px;
        height: fit-content;
    }
`