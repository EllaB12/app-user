import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service'; 

@Component({
  selector: 'add-contact-page',
  templateUrl: './add-contact-page.component.html',
  styleUrls: ['./add-contact-page.component.less']
})
export class AddContactPageComponent implements OnInit {
  contact = new Contact();

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(addContactForm: NgForm) {
    if(addContactForm.form.valid) {
      const newContact = {
        email: this.contact.email,
        first_name: this.contact.first_name,
        last_name: this.contact.last_name,
        avatar: this.contact.avatar
      }

      this.contactService.addContact(newContact).subscribe(result => {
        if(result) {
            this.router.navigate([`/users`]);
        }
      });
    }
  }

}
