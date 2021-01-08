import {LOCALE_ID, NgModule} from "@angular/core";
import * as moment from "moment";
import {registerLocaleData} from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppComponent} from "@g-mate/app.component";
import {AppRoutingModule} from "@g-mate/app-routing.module";
import {CoreModule} from "@g-mate/core";
import * as fromComponents from "@g-mate/components";

moment.locale("ru-ru");
registerLocaleData(localeRu);

@NgModule({
    declarations: [
        AppComponent,
        ...fromComponents.components
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        NgbModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: "ru"},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
