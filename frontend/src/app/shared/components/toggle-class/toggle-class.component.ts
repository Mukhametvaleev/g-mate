import {AfterViewChecked, Component, ElementRef, HostBinding, HostListener, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-toggle-class",
    template: `<ng-content></ng-content>`,
})
export class ToggleClassComponent implements OnInit, AfterViewChecked {
    boundingBottom = 0;

    /**
     * Toggle host class when host has scrolled down of sight
     */
    @Input()
    onScrolledDown?: [string, string] = undefined;

    @HostBinding("class") class = "";

    @HostListener("window:scroll")
    setClass(): void {
        if (this.onScrolledDown) {
            const zeroBounding = 0;
            const index = Number(this.boundingBottom < zeroBounding);

            this.class = this.onScrolledDown[index];
        }
    }

    constructor(private host: ElementRef) {
    }

    ngOnInit(): void {
        this.setClass();
    }

    ngAfterViewChecked(): void {
        if (this.onScrolledDown) {
            const {bottom} = this.host.nativeElement.getBoundingClientRect();

            this.boundingBottom = bottom;
        }
    }
}
