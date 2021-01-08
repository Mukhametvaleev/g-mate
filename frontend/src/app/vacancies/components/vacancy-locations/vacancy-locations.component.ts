import {Component, Input} from "@angular/core";

import {VacancyLocation} from "@g-mate/vacancies/interfaces";
import {TitleByLocation} from "@g-mate/vacancies/components";

@Component({
    selector: "app-vacancy-locations[locations]",
    styleUrls: ["./vacancy-locations.component.scss"],
    templateUrl: "./vacancy-locations.component.html",
})
export class VacancyLocationsComponent {
    @Input()
    locations!: VacancyLocation[];

    @Input()
    titleByLocation!: TitleByLocation;
}
