import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth.service';
import { Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'mg-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,],
  templateUrl: './login.component.html'

})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private snackBar: MatSnackBar) {}

  login() {
    if (!this.email || !this.password) {
      this.snackBar.open('Please enter both email and password.', 'Close', { duration: 3000 });
      return;
    }

    this.authService.login(this.email, this.password)
      .then((userCredential) => {
        // Login successful, you can navigate to another page or perform other actions here
        console.log('User logged in:', userCredential.user);
      })
      .catch((error) => {
        // Handle login errors
        console.error('Login error:', error);
        this.snackBar.open('Login failed. Please check your email and password.', 'Close', { duration: 3000 });
      });
  }

}

