import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  user = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(loginForm: NgForm) {
    if(loginForm.form.valid) {
      this.userService.login(this.user.email, this.user.password).subscribe(result => {
        if(result) {
            this.router.navigate([`/users`]);
        }
      });
    }
  }

}
