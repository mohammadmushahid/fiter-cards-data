import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 headerData = [
  {
    title: 'Home',
    path: 'home'
  },
  {
    title: 'About Us',
    path: 'about'
  },
  {
    title: 'Services',
    path: 'service'
  },
  {
    title: 'Sign Up',
    path: 'signup'
  }
 ]
  ngOnInit(): void {
    console.log("menu-list===>", this.headerData)
  }

}
