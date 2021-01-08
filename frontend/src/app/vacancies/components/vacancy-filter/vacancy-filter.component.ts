import {Component, Input, OnInit} from "@angular/core";

import {VacancyFilter, VacancyFilterParam} from "@g-mate/vacancies/interfaces";
import {VacancyFilterService} from "@g-mate/vacancies/services";

@Component({
    selector: "app-vacancy-filter[param]",
    templateUrl: "./vacancy-filter.component.html",
    styleUrls: ["./vacancy-filter.component.scss"]
})
export class VacancyFilterComponent implements OnInit {
    @Input()
    param!: VacancyFilterParam;

    vacancyFilter: VacancyFilter | null = null;
    multiple = false;
    values: string[] = [];

    constructor(private vacancyFilterService: VacancyFilterService) {
    }

    setValue(event: MouseEvent, value: string): void {
        event.preventDefault();

        this.vacancyFilterService.setParam(this.param, value, this.multiple);
    }

    ngOnInit(): void {
        this.vacancyFilterService
            .getFilters(this.param)
            .subscribe((vacancyFilter) => {
                this.vacancyFilter = vacancyFilter;
                this.multiple = vacancyFilter.multiple;
            });

        this.vacancyFilterService.queryParams.subscribe(queryParams => {
            this.values = queryParams[this.param] || [];
        });
    }
}
