import { useState } from 'react';
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
import { ArticlesPanel } from "./components/Articles/ArticlesPanel";
import { TalksPanel } from "./components/Articles/TalksPanel";
import { ExperiencePanel } from './components/Experience/ExperiencePanel';
import { BallPanel } from './components/Ball/BallPanel';

const AppContainer = styled.div`
  font-family: 'Noto Sans Mono', monospace;
  font-size: 0.8em;
  font-weight: 100;
  width: 100%;
  height: 100%;
  margin: 0;
`

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
  justify-content: flex-end;
  gap: 10px;
  margin-top: 2rem;
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
  padding-right: 70px;
  box-sizing: border-box;
`

const CategoriesContainer = styled.div`
  grid-row: 2;
  justify-self: end;
  align-self: start;
`

export type CategoryT = "PROJECTS" | "ARTICLES" | "TALKS" | "EXPERIENCE" | "BALL" | undefined

export type OverviewT = ProjectsT | ExperienceT

const GITHUB_URL = "https://github.com/unruffled-nightingale/"
const LINKEDIN_URL = "https://www.linkedin.com/in/robert-manteghi/"

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
              <Category onClick={onCategoryClick("EXPERIENCE")} category={"EXPERIENCE"} onFocus={category === "EXPERIENCE"} />
              <Category onClick={onCategoryClick("ARTICLES")} category={"ARTICLES"} onFocus={category === "ARTICLES"} />
              <Category onClick={onCategoryClick("TALKS")} category={"TALKS"} onFocus={category === "TALKS"} />
              <Category onClick={onCategoryClick("BALL")} category={"BALL"} onFocus={category === "BALL"} />
              <Icons>
                <LinkedInIcon url={LINKEDIN_URL} size={"16px"} />
                <GitHubIcon url={GITHUB_URL} size={"15px"} />
              </Icons>
            </CategoriesContainer>
            <Header>
              <Title>ROBERT MANTEGHI</Title>
            </Header>
          </SideBar>
          <Overview>
            {category === "PROJECTS" ? (
              <ProjectsPanel overview={overview} setOverview={setOverview} />
            ) : category === "EXPERIENCE" ? (
              <ExperiencePanel overview={overview} setOverview={setOverview} />
            ) : category === "ARTICLES" ? (
              <ArticlesPanel />
            ) : category === "TALKS" ? (
              <TalksPanel />
            ) : category === "BALL" ? (
              <BallPanel />
            ) : null}
          </Overview>
        </AppContainer>
      </BrowserView>
    </>
  );
}

export default App;
