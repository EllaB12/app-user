import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { EventData } from '../../models/event-data.model';
import { Contact } from '../../models/contact.model';
import { EventBusService } from '../../services/event-bus.service';
 
@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.less']
})
export class ContactPreviewComponent implements OnInit {
  @Output() onSelectContact: EventEmitter<Contact> = new EventEmitter();
  @Input() contact!: Contact;
  @Input() active: boolean = false;
  // selectedId!: number | undefined; 

  constructor(
    private eventBusService: EventBusService
  ) { }

  ngOnInit(): void {
    // this.eventBusService.on('selectContact', (contact: Contact) => {
      // this.selectedId = 0;
    // });
  }

  selectContact() {
  //  this.eventBusService.emit(new EventData('selectContact', this.contact));
   this.onSelectContact.emit(this.contact);
  }

  get fullName() {
    return `${this.contact.first_name} ${this.contact.last_name}`
  }

}
