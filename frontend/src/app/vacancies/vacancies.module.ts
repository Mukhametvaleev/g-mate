import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "@g-mate/shared/shared.module";
import {VacanciesRoutingModule} from "@g-mate/vacancies/vacancies-routing.module";
import * as fromComponents from "./components";

@NgModule({
    declarations: [...fromComponents.components],
    imports: [
        CommonModule,
        SharedModule,
        VacanciesRoutingModule,
    ]
})
export class VacanciesModule {
}
