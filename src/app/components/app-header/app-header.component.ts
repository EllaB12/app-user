import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {
  @Input() user!: Contact;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  isUserEmpty() {
    return Object.keys(this.user).length === 0;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
