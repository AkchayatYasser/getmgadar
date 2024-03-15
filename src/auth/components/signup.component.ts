import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'mg-signup',
  templateUrl: './signup.component.html',
  //template: `<h1>hey from signup</h1>`,
  imports: [MatFormFieldModule, MatInputModule,],
})


export class SignupComponent {}
