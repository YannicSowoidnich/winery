import { AfterViewInit, Directive, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';

@Directive({
  selector: '[appLayout]',
})
export class LayoutDirective implements AfterViewInit {
  @Input() color: any;
  @Input() appLayout: any;
  @ViewChild('test') canvas;

  constructor(el: ElementRef) {
    console.log(el);
  }

  @HostListener('click') onClick() {
    this.layout(['1', '2', '3']);
  }

  public layout(elements: string[]): void {
    console.log(this.canvas);
  }

  ngAfterViewInit() {
    console.log(this.canvas.nativeElement.children);
  }
}
