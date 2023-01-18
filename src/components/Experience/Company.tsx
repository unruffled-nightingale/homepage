import styled from "styled-components";
import { CompanyDataT } from './types'



type CompanyTitleProps = {
  url?: string
}

const CompanyTitle = styled.h1<CompanyTitleProps>`
  margin-top: 0.5em;
  display: inline-block;
  font-size: 2em;
  cursor: ${props => props.url !== undefined ? "pointer" : "auto"};
  color: ${props => props.url !== undefined ? "#007bff" : "black"};
  &:hover {
    font-weight: ${props => props.url !== undefined ? "bold" : "auto"};
    text-decoration: ${props => props.url !== undefined ? "underline" : "none"};;
  }
`

const Position = styled.h4`
  margin-top: 6px;
`

const Dates = styled.p`
  display: inline-block;
  margin-left: 20px;
`
const Description = styled.p`
  margin-top: 18px;
  font-size: 0.8em;
`

export const Company = ({ name, dates, position, description, url }: CompanyDataT) => {

  const onTitleClick = () => {
    if (url) window.open(url, "_blank")
  }

  return (
    <>
      <CompanyTitle url={url} onClick={onTitleClick}>{name}</CompanyTitle>
      <Dates>{dates}</Dates>
      <Position>{position.toUpperCase()}</Position>
      {description && description.split("\n").map((e, i) => <Description key={i}>{e}</Description>)}
    </>
  )
}