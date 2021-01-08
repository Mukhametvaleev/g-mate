import {Component, Input} from "@angular/core";

@Component({
    selector: "app-vacancy-company-logo[src][alt]",
    styleUrls: ["./vacancy-company-logo.component.scss"],
    template: `<img *ngIf="src" src="{{src}}" alt="{{alt}}">`,
})
export class VacancyCompanyLogoComponent {
    @Input()
    src: string | null = null;

    @Input()
    alt!: string;
}
