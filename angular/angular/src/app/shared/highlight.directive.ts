import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');*/
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'transparent');*/
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColor: string = 'transparent';
  @Input('highlight') highlightColor: string = 'yellow';
  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}