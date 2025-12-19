import {ReactNode, useEffect, useState} from "react";
import styled from "styled-components";
import {GitHubIcon} from "../Icon";
import {Spinner} from "../Spinner";
import {ProjectsDataT} from "./types";


const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const MediaContainer = styled.div`
  flex: 0 0 50%;
  width: 100%;
  display: block;
  overflow: hidden;
  outline: 10px solid white;
  outline-offset: -2px;
  margin-bottom: 30px;
`

type VideoProps = {
    visible?: boolean
}

const Video = styled.video<VideoProps>`
  opacity: ${props => props.visible ? 1 : 0};
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: bottom left;
  z-index: 100;
  transition: opacity 200ms ease-in-out;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: bottom left;
`

const DetailsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`

const NavContainer = styled.div`
  flex: 0 0 25%;
  min-width: 0;
`

const DetailsContainer = styled.div`
  flex: 0 0 75%;
  min-width: 0;
  box-sizing: border-box;
`

type ProjectTitleProps = {
    url?: string
}

const ProjectTitle = styled.h1<ProjectTitleProps>`
  margin-top: 0px;
  margin-left: -3px;
  font-size: 1.5em;
  display: inline-block;
  margin-bottom: 0px;
  font-family: 'Noto Serif JP', serif;
  letter-spacing: 0.7em;

  cursor: ${props => props.url !== undefined ? "pointer" : "auto"};
  color: ${props => props.url !== undefined ? "#007bff" : "black"};

  &:hover {
    font-weight: ${props => props.url !== undefined ? "bold" : "auto"};
    text-decoration: ${props => props.url !== undefined ? "underline" : "none"};;
  }
`

const TitleRow = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const Icon = styled.div`
  display: inline-block;
  vertical-align: bottom;
`

const Description = styled.p`
  text-align: justify;
  font-size: 0.85em;
  font-family: 'STIX Two Text', monospace;
`

const DescriptionContainer = styled.div`
`

type ProjectProps = ProjectsDataT & {
    nav?: ReactNode
}

export const Project = ({name, desc, githubUrl, url, src, videoSrc, nav}: ProjectProps) => {

    const [videoVisible, setVideoVisible] = useState<boolean>(false)

    const onTitleClick = () => {
        if (url) window.open(url, "_blank")
    }

    useEffect(() => {
        setVideoVisible(false)
    }, [githubUrl])

    const onVideoLoaded = () => {
        setVideoVisible(true)
    }

    return (
        <ProjectContainer>
            <MediaContainer>
                {videoSrc ? (
                    <Video 
                        src={videoSrc}
                        visible={videoVisible} 
                        onLoadedData={onVideoLoaded}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : src ? (
                    <Image src={src} alt={`${name} preview`} />
                ) : null}
            </MediaContainer>
            <DetailsRow>
                <NavContainer>{nav}</NavContainer>
                <DetailsContainer>
                    <TitleRow>
                        <ProjectTitle url={url} onClick={onTitleClick}>{name}</ProjectTitle>
                        {githubUrl && (
                            <Icon>
                                <GitHubIcon url={githubUrl} size={"15px"}/>
                            </Icon>
                        )}
                    </TitleRow>
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
                </DetailsContainer>
            </DetailsRow>
        </ProjectContainer>
    )
}
