import {VacancyLocation, VacancySpecialization} from ".";

export interface Vacancy {
    url: string;
    position: string;
    telegram_message: string;
    specializations: VacancySpecialization[];
    locations: VacancyLocation[];
    company_name: string;
    company_logo: string | null;
    salary_from: number;
    salary_to: number;
    published_at: Date;
}
