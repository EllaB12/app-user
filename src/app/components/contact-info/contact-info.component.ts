import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { EventBusService} from '../../services/event-bus.service'

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.less']
})
export class ContactInfoComponent implements OnInit {
  // contact!: Contact;
  @Input() contact!: Contact;

  constructor(
    private eventBusService: EventBusService
  ) { }

  ngOnInit(): void {
    // this.eventBusService.on('selectContact', (contact: Contact) => {
    //   console.log(contact)
    //   this.contact = contact;
    // });
    // if(!this.contact) {
    //   this.contact = this.firstContact;
    // }
  }

  get fullName() {
    return `${this.contact.first_name} ${this.contact.last_name}`
  }

  getBackgroundUrl() {
    if (this.contact.avatar) {
      return `url(${this.contact.avatar})`
    } else return null;
  }
}
