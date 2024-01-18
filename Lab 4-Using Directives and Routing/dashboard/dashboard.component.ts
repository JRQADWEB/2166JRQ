import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
}
staff = [ 
  { firstName: 'Allen', lastName: 'Serrano', email: 'ac2003@gmail.com', role: 'Admin' },   
  { firstName: 'John', lastName: 'Cena', email: 'johncena@yahoo.com', role: 'User' }, 
  { firstName: 'Dwayne', lastName: 'Johnson', email: 'therock@gmail.com', role: 'User' }, 
  { firstName: 'Elon', lastName: 'Musk', email: 'iregrettwitter@gmail.com', role: 'User' }, 
  { firstName: 'Bill', lastName: 'Gates', email: 'applelord@yahoo.com', role: 'User' } 
  ];
}
