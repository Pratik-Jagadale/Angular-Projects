import { HostListener } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor(private ele: ElementRef) { }

  @HostListener('mouseenter')
  onmouseenter() {
    this.setcolor('yellow');
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.setcolor('red');
  }

  @HostListener('mouseclick')
  onmouseclick() {
    this.setcolor('white');
  }

  setcolor(color: string) {
    this.ele.nativeElement.style.background = color;
  }
}
