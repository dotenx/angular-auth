// Create the signup component
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) { }

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    fullname: new FormControl(''),
    password: new FormControl('', Validators.required)
  });


  async signup() {
    this.authService.signup({
      email: this.signupForm.value.email,
      fullname: this.signupForm.value.fullname,
      password: this.signupForm.value.password
    })?.subscribe(
      () => {
        alert('Signup successful');
        this.router.navigate(['/login'])
      }
    );
  }
}
