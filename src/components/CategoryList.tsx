import styled from "styled-components";
import { OverviewT } from "../App";

type CategoryTitleProps = {
    bold?: boolean
}
const CategoryTitle = styled.p<CategoryTitleProps>`
  cursor: pointer;
  margin: 0px;
  margin-bottom: 10px;
  letter-spacing: 0.3em;
  font-size: 0.7em;
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
                        key={c}
                        bold={overview === c} 
                        onClick={() => setOverview(c)}>{c}</CategoryTitle>
                )
            }
        </>
    )
}