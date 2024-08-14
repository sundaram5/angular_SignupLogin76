import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  signupUsers: any[] = [];

  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  };

  loginObj: any = {
    userName: '',
    password: '',
  };

  constructor() {

  };

  //geting data from local storage
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  };

  //Storing data in local storage
  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers))
    alert("User Registered Successfully");
  };

  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (isUserExist != undefined) {
      alert('User Login Successfully');

    } else {
      alert('wrong credientials');
    }
  };
}
