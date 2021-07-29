import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.less']
})
export class ContactInfoComponent implements OnInit {
  @Input() contact!: Contact;

  constructor() { }

  ngOnInit(): void {
  }

  get fullName() {
    return `${this.contact.first_name} ${this.contact.last_name}`
  }

  getBackgroundUrl() {
    if (this.contact.avatar) {
      return `url(${this.contact.avatar})`
    } else {
      return `url('assets/blank-avatar-image.jpg')`
    };
  }
}
