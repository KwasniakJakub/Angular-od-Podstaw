import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  user = {
    firstName : 'Jack Handsome',
    isSubscribed: true
  }

 

  constructor(){ }

  askIfSubscribed(){
     

    return this.user.isSubscribed ? 
    'You are subscribed' : 'Want to get updates' + this.user.firstName + '?'
  }

  ngOnInit(): void{
  }

}
