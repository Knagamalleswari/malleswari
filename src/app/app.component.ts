import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'malleswari';
 showUserlist:boolean = false;
 displayuserslist(){
  this.showUserlist = true;
 }
 }

// hello() {
//   this.title = this.title.concat("shopping website");
// }
// displayName() {
//   return "malli"
// }git