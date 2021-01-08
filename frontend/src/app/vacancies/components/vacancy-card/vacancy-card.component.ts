import {Component, Input} from "@angular/core";

import {Vacancy} from "@g-mate/vacancies/interfaces";
import {TitleByLocation} from "@g-mate/vacancies/components";

@Component({
    selector: "app-vacancy-card[vacancy][titleByLocation]",
    templateUrl: "./vacancy-card.component.html",
    styleUrls: ["./vacancy-card.component.scss"]
})
export class VacancyCardComponent {
    @Input()
    vacancy!: Vacancy;

    @Input()
    titleByLocation!: TitleByLocation;
}
