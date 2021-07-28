import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

export interface userData {
  data: Contact;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'https://reqres.in/api/login'; 

  private _user$ = new BehaviorSubject({});
  public user$ = this._user$.asObservable();
  
  constructor(
    private http: HttpClient,
    private contactService: ContactService
  ) { }

  public getUser() {
    let user = this.load('userDB');
    return this._user$.next(user ? user : {});
  }

  public loggedIn() {
    const userToken = this.load('token');
    return !!userToken;
  }

  login(email: string, password: string): Observable<any> {
    let postData = {email ,password};
    return this.http.post(this.loginUrl, postData).pipe(
      map(res => {
        if (res) {
          this.contactService.getContacts();
          this.contactService.contacts$.subscribe(contacts => {
            if(contacts) {
              const savedUser = this.contactService.getContact(email);
              this.store('userDB', savedUser);
              this.store('token', res)
              this._user$.next(savedUser);
            }
          });
          return res;
        } else {
          return catchError(this.handleError)
        }
      })
    );
  }

  logout(): void {
    this.remove();
    return this._user$.next({});
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

  private remove() {
    sessionStorage.clear();
  }
}
