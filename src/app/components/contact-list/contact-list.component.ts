import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: any;
  @Output() onSelectContact = new EventEmitter<Contact>();
  selectedId!: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.selectedId = this.contacts[0].id;
  }

  selectContact(contact: Contact) {
    this.selectedId = contact.id;
    this.onSelectContact.emit(contact);
  }
}
