import { ReactNode, useEffect, useMemo } from "react";
import styled from "styled-components";
import { CategoryList } from "../CategoryList";
import { OverviewT } from "../../App";
import { COMPANY_DATA } from "./CompanyData";
import { Company } from "./Company";
import { Overview } from "./Overview";
import { ExperienceT } from "./types";

const ExperienceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  flex: 0 0 50%;
  margin-bottom: 30px;
`;

const DetailsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

const NavContainer = styled.div`
  flex: 0 0 20%;
  min-width: 0;
`;

const DetailsContainer = styled.div`
  flex: 0 0 80%;
  min-width: 0;
  box-sizing: border-box;
`;

const DownloadCv = styled.a`
  position: relative;
  top: 10px;
  padding: 0;
  cursor: pointer;
  font-size: 0.7em;
  letter-spacing: 0.3em;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;

type ExperiencePanelProps = {
  overview?: OverviewT;
  setOverview: (x: OverviewT) => void;
};

export const ExperiencePanel = ({ overview, setOverview }: ExperiencePanelProps) => {
  const experienceNames: ExperienceT[] = useMemo(() => {
    const names: ExperienceT[] = COMPANY_DATA.map((c) => c.name);
    names.unshift("OVERVIEW");
    return names;
  }, []);

  const selectedExperienceName: ExperienceT | undefined = experienceNames.includes(
    overview as ExperienceT
  )
    ? (overview as ExperienceT)
    : undefined;

  useEffect(() => {
    if (!selectedExperienceName && experienceNames.length > 0) {
      setOverview(experienceNames[0]);
    }
  }, [experienceNames, selectedExperienceName, setOverview]);

  const renderContent = (): ReactNode => {
    if (selectedExperienceName === "OVERVIEW") {
      return <Overview />;
    }
    const selectedCompany = COMPANY_DATA.find((c) => c.name === selectedExperienceName);
    if (selectedCompany) {
      return <Company {...selectedCompany} />;
    }
    return null;
  };

  if (!selectedExperienceName) return null;

  return (
    <ExperienceContainer>
      <Spacer />
      <DetailsRow>
        <NavContainer>
          <CategoryList
            categories={experienceNames}
            overview={selectedExperienceName}
            setOverview={setOverview}
          />
          <DownloadCv href="/assets/CV - Robert Manteghi.pdf" download>
            DOWNLOAD CV
          </DownloadCv>
        </NavContainer>
        <DetailsContainer>{renderContent()}</DetailsContainer>
      </DetailsRow>
    </ExperienceContainer>
  );
};
