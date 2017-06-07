import {
  AfterViewInit, ContentChild, ContentChildren, Directive, ElementRef, Input,
  ViewChild
} from '@angular/core';

@Directive({
  selector: '[appNodeDisplay]'
})

export class NodeDisplayDirective implements AfterViewInit {

  @Input() accordionContents: any = {};
  @Input() appNodeDisplay: any;
  @ContentChildren('accordion') el: ElementRef;

  accordionGroups: any[];

  constructor() {
  }


  ngAfterViewInit() {
    // this.accordionGroups = [this.el.nativeElement.children];
    // this.accordionGroups[0][0].classList.remove('hidden');
  }

  private toggleAccordion() {
  }

}
