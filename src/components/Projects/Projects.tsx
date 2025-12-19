import { ReactNode } from 'react'
import { PROJECTS_DATA } from './ProjectsData'
import { Project } from './Project'
import { ProjectsT } from './types'


export const PROJECTS: Record<ProjectsT, ReactNode> = 
    PROJECTS_DATA.reduce((obj, item)=> { 
        obj[item.name] = 
            <Project 
                key={item.name}
                src={item.src} 
                videoSrc={item.videoSrc}
                name={item.name} 
                desc={item.desc}  
                githubUrl={item.githubUrl} 
                url={item.url} 
                platforms={item.platforms}
            />
    return obj
}, {} as Record<ProjectsT, ReactNode>)
