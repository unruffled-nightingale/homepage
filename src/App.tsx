import { ReactNode, useState } from 'react';
import styled from 'styled-components'
import World from "./components/Ball/World";
import Controls from "./components/Ball/Controls/Controls";
import { Category } from "./components/Category";
import { Mobile } from "./components/Mobile";
import { useMovement } from "./components/Ball/useMovement";
import { ProjectsPanel } from "./components/Projects/ProjectsPanel";
import type { ProjectsT } from "./components/Projects/types";
import { ExperienceT } from './components/Experience/types';
import { BrowserView, MobileView } from 'react-device-detect';

import { GitHubIcon, LinkedInIcon } from "./components/Icon";
import { ArticleList } from "./components/Articles/ArticleList";
import { CategoryList } from "./components/CategoryList";
import { EXPERIENCE } from './components/Experience/Experience';
import { COMPANY_DATA } from './components/Experience/CompanyData';

const AppContainer = styled.div`
  font-family: 'Noto Sans Mono', monospace;
  font-size: 0.8em;
  font-weight: 100;
  width: 100%;
  height: 100%;

`

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin: 0;
  grid-row: 1;
  align-self: end;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-family: 'Noto Serif JP', serif;
  font-weight: 100;
  margin: 0;
  font-size: 2em;
  letter-spacing: 0.8em;
  /* counter trailing letter-spacing so it can sit flush right */
  margin-right: -0.5em;
`

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-left: auto; /* push icons + title group to the right */
  margin-right: 12px; /* small gap between icons and title */
  padding-bottom: 0.60em; /* align with text baseline */
`

const SideBar = styled.div`
  width: 45%;
  left: 40px;
  top: 40px;
  height: 700px;
  position: absolute;
  display: grid;
  grid-template-rows: calc(700px * 0.5 + 30px) 1fr;
`

const Overview = styled.div`
  /* SideBar starts at 40px and is 45% wide -> right edge is calc(45% + 40px).
     Start Overview after that with a small gap to avoid overlap. */
  left: calc(45% + 60px);
  width: calc(55% - 100px);
  top: 40px;
  height: 700px;
  position: absolute;
`

const CategoriesContainer = styled.div`
  grid-row: 2;
  justify-self: end;
  align-self: start;
`

const BallControls = styled.p`
`


const DownloadCv = styled.a`
    position: relative;
    top: -2px;
    padding: 0;
    cursor: pointer;
    font-size: 0.8em;
    text-decoration: none;
    &:hover {
        font-weight: bold;
        text-decoration: underline;
    }
`

export type CategoryT = "PROJECTS" | "ARTICLES" | "EXPERIENCE" | "BALL" | undefined

export type OverviewT = ProjectsT | ExperienceT

const GITHUB_URL = "https://github.com/unruffled-nightingale/"
const LINKEDIN_URL = "https://www.linkedin.com/in/robert-manteghi/"

const OVERVIEWS = EXPERIENCE

const EXPERIENCE_LIST: OverviewT[] = COMPANY_DATA.map(e => e.name)
EXPERIENCE_LIST.unshift("OVERVIEW")

function App() {

  const [category, setCategory] = useState<CategoryT>()
  const [overview, setOverview] = useState<OverviewT>()

  const [loaded, setLoaded] = useState(false);
  const [started, setStarted] = useState(false);
  const [movement, setMovement, moved] = useMovement();

  const onCategoryClick = (name: CategoryT) => {
    return () => {
      if (name === category) return
      setCategory(name)
      setOverview(undefined)
      if (name === "BALL") setStarted(true)
    }
  }

  
  return (
    <>
      <MobileView>
        <Mobile/>
      </MobileView>
      <BrowserView style={{height: "100%"}}>
        <AppContainer>
          <Controls setMovement={setMovement} />
          <World movement={movement} started={started} setLoaded={setLoaded} />
          <SideBar>
            <CategoriesContainer>
              <Category onClick={onCategoryClick("PROJECTS")} category={"PROJECTS"} onFocus={category === "PROJECTS"} />
              <Category onClick={onCategoryClick("EXPERIENCE")} category={"EXPERIENCE"} onFocus={category === "EXPERIENCE"}>
                <CategoryList categories={EXPERIENCE_LIST} overview={overview} setOverview={setOverview} />
                <DownloadCv href='/assets/CV - Robert Manteghi.pdf' download>DOWNLOAD CV</DownloadCv>

              </Category>
              <Category onClick={onCategoryClick("ARTICLES")} category={"ARTICLES"} onFocus={category === "ARTICLES"}>
                <ArticleList />
              </Category>
              <Category onClick={onCategoryClick("BALL")} category={"BALL"} onFocus={category === "BALL"}>
                <BallControls>Use <b>W A S D</b> to move</BallControls>
              </Category>
            </CategoriesContainer>
            <Header>
            <Icons>
                <LinkedInIcon url={LINKEDIN_URL} size={"16px"} />
                <GitHubIcon url={GITHUB_URL} size={"15px"} />
              </Icons>
                           <Title>ROBERT MANTEGHI</Title>
 
            </Header>
          </SideBar>
          <Overview>
            {category === "PROJECTS" ? (
              <ProjectsPanel overview={overview} setOverview={setOverview} />
            ) : (
              overview && OVERVIEWS[overview as ExperienceT]
            )}
          </Overview>
        </AppContainer>
      </BrowserView>
    </>
  );
}

export default App;
