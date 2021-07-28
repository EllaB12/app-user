import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Contact } from '../../models/contact.model';
 
@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.less']
})
export class ContactPreviewComponent implements OnInit {
  @Output() onSelectContact: EventEmitter<Contact> = new EventEmitter();
  @Input() contact!: Contact;
  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectContact() {
   this.onSelectContact.emit(this.contact);
  }

  get fullName() {
    return `${this.contact.first_name} ${this.contact.last_name}`
  }

}
