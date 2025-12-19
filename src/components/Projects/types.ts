export type ProjectsT = "KINO" | "BORDLE" | "EVENT STREAM REGISTRY" | "FASTAPI TEMPLATE" |  "ROLLING GALLERY" | "EMOJI CANVAS" | "LANGUAGE WALLPAPER" | "EVERYDLE" | "TRACKLIFT" | "PYTHON TEMPLATE" | "TREASURE HUNT"

export type ProjectsDataT = {
    name: ProjectsT, 
    desc: string,  
    platforms: string[],
    githubUrl?: string, 
    url?: string,
    src?: string
    videoSrc?: string
}