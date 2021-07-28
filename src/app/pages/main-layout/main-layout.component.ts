import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Contact } from '../../models/contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.less']
})
export class MainLayoutComponent implements OnInit {
  user!: Contact | {};
  userSubscription!: Subscription;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUser();
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

}
