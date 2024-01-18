import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  position='Senior Developer';
  work_experience=2;
  email='joserquiambao@gmail.com';
  website='jrq.com';
  phone='131-121-3123';

  imageUrl:string="assets/logo.jpg";
  imageW: number = 1110;
  imageH: number = 100;

}
