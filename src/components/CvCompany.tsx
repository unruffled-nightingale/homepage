import React from "react";
import styled from "styled-components";


const CompanyTitle = styled.h1`
  display: inline-block;
`

const Position = styled.h3`
  margin-top: 6px;
`

const Dates = styled.p`
  display: inline-block;
  margin-left: 12px;
`
const Description = styled.p`
    margin-top: 24px;
`

type CvCompanyProps = {
    title: string,
    dates: string,
    position: string,
    description?: string
}
export const CvCompany = ({title, dates, position, description} : CvCompanyProps) => {
    return (
        <>
            <CompanyTitle>{title}</CompanyTitle>
            <Dates>{dates}</Dates>
            <Position>{position}</Position>
            {description && <Description>{description}</Description>}
        </>
    )
}