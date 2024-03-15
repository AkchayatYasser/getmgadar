import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth.service';
import { Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';





@Component({
  selector: 'mg-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CardModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  /* template: `
  <form [formGroup]="loginForm">
    <div class="grid">
      <div class="col-12">
        <div class="card flex justify-content-center">
          <p-card header="Login" [style]="{ width: '360px' }">
            <!-- <ng-template pTemplate="header">
                       </ng-template> -->
            <ng-template pTemplate="content">
              <div>
                <label for="username">Email</label>
                <div>
                  <input
                    class="w-100"
                    pInputText
                    formControlName="email"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="mt-3">
                <label for="password">Password</label>
                <div>
                  <input
                    class="w-100"
                    pInputText
                    type="password"
                    formControlName="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </ng-template>
            <ng-template pTemplate="footer">
              <div class="flex justify-content-center align-items-center">
                <button pButton pRipple label="Log In" (click)="login()"></button>
                <p-button
                  label="Forgot Password?"
                  styleClass="p-button-link"
                  routerLink="/reset-password"
                ></p-button>
              </div>
              <div class="mt-2 flex justify-content-center align-items-center">
                <p-button
                  label="Don't have an account?"
                  styleClass="p-button-link"
                  routerLink="/sign-up"
                ></p-button>
              </div>
            </ng-template>
          </p-card>
        </div>
      </div>
    </div>
  </form>

  
  ` */

})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router: Router, private authService: AuthService){
  }
  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  login(){
    if(this.loginForm.valid){
      this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password)
    }
  }

}

