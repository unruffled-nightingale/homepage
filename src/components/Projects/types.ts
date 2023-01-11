export type ProjectsT = "KINO" | "EVENT_STREAM_REGISTRY" | "FASTAPI_TEMPLATE" |  "ROLLING_GALLERY" | "EMOJI_CANVAS" | "EVERYDLE" | "TRACKLIFT" | "PYTHON_TEMPLATE" 

export type ProjectsDataT = {
    name: ProjectsT, 
    desc: string,  
    platforms: string[],
    githubUrl?: string, 
    url?: string,
    src?: string
}