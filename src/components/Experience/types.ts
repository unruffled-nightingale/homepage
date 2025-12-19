export type ExperienceT = "OVERVIEW" | "EXPERIAN" | "BABYLON HEALTH" | "EDUCATION"

export type CompanyDataT = {
    name: ExperienceT,
    dates: string,
    position: string,
    description?: string,
    url?: string
}