import React, {ReactNode, useState} from 'react';
import './App.css';
import styled from 'styled-components'
import {Category} from "./components/Category";
import {ProjectList} from "./components/ProjectList";
import {Project} from "./components/Project";
import {GitHubIcon, LinkedInIcon} from "./components/Icon";
import {ArticleList} from "./components/ArticleList";
import {CvOverview} from "./components/CvOverview";
import {CategoryList} from "./components/CategoryList";
import {CvCompany} from "./components/CvCompany";

const AppContainer = styled.div`
  font-family: 'Noto Sans Mono', monospace;
  font-size: 0.8em;
`

const Header = styled.div`
  display: block;
`

const Title = styled.h1`
  display: inline-block;
  font-size: 3em;
`

const Icons = styled.div`
  padding-left: 30px;
  display: inline-block;
`

const SideBar = styled.div`
  width: 45%;
  left: 10%;
  top: 20%;
  height: 70%;
  position: absolute;
`

const Overview = styled.div`
  left: 50%;
  width: 40%;
  top: 10%;
  height: 700px;
  position: absolute;
`


export type CategoryT = "PROJECTS" | "ARTICLES" | "CV" | undefined
export type OverviewT = "CV" | "SIMMS" | "CV_OVERVIEW" | "CV_BABYLON" | "CV_EXPERIAN" | "CV_EDUCATION"

function App() {

    const [category, setCategory] = useState<CategoryT>()
    const [overview, setOverview] = useState<OverviewT>()

    const getOverview = (): ReactNode => {
        if (overview === "SIMMS") return <Project gifSrc={""} title={"simms"} description={"blah"}/>
        if (overview === "CV_OVERVIEW") return <CvOverview/>
        if (overview === "CV_BABYLON") return <CvCompany title={"Babylon"} dates={"2018 - PRESENT"} description={"asdfasfasg"} position={"Senior Software Engineer"}/>
        if (overview === "CV_EDUCATION") return <CvCompany title={"University of Leeds"} dates={"2010 - 2014"} position={"BSc Mathematics and Philosophy - First Class Honors"}/>
    }

    const onCategoryClick = (name: CategoryT) => {
        return () => {
            if (name === category) return
            setCategory(name)
            setOverview(undefined)
        }
    }


    return (
        <AppContainer>
            <SideBar>
                <Header>
                    <Title>Robert Manteghi</Title>
                    <Icons>
                        <GitHubIcon url={"https://github.com/babylonhealth/manifests/pull/68193"} size={"20px"}/>
                        <LinkedInIcon url={"https://github.com/babylonhealth/manifests/pull/68193"} size={"20px"}/>
                    </Icons>
                </Header>
                <Category onClick={onCategoryClick("PROJECTS")} category={"PROJECTS"} onFocus={category === "PROJECTS"}>
                    <ProjectList overview={overview} setOverview={setOverview}/>
                </Category>
                <Category onClick={onCategoryClick("CV")} category={"CV"} onFocus={category === "CV"}>
                    <CategoryList overview={overview} setOverview={setOverview}/>
                </Category>
                <Category onClick={onCategoryClick("ARTICLES")} category={"ARTICLES"} onFocus={category === "ARTICLES"}>
                    <ArticleList/>
                </Category>

            </SideBar>
            <Overview>
                {getOverview()}
            </Overview>
        </AppContainer>
    );
}

export default App;
