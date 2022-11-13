import styled from "styled-components";
import linkedinLight from '../assets/linkedin-light2.png'
import linkedinDark from '../assets/linkedin-dark2.png'
import githubDark from '../assets/github-dark3.png'
import githubLight from '../assets/github-light2.png'

import React, {useState} from "react";

type IconImgProps = {
    size: string
}

const IconDiv = styled.div<IconImgProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
`


const IconImg = styled.img<IconImgProps>`
  height: ${props => props.size};
  position: absolute;
`

type BaseIconProps = IconProps & {
    firstImg: string
    secondImg: string
    alt: string
}

export const BaseIcon = ({url, size, firstImg, secondImg, alt}: BaseIconProps) => {

    const openWindow = (url: string) => () => window.open(url)

    const [mouseOver, setMouseOver] = useState<boolean>(false)

    const _mouseOver = () => setMouseOver(true)
    const _mouseOut = () => setMouseOver(false)

    return (
        <IconDiv size={size} onMouseOver={_mouseOver} onMouseOut={_mouseOut}>
            {
                mouseOver
                    ? <IconImg size={size} src={secondImg} alt={alt} onMouseDown={openWindow(url)}/>
                    : <IconImg size={size} src={firstImg} alt={alt} onMouseDown={openWindow(url)}/>
            }
        </IconDiv>
    )
}

type IconProps = {
    url: string
    size: string
}

export const GitHubIcon = ({url, size}: IconProps) => {
    return <BaseIcon
        url={url}
        size={size}
        firstImg={githubLight}
        secondImg={githubDark}
        alt={"GitHub"}/>
}

export const LinkedInIcon = ({url, size}: IconProps) => {
    return <BaseIcon
        url={url}
        size={size}
        firstImg={linkedinLight}
        secondImg={linkedinDark}
        alt={"LinkedIn"}/>
}