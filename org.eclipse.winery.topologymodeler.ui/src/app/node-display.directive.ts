import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appNodeDisplay]'
})

export class NodeDisplayDirective implements AfterViewInit {

  @Input() accordionContents: any = {
  };
  @Input() appNodeDisplay: any;

  accordionGroups: any[] = [this.el.nativeElement.children];

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    console.log(this.accordionGroups[0][0]);
    this.accordionGroups[0][0].classList.remove('hidden');
  }

  private toggleAccordion() {
  }

}
