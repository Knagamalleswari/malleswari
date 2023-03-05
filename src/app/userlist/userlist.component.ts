import { Component } from '@angular/core';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  // listOfusers: any = [];
  // newuser :any ="";
  newuser :any ="";
  password : any="";
  // userpwd: any ="";
listOfusers: any[] = [
  "malli",
  "jyothi",
  "brahma reddy",
  "pavani"
];
 adduser(){
  this.listOfusers.push(this.newuser)
  this.listOfusers.push(this.password)
  // console.log(this.newuser,this.userpwd);
 }

}

