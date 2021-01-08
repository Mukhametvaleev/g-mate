import {Component, Input} from "@angular/core";

@Component({
    selector: "app-vacancies-summary",
    styleUrls: ["./vacancies-summary.component.scss"],
    templateUrl: "./vacancies-summary.component.html",
})
export class VacanciesSummaryComponent {
    @Input()
    count = 0;
}
