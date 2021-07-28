import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { EventBusService } from '../../services/event-bus.service';
import { EventData } from '../../models/event-data.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent implements OnInit {
  contacts: Contact[] = [];
  sub!: Subscription;
  selectedContact!: Contact;

  constructor(
    private contactService: ContactService,
    private eventBusService: EventBusService
  ) { }

  ngOnInit(): void {
    this.contactService.getContacts();
    this.sub = this.contactService.contacts$.subscribe(contacts => {
        this.contacts = contacts;
        // this.eventBusService.emit(new EventData('selectContact', this.contacts[0]));
        this.selectedContact = this.contacts[0]
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  displayContact(contact: Contact) {
    this.selectedContact = contact;
  }

}
