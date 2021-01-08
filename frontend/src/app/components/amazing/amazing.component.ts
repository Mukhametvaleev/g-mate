import {Component, HostBinding, HostListener} from "@angular/core";

@Component({
    selector: "app-amazing",
    styleUrls: ["./amazing.component.scss"],
    template: `Возьмите, пожалуйста, на работу :(`,
})
export class AmazingComponent {
    windowScrolled = false;
    pageYOffset = 200;

    @HostBinding("class")
    classes = "d-none d-lg-inline-block fixed-top p-2 fade bg-white";

    @HostBinding("class.show")
    get show(): boolean {
        return this.windowScrolled;
    }

    @HostListener("window:scroll", [])
    onWindowScroll(): void {
        this.windowScrolled = window.pageYOffset > this.pageYOffset;
    }
}
