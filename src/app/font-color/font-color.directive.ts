import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[fontColor]'
})

export class FontColorDirective  {

  constructor(private renderer: Renderer2, private elementRef: ElementRef ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#EEBA33');
  }

  // ngOnInit() {
  // }
}
