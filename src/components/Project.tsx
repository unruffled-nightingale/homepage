import React from "react";
import logo from '../assets/demo.gif'
import styled from "styled-components";
import {GitHubIcon} from "./Icon";

type ProjectsProps = {
    gifSrc: string
    title: string
    description: string
}

const Gif = styled.img`
  height: 50%;
  display: block;

`

const ProjectTitle = styled.h1`
  font-size: 3em;
  display: inline-block;
`

const Icon = styled.div`
  display: inline-block;
  padding-left: 30px;
`

export const Project = ({gifSrc, title, description}: ProjectsProps) => {
    return (
        <>
            <Gif src={logo} alt={title} />
            <ProjectTitle>{title}</ProjectTitle>
            <Icon>
                <GitHubIcon url={"https://github.com/babylonhealth/manifests/pull/68193"} size={"20px"}/>
            </Icon>
            <p>{description}</p>
        </>
    )
}