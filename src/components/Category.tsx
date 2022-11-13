import styled from 'styled-components'
import {CategoryT} from "../App";
import {ReactNode} from "react";

type CategoryTitleProps = {
    bold: boolean
}

const CategoryTitle = styled.span<CategoryTitleProps>`
  cursor: pointer;
  font-weight: ${props => props.bold ? "bold" : undefined};
  &:hover {
    font-weight: bold;
  }
`

const CategoryContainer = styled.div`
  height: 100%;
  width: 30%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
`

const CategoryElements = styled.div``


type CategoryProps = {
    category: CategoryT
    onFocus: boolean
    children?: ReactNode
    onClick: () => void
}

export const Category = ({category, onClick, onFocus, children}: CategoryProps) => {

    return (
        <CategoryContainer>
            <CategoryTitle bold={onFocus} onClick={onClick}>{category}</CategoryTitle>
            {onFocus &&
                <CategoryElements>{children}</CategoryElements>
            }
        </CategoryContainer>
    )
}

