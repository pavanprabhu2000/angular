import { Directive ,ElementRef ,HostBinding,HostListener,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUserStyle]'
})
export class UserStyleDirective implements OnInit {
  @HostBinding('style.backgroundColor') color:string | undefined
  constructor(private element: ElementRef,private render:Renderer2) {
    element.nativeElement.style.color='red';
   }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.render.setStyle(
    //   this.element.nativeElement,
    //   'background-color','blue'
    // );
  }
  @HostListener('mouseenter') onmouseover(event:Event){
    // this.render.setStyle(
    //   this.element.nativeElement,
    //   'background-color','blue'
    // );
    this.color='blue'
  }
  @HostListener('mouseleave') onmouseleave(event:Event){
    // this.render.setStyle(
    //   this.element.nativeElement,
    //   'background-color','green'
    // );
    this.color='yellow'
  }




}
