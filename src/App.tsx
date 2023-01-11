import { ReactNode, useState } from 'react';
import styled from 'styled-components'
import { Category } from "./components/Category";
import { PROJECTS_DATA } from "./components/Projects/ProjectsData";
import { PROJECTS } from "./components/Projects/Projects";
import { ProjectsT } from './components/Projects/types';
import { ExperienceT } from './components/Experience/types';

import { GitHubIcon, LinkedInIcon } from "./components/Icon";
import { ArticleList } from "./components/Articles/ArticleList";
import { CategoryList } from "./components/CategoryList";
import { EXPERIENCE } from './components/Experience/Experience';
import { COMPANY_DATA } from './components/Experience/CompanyData';

const AppContainer = styled.div`
  font-family: 'Noto Sans Mono', monospace;
  font-size: 0.8em;
  font-weight: 100;

`

const Header = styled.div`
  display: block;
`

const Title = styled.h1`
  font-family: 'Noto Serif JP', serif;
  font-weight: 100;
  display: inline-block;
  font-size: 3em;
  margin-top: 0;
`

const Icons = styled.div`
  padding-left: 20px;
  display: inline-block;
`

const SideBar = styled.div`
  width: 45%;
  left: 40px;
  top: 24px;
  height: 70%;
  position: absolute;
`

const Overview = styled.div`
  left: 45%;
  width: 40%;
  top: 40px;
  height: 700px;
  position: absolute;
`


export type CategoryT = "PROJECTS" | "ARTICLES" | "EXPERIENCE" | "BALL" | undefined

export type OverviewT = ProjectsT | ExperienceT

const GITHUB_URL = "https://github.com/unruffled-nightingale/"
const LINKEDIN_URL = "https://www.linkedin.com/in/robert-manteghi/"

const OVERVIEWS: Record<OverviewT, ReactNode> = { ...PROJECTS, ...EXPERIENCE }

const EXPERIENCE_LIST: OverviewT[] = COMPANY_DATA.map(e => e.name)
EXPERIENCE_LIST.unshift("OVERVIEW")

const PROJECT_LIST: OverviewT[] = PROJECTS_DATA.map(e => e.name)

function App() {

    const [category, setCategory] = useState<CategoryT>()
    const [overview, setOverview] = useState<OverviewT>()

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
                        <LinkedInIcon url={LINKEDIN_URL} size={"16px"} />
                        <GitHubIcon url={GITHUB_URL} size={"15px"} />
                    </Icons>
                </Header>
                <Category onClick={onCategoryClick("PROJECTS")} category={"PROJECTS"} onFocus={category === "PROJECTS"}>
                    <CategoryList categories={PROJECT_LIST} overview={overview} setOverview={setOverview} />
                </Category>
                <Category onClick={onCategoryClick("EXPERIENCE")} category={"EXPERIENCE"} onFocus={category === "EXPERIENCE"}>
                    <CategoryList categories={EXPERIENCE_LIST} overview={overview} setOverview={setOverview} />
                </Category>
                <Category onClick={onCategoryClick("ARTICLES")} category={"ARTICLES"} onFocus={category === "ARTICLES"}>
                    <ArticleList />
                </Category>
                <Category onClick={onCategoryClick("BALL")} category={"BALL"} onFocus={category === "BALL"}>
                </Category>
            </SideBar>
            <Overview>
                {overview && OVERVIEWS[overview]}
            </Overview>
        </AppContainer>
    );
}

export default App;
