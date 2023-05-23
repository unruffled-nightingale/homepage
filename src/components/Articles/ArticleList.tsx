import styled from "styled-components";
import {CategoryTitle} from "../Category";

type ProjectTitleProps = {
    bold?: boolean
}
const ArticleTitle = styled.p<ProjectTitleProps>`
  cursor: pointer;
  width: 200px;
  font-size: 0.8em;
  color: blue;
  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`

const openWindow = (url: string) => () => window.open(url, "_blank")

export const ArticleList = () => {
    return (
        <>
            <ArticleTitle
                onClick={openWindow("https://medium.com/babylon-technology-blog/why-you-need-an-event-stream-registry-9b2a81b6cc98")}>
                Why you need an Event Stream Registry
            </ArticleTitle>
            <ArticleTitle
                onClick={openWindow("https://medium.com/@unruffled.nightingale/implementing-an-event-stream-registry-9b242a06025")}>
                Implementing an Event Stream Registry
            </ArticleTitle>
            <ArticleTitle
                onClick={openWindow("https://medium.com/@unruffled.nightingale/building-a-data-lineage-tool-from-an-event-stream-registry-8d984506618e")}>
                Building a data-lineage tool
            </ArticleTitle>
            <br/>
            <br/>
            <CategoryTitle bold={true}>TALKS</CategoryTitle>
            <ArticleTitle
                onClick={openWindow("https://www.kafka-summit.org/sessions/why-you-need-an-event-stream-registry")}>
                Kafka Summit 2023
            </ArticleTitle>
        </>
    )
}