// Create the signup component
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent {

  constructor(private authService: AuthService) { }

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    fullname: new FormControl(''),
    password: new FormControl('', Validators.required)
  });

  
  async signup() {
    console.log(this.signupForm.value);
    this.authService.signup({
      email: this.signupForm.value.email,
      fullname: this.signupForm.value.fullname,
      password: this.signupForm.value.password
    })?.subscribe(
      (data) => {
        console.log(data);
        alert('Signup successful');
      }
    );
  }
}
