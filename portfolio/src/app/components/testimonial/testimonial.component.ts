import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  @Input()
  rating = 0

  constructor(){}

  ngOnInit(): void{

  }
}
