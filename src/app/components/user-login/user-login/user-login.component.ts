import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public username: any = '';
  public password: any = '';
  errorMessage = '';
  isLogin = true;
  isRegister = false;
  showLogin = true;

  constructor(
    private router: Router,
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form?: NgForm) {
    this.userService.sendLogin(this.username, this.password);
  }

  reloadPage(): void {
    window.location.reload();
  }

}

