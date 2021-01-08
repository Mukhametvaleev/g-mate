import {Component, Input, OnInit} from "@angular/core";

import {Vacancy, VacancyFilter} from "@g-mate/vacancies/interfaces";
import {VacancyFilterService} from "@g-mate/vacancies/services";

export type TitleByLocation = Record<string, string>;

@Component({
    selector: "app-vacancies-cards",
    templateUrl: "./vacancies-cards.component.html"
})
export class VacanciesCardsComponent implements OnInit {
    @Input()
    vacancies: Vacancy[] = [];

    titleByLocation: TitleByLocation | null = null;

    constructor(private vacancyFilterService: VacancyFilterService) {
    }

    ngOnInit(): void {
        // FIXME: Заменить доп. HTTP-запрос на Observable
        this.vacancyFilterService
            .getFilters("l")
            .subscribe((vacancyFilter: VacancyFilter) => {
                this.titleByLocation = vacancyFilter.children.reduce<TitleByLocation>((titleByLocation, child) => {
                    titleByLocation[child.value] = child.title;
                    return titleByLocation;
                }, {});
            });
    }
}
