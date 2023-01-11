import styled from "styled-components";
import { OverviewT } from "../App";

type CategoryTitleProps = {
    bold?: boolean
}
const CategoryTitle = styled.p<CategoryTitleProps>`
  cursor: pointer;
  font-size: 0.8em;
  font-weight: ${props => props.bold ? "bold" : undefined};
  &:hover {
    font-weight: bold;
  }
`
type CategoryListProps = {
    categories: OverviewT[]
    overview?: string
    setOverview: (x: OverviewT) => void
}

export const CategoryList = ({ categories, overview, setOverview }: CategoryListProps) => {
    return (
        <>
            {
                categories.map(c =>
                    <CategoryTitle
                        bold={overview === c} 
                        onClick={() => setOverview(c)}>{c}</CategoryTitle>
                )
            }

        </>
    )
}