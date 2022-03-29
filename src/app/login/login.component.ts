import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from '../shared/auth/auth.service';
import { UserModel } from '../shared/models/user.model';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser: any = {
    email: '',
    password: '',
  };
  router: any;
 
  constructor(private auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
 
  }
  login() {
    let authFlow = this.auth
      .login(this.loginUser)
      .pipe(switchMap(() => this.auth.profile()));
 
    authFlow.subscribe({
      next: (user: UserModel) => {
        this._router.navigate(['/users'])
        this.auth.saveUserToLocalStorage(user);
       
        // console.log(user);
      },
      error: (error) => {
        console.log(error);
      },
    });
}


}