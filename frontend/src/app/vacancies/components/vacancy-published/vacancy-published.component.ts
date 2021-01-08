import {Component, Input} from "@angular/core";

@Component({
    selector: "app-vacancy-published[publishedAt]",
    templateUrl: "./vacancy-published.component.html",
})
export class VacancyPublishedComponent {
    @Input()
    publishedAt!: Date;
}
