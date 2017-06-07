import { Directive, ElementRef, Input, HostListener, ViewChild} from '@angular/core';

@Directive({
  selector: '[appLayout]'
})
export class LayoutDirective {
  @Input() color: any;
  @Input() appLayout: any;
  @ViewChild ('canvas') canvas;

  constructor(el: ElementRef) {
    console.log(el);
  }

  @HostListener('click') onClick() {
    this.layout(['1', '2', '3']);
  }
  public layout(elements: string[]): void {
    console.log(this.canvas.nativeElement.children);
  }
}
