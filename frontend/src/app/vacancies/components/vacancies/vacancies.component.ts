import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {Vacancy} from "@g-mate/vacancies/interfaces";
import {VacancyService} from "@g-mate/vacancies/services";


@Component({
    selector: "app-vacancy",
    styleUrls: ["./vacancies.component.scss"],
    templateUrl: "./vacancies.component.html",
})
export class VacanciesComponent implements OnInit {
    skip = 0;
    limit = 10;
    count = 0;
    vacancies: Vacancy[] = [];
    private params: Params = {};

    constructor(private vacancyService: VacancyService, private route: ActivatedRoute) {
    }

    private getVacancies(): Promise<Vacancy[]> {
        return this.vacancyService.getVacancies(this.skip, this.limit, this.params)
            .toPromise()
            .then(({items, count}) => {
                this.count = count;

                return items;
            });
    }

    public async getMoreVacancies(): Promise<void> {
        this.skip += this.limit;

        const vacancies = await this.getVacancies();
        this.vacancies = [...this.vacancies, ...vacancies];
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(async queryParams => {
            this.skip = 0;
            this.params = queryParams;
            this.vacancies = await this.getVacancies();
        });
    }
}
