import { CompanyDataT } from "./types"

export const BABYLON_DESCRIPTION = `
Maintained and developed Babylon Health's event streaming platform, growing it to a platform consisting of over 12,000 topics, across 13 clusters, processing half a billion records a day.
Lead developer for the Population Health Explorer that empowers non-technical users to query and analyse Babylon Health's data, enabling population-level health insights.
Implemented tooling to simplify utilisation and promote adoption of event streaming.
Lead developer for the Flow Builder enabling non-technical users to construct data pipelines for ingesting, transforming and exporting data within Babylon Health.
Managed a team overseeing projects and providing guidance for personal development.

`

export const EXPERIAN_DESCRIPTION = `Responsible for the recalculation of the UK’s largest business database. 
Led the improvement and development of data recalculation, refactoring the existing monolithic framework to decoupled stream processes.
Lead developer of Experian’s event streaming platform, allowing users to connect APIs within the wider Experian business through pipelines. 
`

export const COMPANY_DATA: CompanyDataT[] = [
  {
    name: "BABYLON HEALTH",
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