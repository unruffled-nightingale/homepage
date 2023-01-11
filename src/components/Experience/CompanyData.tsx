import { CompanyDataT } from "./types"

export const BABYLON_DESCRIPTION = `Construction of tooling to maintain, manage, and simplify the construction of event streams in Babylon. How many topics and how many streams.tion of tooling to maintain, manage, and simplify the construction of event streams in Babylon. How many topics and how many streams.
Lead developer of Babylon’s Population Health explorer that enables non-technical user to query and provide population level insights of Babylon’s health data.

Lead developer of Babylon’s Flow Builder that allows non-technical users to construct data pipelines to ingest, transform, and export data within Babylon’s data ecosystem.
Open-sourced the Event Stream Registry (see PROJECTS)
`

export const EXPERIAN_DESCRIPTION = `Responsible for the recalculation of the UK’s largest business database. 
Lead the improvement and development of data recalculation, refactoring the existing monolithic framework to decoupled stream processes.
Lead developer of Experian’s event streaming platform which allows users to connect APIs through the wider Experian business through the automated deployment of monitored event streams.
`

export const COMPANY_DATA: CompanyDataT[] = [
  {
    name: "BABYLON_HEALTH",
    dates: "2018 - PRESENT",
    position: "Lead Software Engineer",
    description: BABYLON_DESCRIPTION,
    url: "https://www.babylonhealth.com/en-gb"
  },
  {
    name: "EXPERIAN",
    dates: "2014 - 2018",
    position: "Senior Data Engineer",
    description: EXPERIAN_DESCRIPTION,
    url: "https://www.experian.co.uk/"
  },
  {
    name: "EDUCATION",
    dates: "2014 - 2018",
    position: "University of Leeds",
    description:  "BSc Mathematics and Philosophy - First Class Honors",
  }
]