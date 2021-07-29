import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

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
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactService.getContacts();
    this.sub = this.contactService.contacts$.subscribe(contacts => {
        this.contacts = contacts;
        this.selectedContact = this.contacts[0]
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

}
