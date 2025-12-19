import styled from "styled-components";
import { CompanyDataT } from './types'



type CompanyTitleProps = {
  url?: string
}

const CompanyTitle = styled.h1<CompanyTitleProps>`
  font-family: 'Noto Serif JP', serif;
  letter-spacing: 0.7em;
  margin-top: 0px;
  display: inline-block;
  font-size: 1.5em;
  cursor: ${props => props.url !== undefined ? "pointer" : "auto"};
  color: ${props => props.url !== undefined ? "#007bff" : "black"};
  &:hover {
    font-weight: ${props => props.url !== undefined ? "bold" : "auto"};
    text-decoration: ${props => props.url !== undefined ? "underline" : "none"};;
  }
`

const PositionDatesRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
`

const Position = styled.h4`
  margin: 0;
  font-family: 'Noto Sans Mono', monospace;
  letter-spacing: 0.6em;
`

const Dates = styled.p`
  letter-spacing: 0.3em;
  font-size: 0.7em;
  font-weight: bold;
  margin: 0;
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
      <PositionDatesRow>
        <Position>{position.toUpperCase()}</Position>
        <Dates>{dates}</Dates>
      </PositionDatesRow>
      {description && description.split("\n").map((e, i) => <Description key={i}>{e}</Description>)}
    </>
  )
}