import styled from 'styled-components'
import { CategoryT } from "../App";
import { ReactNode } from "react";

type CategoryTitleProps = {
  bold: boolean
}

export const CategoryTitle = styled.span<CategoryTitleProps>`
  font-family: 'Noto Sans Mono', monospace;
  letter-spacing: 0.7em;
  cursor: pointer;
  font-weight: ${props => props.bold ? "bold" : undefined};
  &:hover {
    font-weight: bold;
  }
`

const CategoryContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: block;
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 10px;
  text-align: right;
`

const CategoryElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
  padding-right: 12px;
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
      <CategoryTitle bold={onFocus} onClick={onClick}>{category}</CategoryTitle>
      {
        onFocus &&
        <CategoryElements>{children}</CategoryElements>
      }
    </CategoryContainer>
  )
}

