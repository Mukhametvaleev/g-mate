import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MomentModule} from "ngx-moment";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import * as fromComponents from "./components";

@NgModule({
    declarations: [...fromComponents.components],
    exports: [...fromComponents.components, MomentModule, NgbModule],
    imports: [CommonModule, MomentModule, NgbModule]
})
export class SharedModule {
}
