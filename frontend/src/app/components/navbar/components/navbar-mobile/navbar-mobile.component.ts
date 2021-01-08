import {Component, HostBinding, Input} from "@angular/core";

@Component({
    selector: "app-navbar-mobile",
    templateUrl: "./navbar-mobile.component.html",
    styleUrls: ["./navbar-mobile.component.scss"]
})
export class NavbarMobileComponent {
    @HostBinding("class")
    classes = "d-block d-lg-none";

    @Input()
    logoSrc = "";

    @Input()
    logoHref = "";

    @Input()
    telegramHref = "";

    isCollapsed = true;
}
