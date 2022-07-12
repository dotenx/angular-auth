// Create a new service called AuthService. AuthService will be responsible for handling the authentication logic. It's injected into the signup component.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUrl = "<your-url-here>";
  loginUrl = "<your-url-here>";

  isLoggedIn = false;

  signup(user: UserForSignUp): Observable<any> | undefined {
    try {
      return this.http.post(this.registerUrl, user);
    } catch (error) {
      console.log(error); 
    }
    return;
  }

  login(user: UserForSignIn): Observable<any> | undefined {
    try {
      return this.http.post(this.loginUrl, user);
      // store the token in local storage, etc.
    } catch (error) {
      console.log(error); 
    }
    return;
  }

}

interface UserForSignIn {
  email: string | null;
  password: string | null;
}

interface UserForSignUp {
  email: string | null;
  fullname: string | null;
  password: string | null;
}