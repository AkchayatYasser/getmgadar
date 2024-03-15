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
  standalone: true,
  selector: 'mg-signup',
  templateUrl: './signup.component.html',
  //template: `<h1>hey from signup</h1>`,
  imports: [MatFormFieldModule, MatInputModule, CardModule, ButtonModule, FormsModule, ReactiveFormsModule],
})


export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      displayName: new FormControl('', Validators.required),
    });
  }
  signup() {
    if (this.signupForm.valid) {
      this.authService.SignUp(
        this.signupForm.value.email,
        this.signupForm.value.password
      );
    }
  }
}
