import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.less']
})
export class MainNavbarComponent implements OnInit {
  @Input() user!: Contact;
  toggle: boolean = false;
  offsetFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if(window.pageYOffset> 0 ) {
      this.offsetFlag = false;
    } else {
      this.offsetFlag = true;
    }
  
 }

  isUserEmpty() {
    return Object.keys(this.user).length === 0;
  }

  get fullName() {
    return `${this.user.first_name} ${this.user.last_name}`
  }

  mobileMenu() {
    this.toggle = !this.toggle;    
}

}
