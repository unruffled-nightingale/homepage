import styled from 'styled-components'
import { CategoryT } from "../App";
import { ReactNode } from "react";

type CategoryTitleProps = {
  bold: boolean
}

export const CategoryTitle = styled.span<CategoryTitleProps>`
  cursor: pointer;
  font-weight: ${props => props.bold ? "bold" : undefined};
  &:hover {
    font-weight: bold;
  }
`

const CategoryContainer = styled.div`
  height: 100%;
  width: 22%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
  margin-left: 3px;
`

const CategoryElements = styled.div`
  width: 500%;
`


type CategoryProps = {
  category: CategoryT
  onFocus: boolean
  children?: ReactNode
  onClick: () => void
}

export const Category = ({ category, onClick, onFocus, children }: CategoryProps) => {

  return (
    <CategoryContainer>
      <CategoryTitle bold={onFocus} onMouseOver={onClick}>{category}</CategoryTitle>
      {
        onFocus &&
        <CategoryElements>{children}</CategoryElements>
      }
    </CategoryContainer>
  )
}

