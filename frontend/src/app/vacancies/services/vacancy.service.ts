import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Params} from "@angular/router";

import {environment} from "@env";
import {Vacancy} from "@g-mate/vacancies/interfaces";

export interface CollectionResponse<T> {
    count: number;
    items: T[];
}

@Injectable({
    providedIn: "root"
})
export class VacancyService {
    url = `${environment.API_URL}/vacancies`;

    constructor(private http: HttpClient) {
    }

    getVacancies(skip = 0, limit = 0, params?: Params): Observable<CollectionResponse<Vacancy>> {
        return this.http.get<CollectionResponse<Vacancy>>(
            this.url,
            {
                params: {
                    skip: skip.toString(),
                    limit: limit.toString(),
                    ...params
                }
            }
        );
    }
}
