import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-content"> 
      <h1>
        Welcome to {{title}}!
      </h1>

      {{user.firstName}}

      <input type="text" [value]="user.firstName" 
                         (keyup)="user.firstName = $any($event.target).value">

      <app-welcome [data]="anonym" (userSubscribed)="user = $event"></app-welcome>

      <app-welcome [data]="user"></app-welcome>
     
    </div>  
  `,
  styles: [`
    .main-content{
      padding: 20px;
      font-family: sans-serif;
    }
  `]
})
export class AppComponent {
  title = 'Portfolio';

  anonym = {
    firstName: '',
    isSubscribed: false,
    email:''
  }

  user = {
    firstName: '',
    isSubscribed: false,
    email:''
  }

  subscribed(user: { firstName: string, isSubscribed: boolean, email: string }){
    console.log(user)
    this.user = user;
  }

}
