import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
  ];

  readmore = false;

  value = '';

  currentTab = '';

  constructor() {}

  ngOnInit(): void {}
}
