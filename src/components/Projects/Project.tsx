import {useEffect, useState} from "react";
import styled from "styled-components";
import {GitHubIcon} from "../Icon";
import {Spinner} from "../Spinner";
import {ProjectsDataT} from "./types";


const GifContainer = styled.div`
  height: 40%;
  width: 100%;
  display: block;
  outline: 10px solid white;
  outline-offset: -2px;
  margin-bottom:30px;
`

type GifProps = {
    visible?: boolean
}

const Gif = styled.img<GifProps>`
  opacity: ${props => props.visible ? 1 : 0};
  max-height: 100%;
  max-width: 100%;
  z-index: 100;
`

type ProjectTitleProps = {
    url?: string
}

const ProjectTitle = styled.h1<ProjectTitleProps>`
  margin-top: 0px;
  margin-left: -3px;
  font-size: 2em;
  display: inline-block;
  margin-bottom: 0px;
  cursor: ${props => props.url !== undefined ? "pointer" : "auto"};
  color: ${props => props.url !== undefined ? "#007bff" : "black"};

  &:hover {
    font-weight: ${props => props.url !== undefined ? "bold" : "auto"};
    text-decoration: ${props => props.url !== undefined ? "underline" : "none"};;
  }
`

const Icon = styled.div`
  display: inline-block;
  padding-right: 12px;
  padding-top: 10px;
`

const Description = styled.p`
  font-size: 0.8em;
`

const PlatformContainer = styled.div`
  display: inline-block;
  height: 20px;
`


const DescriptionContainer = styled.div`
  padding-top: 30px;
`


const Platform = styled.p`
  display: inline-block;
  margin-top: 5px;
  padding-right: 10px;
  font-weight: bold;
`

export const Project = ({name, desc, githubUrl, url, src, platforms}: ProjectsDataT) => {

    const [videoVisible, setVideoVisible] = useState<boolean>(false)

    const onTitleClick = () => {
        if (url) window.open(url, "_blank")
    }

    useEffect(() => {
        setVideoVisible(false)
    }, [githubUrl])

    const onGifLoaded = () => {
        console.log("gif loaded")
        setVideoVisible(true)
    }

    return (
        <>
            {src ?
                <GifContainer>
                    <Gif src={src} alt={name} visible={videoVisible} onLoad={onGifLoaded}/>
                    <Spinner left={name.startsWith("TREA") || name.startsWith("BORD") ? "8%" : "40%"}/>
                </GifContainer> : <><br/></>
            }
            <ProjectTitle url={url} onClick={onTitleClick}>{name}</ProjectTitle>
            <div style={{display: "block"}}>
                {
                    githubUrl &&
                    <Icon>
                        <GitHubIcon url={githubUrl} size={"15px"}/>
                    </Icon>
                }
                {
                    platforms.length > 0 &&
                    <PlatformContainer>{platforms.map((p, i) => <Platform
                        key={i}>{p.toUpperCase()}</Platform>)}</PlatformContainer>
                }
            </div>
            {
                <DescriptionContainer>{desc.split("\n\n\n").map((e) =>
                    <>
                        <br/>
                        {e.split("\n\n").map((x, i) => <Description key={i}>{x}</Description>)}
                    </>
                )
                }
                </DescriptionContainer>
            }
        </>
    )
}
