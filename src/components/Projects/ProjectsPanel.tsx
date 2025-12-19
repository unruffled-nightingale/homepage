import { useEffect, useMemo } from "react";
import { CategoryList } from "../CategoryList";
import { OverviewT } from "../../App";
import { PROJECTS_DATA } from "./ProjectsData";
import { Project } from "./Project";
import { ProjectsT } from "./types";

type ProjectsPanelProps = {
  overview?: OverviewT;
  setOverview: (x: OverviewT) => void;
};

export const ProjectsPanel = ({ overview, setOverview }: ProjectsPanelProps) => {
  const projectNames = useMemo(() => PROJECTS_DATA.map((p) => p.name), []);

  const selectedProjectName: ProjectsT | undefined = projectNames.includes(
    overview as ProjectsT
  )
    ? (overview as ProjectsT)
    : undefined;

  useEffect(() => {
    if (!selectedProjectName && projectNames.length > 0) {
      setOverview(projectNames[0]);
    }
  }, [projectNames, selectedProjectName, setOverview]);

  const selectedProject = selectedProjectName
    ? PROJECTS_DATA.find((p) => p.name === selectedProjectName)
    : undefined;

  if (!selectedProject) return null;

  return (
    <Project
      {...selectedProject}
      nav={
        <CategoryList
          categories={projectNames}
          overview={selectedProjectName}
          setOverview={setOverview}
        />
      }
    />
  );
};

