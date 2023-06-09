import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{
  recentProjects = [
    {
      id: 123,
      name: 'Project ABC',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      id: 234,
      name: 'Project XYZ',
      image: 'https://picsum.photos/id/2/200/300',
    },
    {
      id: 345,
      name: 'Project QWE',
      image: 'https://picsum.photos/id/3/200/300',
    },
  ]

  testimonials = [
    {
      author:'Johanna Arc',
      title:'Awesome Work',
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ipsum delectus laudantium et quidem esse quas fuga',
      image:'https://i.imgur.com/h2E4WGw.jpg',
      rating:3.5
    },
    {
      author:'John Doe',
      title:'Awesome Work',
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ipsum delectus laudantium et quidem esse quas fuga',
      image:'https://randomuser.me/api/portraits/men/32.jpg',
      rating:4.5
    }
  ]

  readmore = false;

  value = '';

  currentTab = ''; 

  contactForm = {
    name: 'Anonym',
    email: '',
    agreement: true,
    contents:{
      topic: '',
      message: ''
    }
  }
  originalForm = {
    name: 'Anonym',
    email: '',
    agreement: false,
    topic: '',
    message: ''
  }
  
  @ViewChild('contactFormRef',{
    read:NgForm, static:true
  })

  contactFormRef: NgForm = {} as NgForm;

  sendMessage(contactForm: NgForm){
    console.log(contactForm.value)  
  }
  resetForm(){
    this.contactFormRef.resetForm(
    this.originalForm)
  }

  constructor() {
  } 

  ngAfterViewInit(): void{
    // this.contactFormRef.value
  }

  ngOnInit(): void {
  }
}
