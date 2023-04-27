import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSlideIn]',
  host: {
    '[class.animate]': 'animate',
  },
})
export class SlideInDirective {
  // @HostBinding('hidden')
  // @HostBinding('id')
  // @HostBinding('style.color')

  //handler: number
  handler: any;

  @Input('appSlideIn')
  @HostBinding('class')
  direction = 'left';

  @HostBinding('class.slideIn')
  slideIn = true;

  @HostBinding('class.animate')
  animate = false;

  @Input()
  delay = 1000;

  constructor(private elem: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.handler = setTimeout(() => {
      // this.elem.nativeElement.classList.add('animate');
      this.animate = true;
    }, this.delay);
  }

  ngOnDestroy(): void {
    clearTimeout(this.handler);
  }
}
