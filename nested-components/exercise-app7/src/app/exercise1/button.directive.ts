import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  @Input()
  color!:string;
  
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color="black";  
  }

  @HostListener("mouseenter")
  onMouseEnter(){
    this.elementRef.nativeElement.style.color=this.color;
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.elementRef.nativeElement.style.color="black";
  }
}
