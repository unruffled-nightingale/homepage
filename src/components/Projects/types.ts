export type ProjectsT = "KINO" | "BORDLE" | "EVENT_STREAM_REGISTRY (WIP)" | "FASTAPI_TEMPLATE" |  "ROLLING_GALLERY" | "EMOJI_CANVAS" | "LANGUAGE_WALLPAPER" | "EVERYDLE" | "TRACKLIFT" | "PYTHON_TEMPLATE" | "TREASURE_HUNT_APPLICATION"

export type ProjectsDataT = {
    name: ProjectsT, 
    desc: string,  
    platforms: string[],
    githubUrl?: string, 
    url?: string,
    src?: string
}