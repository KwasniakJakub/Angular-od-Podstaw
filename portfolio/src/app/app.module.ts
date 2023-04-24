import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerobarComponent } from './components/herobar/herobar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { RatingComponent } from './components/rating/rating.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    NavbarComponent,
    HerobarComponent,
    HomeComponent,
    ProgressbarComponent,
    TestimonialComponent,
    AvatarComponent,
    RatingComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
