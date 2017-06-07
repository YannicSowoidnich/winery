import {
  AfterViewInit, ContentChild, ContentChildren, Directive, ElementRef, HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appLayout]',
})
export class LayoutDirective implements AfterViewInit {
  @Input() color: any;
  @Input() appLayout: any;
  @ContentChildren('nodes') nodes;

  constructor(el: ElementRef) {
    console.log(el);
  }

  @HostListener('click') onClick() {
    this.layout();
  }

  public layout(): void {
    console.log(this.nodes);
  }

  ngAfterViewInit() {

  }
}
