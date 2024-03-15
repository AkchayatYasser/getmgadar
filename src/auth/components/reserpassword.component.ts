import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
    selector: 'app-reset-password',
    //templateUrl: './resetpassword.component.html',
    template: `<h1>Reset Khdama</h1>`,
    //styleUrls: ['./resetpassword.component.css'],
    //imports: [CardModule, ButtonModule, FormsModule, ReactiveFormsModule],
})
export class ResetPasswordComponent implements OnInit {
      resetForm!: FormGroup;
      constructor(private authService: AuthService) {}
      ngOnInit(): void {
        this.resetForm = new FormGroup({
          email: new FormControl('', Validators.required),
        });
      }
      sendResetLink() {
        if (this.resetForm.valid) {
          this.authService.ForgotPassword(this.resetForm.value.email);
        }
      }
    }