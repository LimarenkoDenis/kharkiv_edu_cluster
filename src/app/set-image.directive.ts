import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[SetImage]'
})
export class SetImageDirective implements OnInit{
  @Input('SetImage')
  public Image: string
  
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    this.elementRef.nativeElement.style.background = `url(${this.Image})`
    this.elementRef.nativeElement.style.backgroundPositionX = '-32px'
    this.elementRef.nativeElement.style.backgroundPositionY = '-22px'
    this.elementRef.nativeElement.style.backgroundSize = '144%'
  }
}
