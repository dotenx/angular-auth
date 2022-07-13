// Create the signup component
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})
export class SigninComponent {

  constructor(private authService: AuthService) { }

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  async signin() {
    this.authService.login({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    })?.subscribe(
      (data) => {
        console.log(data); // You can see the JWT token in the console
        alert('Login successful');
      }
    );
  }
}
