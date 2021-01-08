import {Component, Input} from "@angular/core";

@Component({
    selector: "app-vacancy-telegram-message[telegramMessage]",
    styleUrls: ["./vacancy-telegram-message-component.scss"],
    template: `<div [innerHTML]="telegramMessage"></div>`,
})
export class VacancyTelegramMessageComponent {
    @Input()
    telegramMessage!: string;
}
