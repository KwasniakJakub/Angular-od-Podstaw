import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var Odometer: any;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input()
  value = 0;

  @Input()
  label = ''

  @ViewChild('counterElemRef', {read: ElementRef })
  counterElemRef: ElementRef | undefined

  constructor(){}

  ngAfterViewInit(){
    if(this.counterElemRef){
      const odometer = new Odometer({
      el:this.counterElemRef.nativeElement
      })
    }
    Odometer.update(this.value)
  }

  ngOnInit(): void{
   
  }
}
