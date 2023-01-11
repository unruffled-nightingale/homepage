import { ExperienceT } from "./types"
import { ReactNode } from "react"
import { Company } from "./Company"
import { Overview } from "./Overview"
import { COMPANY_DATA } from './CompanyData'


export const COMPANIES: Record<ExperienceT, ReactNode> = COMPANY_DATA.reduce((obj, item)=> { 
    obj[item.name] = <Company name={item.name} dates={item.dates} position={item.position} description={item.description} url={item.url} />;
    return obj;
}, {} as Record<ExperienceT, ReactNode>)


export const EXPERIENCE: Record<ExperienceT, ReactNode> = {...COMPANIES, ...{"OVERVIEW": <Overview />}}

