import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[yellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private _renderer2: Renderer2, private elementRef: ElementRef) {
    //this._renderer.nativeElement.style.backgroundColor = 'yellow';
    this._renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

}