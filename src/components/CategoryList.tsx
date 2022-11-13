import styled from "styled-components";
import {OverviewT} from "../App";

type CategoryTitleProps = {
    bold?: boolean
}
const CategoryTitle = styled.p<CategoryTitleProps>`
  cursor: pointer;
  font-weight: ${props => props.bold ? "bold" : undefined};
  &:hover {
    font-weight: bold;
  }
`
type CategoryListProps = {
    overview?: string
    setOverview: (x: OverviewT) => void
}

export const CategoryList = ({overview, setOverview}: CategoryListProps) => {
    return (
        <>
            <CategoryTitle bold={overview === "CV_OVERVIEW"} onClick={() => setOverview("CV_OVERVIEW")}>Overview</CategoryTitle>
            <CategoryTitle bold={overview === "CV_BABYLON"} onClick={() => setOverview("CV_BABYLON")}>Babylon</CategoryTitle>
            <CategoryTitle bold={overview === "CV_EXPERIAN"} onClick={() => setOverview("CV_EXPERIAN")}>Experian</CategoryTitle>
            <CategoryTitle bold={overview === "CV_EDUCATION"} onClick={() => setOverview("CV_EDUCATION")}>Education</CategoryTitle>
        </>
    )
}