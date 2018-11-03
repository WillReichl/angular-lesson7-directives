import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    console.log(eventData);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;  // simpler way to achieve result in line above
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    console.log(eventData);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
