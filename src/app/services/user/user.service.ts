import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: any;
  password: any;
  showLogin = true;

  constructor(
    private router: Router,
  ) { }

  sendLogin(username: any, password: any) {
    this.username = username;
    this.password = password;
    this.showLogin = false;
    this.router.navigateByUrl('home-page');
  }
}
