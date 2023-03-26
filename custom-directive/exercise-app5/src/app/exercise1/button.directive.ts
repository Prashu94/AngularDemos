import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  @Input()
  buttonColor:string;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = "white"
  }

  @HostListener("mouseenter")
  onMouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor = this.buttonColor;
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor = "white";
  }

}
