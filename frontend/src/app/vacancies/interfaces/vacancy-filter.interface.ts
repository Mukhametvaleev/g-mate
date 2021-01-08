export type VacancyFilterParam = "s" | "l" | "st";

export interface VacancyFilterChildren {
    value: string;
    title: string;
}

export interface VacancyFilter {
    param: VacancyFilterParam;
    title: string;
    multiple: boolean;
    children: VacancyFilterChildren[];
}
