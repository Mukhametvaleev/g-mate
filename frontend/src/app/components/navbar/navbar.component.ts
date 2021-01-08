import {Component} from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: `./navbar.component.html`,
})
export class NavbarComponent {
    logoSrc = "https://gms.tech/wp-content/themes/gmstech/images/g-mate_comp-NY_120x56.svg";
    logoHref = "https://gms.tech";
    telegramHref = "tg://resolve?domain=g_jobbot";
}
