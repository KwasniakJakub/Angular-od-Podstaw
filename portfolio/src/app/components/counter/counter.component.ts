import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  DoCheck,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
declare var Odometer: any;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit, DoCheck {
  @Input()
  value = 0;

  currentValue = 0;

  @Input()
  label = '';

  @ViewChild('counterElemRef', { read: ElementRef })
  counterElemRef!: ElementRef; //| undefined

  @Input()
  grow = 0;
  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit(): void {
    this.currentValue = this.value;
  }

  updateAnimation = false;

  ngAfterViewInit() {
    let odometer: any;
    this.zone.runOutsideAngular(() => {
      odometer = new Odometer({
        el: this.counterElemRef.nativeElement,
      });
      odometer.update(this.currentValue);
    });

    //   setInterval(()=>{
    //     this.value += this.grow
    //     //this.cdr.detectChanges()
    //     this.cdr.markForCheck()

    //     //this.counterElemRef.nativeElement.innerText = this.value
    // }, 1000)

    if (this.grow) {
      this.zone.runOutsideAngular(() => {
        setInterval(
          () => {
            //Grow counter
            this.currentValue += this.grow;
            odometer.update(this.currentValue);

            this.zone.runOutsideAngular(() => {
              //Add pulse animation and remove after 1s
              this.updateAnimation = true;
              setTimeout(() => {
                this.updateAnimation = false;
              }, 1000);
            });
          },
          //Update at random between 3s and 8s
          3000 + Math.random() * 5000
        );
      });
    }
  }
  chackIfUpdating() {
    console.log('Detecing child changes ');
    this.label = 'ups';
  }
  ngDoCheck() {
    console.log('Detecting  parent changes');
  }
}
