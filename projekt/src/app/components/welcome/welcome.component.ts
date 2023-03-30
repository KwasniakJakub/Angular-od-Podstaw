import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
tempName = ''

  user = {
    firstName : 'Jack Handsome', 
    isSubscribed: false,
    birthDay: new Date(1970,0,0)
  }

  dateFormat = 'shortDate'
  askAboutName = true 

  changeFirstName(firstNameRef:HTMLInputElement){
    console.log(firstNameRef)
    
    this.user.firstName = firstNameRef.value
  }

  constructor(){ }

  askIfSubscribed(){
    return this.user.isSubscribed ? 
    'You are subscribed' : 'Want to get updates ' + this.user.firstName + ' ?'
  }

  ngOnInit(): void{
  }

}
