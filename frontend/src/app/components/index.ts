import {AmazingComponent} from "@g-mate/components/amazing/amazing.component";
import {NavbarComponent} from "@g-mate/components/navbar/navbar.component";
import {NavbarDesktopComponent, NavbarMobileComponent} from "@g-mate/components/navbar/components";

export const components: any[] = [
    AmazingComponent,
    NavbarComponent,
    NavbarDesktopComponent,
    NavbarMobileComponent,
];

export * from "./amazing/amazing.component";
export * from "./navbar/navbar.component";
export * from "./navbar/components/navbar-desktop/navbar-desktop.component";
export * from "./navbar/components/navbar-mobile/navbar-mobile.component";
