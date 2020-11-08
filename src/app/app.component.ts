import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  user = {
    firstName: '',
    lastName: '',
    patronymicName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.firstName = this.signupForm.value.firstName;
    this.user.lastName = this.signupForm.value.lastName;
    this.user.patronymicName = this.signupForm.value.patronymicName
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.passwordData.password;
    this.user.passwordConfirmation = this.signupForm.value.passwordData.passwordConfirmation;

    this.signupForm.reset();
  }
}
