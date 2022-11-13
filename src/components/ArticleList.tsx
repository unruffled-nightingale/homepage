import React from "react";
import styled from "styled-components";

type ProjectTitleProps = {
    bold?: boolean
}
const ArticleTitle = styled.p<ProjectTitleProps>`
  cursor: pointer;
  font-weight: ${props => props.bold ? "bold" : undefined};
  color: #007bff;
  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`
const openWindow = (url: string) => () => window.open(url, "_blank")

export const ArticleList = () => {
    return (
        <>
            <ArticleTitle onClick={openWindow("https://www.google.com/")}>Event Stream Registry - How to build a declarative API</ArticleTitle>
        </>
    )
}