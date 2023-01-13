export type ExperienceT = "OVERVIEW" | "EXPERIAN" | "BABYLON_HEALTH" | "EDUCATION"

export type CompanyDataT = {
    name: ExperienceT,
    dates: string,
    position: string,
    description?: string,
    url?: string
}