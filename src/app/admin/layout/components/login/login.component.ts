import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/core/types/types';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class AdminLoginComponent {
  @Output() onLogin: EventEmitter<string> = new EventEmitter<string>();

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email,
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
    ])),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmitForm(values: Login): void {
    this.authService.login(values).subscribe((token) => {
      this.onLogin.emit(token);
      this.router.navigate(['/', 'admin', 'home']);
    });
  }
}
