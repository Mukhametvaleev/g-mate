import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {environment} from "@env";
import {VacancyFilter, VacancyFilterParam} from "@g-mate/vacancies/interfaces";

@Injectable({
    providedIn: "root"
})
export class VacancyFilterService {
    url = `${environment.API_URL}/vacancies`;
    queryParams: Observable<Params>;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
        this.queryParams = route.queryParams;
    }

    private getStringValue(paramName: VacancyFilterParam, value: string): string | undefined {
        const values = this.route.snapshot.queryParamMap.getAll(paramName);

        if (values.includes(value)) {
            return undefined;
        }

        return value;
    }

    private getArrayValue(paramName: VacancyFilterParam, value: string): string[] | undefined {
        const values = this.route.snapshot.queryParamMap.getAll(paramName);

        if (values.includes(value)) {
            const newValues = values.filter((p: string) => p !== value);

            if (newValues.length) {
                return newValues;
            }

            return undefined;
        }

        return [...values, value];
    }

    public setParam(paramName: VacancyFilterParam, value: string, multiple = false): void {
        const values = multiple
            ? this.getArrayValue(paramName, value)
            : this.getStringValue(paramName, value);


        this.router.navigate(
            [],
            {
                queryParams: {[paramName]: values},
                queryParamsHandling: "merge"
            },
        );
    }

    public getFilters(vacancyFilterValue: VacancyFilterParam): Observable<VacancyFilter> {
        return this.http.get<VacancyFilter>(`${this.url}/filters/${vacancyFilterValue}`);
    }
}
