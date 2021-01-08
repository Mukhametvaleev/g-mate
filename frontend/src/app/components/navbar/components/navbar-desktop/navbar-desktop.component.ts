import {Component, HostBinding, Input} from "@angular/core";

@Component({
    selector: "app-navbar-desktop",
    templateUrl: "./navbar-desktop.component.html",
    styleUrls: ["./navbar-desktop.component.scss"]
})
export class NavbarDesktopComponent {
    @Input()
    logoSrc = "";

    @Input()
    logoHref = "";

    @HostBinding("class")
    classes = "d-none d-lg-block";
}
