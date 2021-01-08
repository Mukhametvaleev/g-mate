import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {VacancyFilterParam} from "@g-mate/vacancies/interfaces";

@Component({
    selector: "app-vacancies-filters",
    templateUrl: "./vacancies-filters.component.html",
    styleUrls: ["./vacancies-filters.component.scss"]
})
export class VacanciesFiltersComponent {
    vacancyFilterValues: VacancyFilterParam[] = ["s", "l", "st"];

    constructor(private router: Router) {
    }

    resetFilters(event: MouseEvent): void {
        event.preventDefault();

        this.router.navigate([]);
    }
}
