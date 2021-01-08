import {Component, Input} from "@angular/core";

@Component({
    selector: "app-vacancy-salary[from][to]",
    templateUrl: "./vacancy-salary.component.html",
})
export class VacancySalaryComponent {
    @Input()
    from = 0;

    @Input()
    to = 0;
}
