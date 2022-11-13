import React from "react";
import styled from "styled-components";
import {OverviewT} from "../App";

type ProjectTitleProps = {
    bold?: boolean
}
const ProjectTitle = styled.p<ProjectTitleProps>`
  cursor: pointer;
  font-weight: ${props => props.bold ? "bold" : undefined};
  &:hover {
    font-weight: bold;
  }
`
type ProjectsProps = {
    overview?: string
    setOverview: (x: OverviewT) => void
}

export const ProjectList = ({overview, setOverview}: ProjectsProps) => {
    return (
        <>
            <ProjectTitle bold={overview === "SIMMS"} onClick={() => setOverview("SIMMS")}>Works by Simms</ProjectTitle>
            <ProjectTitle bold={overview === "CV"} onClick={() => setOverview("CV")}>Event Stream Registry</ProjectTitle>
            <ProjectTitle>Emoji Canvas</ProjectTitle>
            <ProjectTitle>Treasure Hunt App</ProjectTitle>
            <ProjectTitle>Everydle</ProjectTitle>
            <ProjectTitle>Tracklift</ProjectTitle>
            <ProjectTitle>Fast API template</ProjectTitle>
            <ProjectTitle>Python template</ProjectTitle>
        </>
    )
}