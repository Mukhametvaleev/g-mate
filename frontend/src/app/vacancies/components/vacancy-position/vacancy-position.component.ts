import {Component, Input} from "@angular/core";

@Component({
    selector: "app-vacancy-position[url][position][companyName]",
    templateUrl: "./vacancy-position.component.html",
})
export class VacancyPositionComponent {
    @Input()
    url!: string;

    @Input()
    position!: string;

    @Input()
    companyName!: string;
}
