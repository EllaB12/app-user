import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Contact } from '../models/contact.model'
import { map, catchError } from 'rxjs/operators';

export interface contactData {
  data: Contact[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacUrl = 'https://reqres.in/api/users';
  private addContactUrl = 'https://reqres.in/api/users';

  private _contacts$ = new BehaviorSubject<Contact[]>([]);
  public contacts$ = this._contacts$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getContacts() {
    let contacts = this.load('contactDB');
    
    if(!contacts || !contacts.length) {
      this.http.get<contactData>(this.contacUrl).subscribe(res => {
          contacts = res.data;
          this.store('contactDB', contacts)
          this._contacts$.next(contacts);
        }
      );
    } else {
      this._contacts$.next(contacts);
    }
  }

  addContact(contact:Contact): Observable<any> {
    return this.http.post<Contact>(this.addContactUrl, contact).pipe(
      map(res => {
        if(res) {
          const contacts =  this._contacts$.getValue();
          contacts.push(res);
          this.store('contactDB', contacts)
          this._contacts$.next(contacts);
          return res;
        } else {
          return catchError(this.handleError)
        }
      })
    )
  }

  getContact(email: string) {
    const contacts: Contact[] = this._contacts$.getValue();
    const contact = contacts.find(contact => contact.email === email);
    return contact ? contact : {}
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err);
  }

  private store(key: string, value: object) {
    sessionStorage[key] = JSON.stringify(value);
  }

  private load(key: string, defaultValue = null) {
    var value = sessionStorage[key] || defaultValue;
    return JSON.parse(value);
  }
}
