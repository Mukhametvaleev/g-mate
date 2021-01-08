import {Component, HostListener, Inject} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: "app-scroll-to-top-button",
    templateUrl: "./scroll-to-top-button.component.html",
    styleUrls: ["./scroll-to-top-button.component.scss"]
})
export class ScrollToTopButtonComponent {
    windowScrolled = false;
    pageYOffset = 200;

    constructor(@Inject(DOCUMENT) private document: Document) {
    }

    @HostListener("window:scroll", [])
    onWindowScroll(): void {
        this.windowScrolled = window.pageYOffset > this.pageYOffset;
    }

    scrollToTop(event: MouseEvent): void {
        event.preventDefault();

        (function smoothScroll(): void {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothScroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
}
