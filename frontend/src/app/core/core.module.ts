import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
    ]
})
export class CoreModule {
}