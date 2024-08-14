import { Component, } from '@angular/core';
import { Form, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {



  constructor(private _fb: FormBuilder) {

  }

  signUpForm!: FormGroup;

  signupUsers: any[] = [];

  // signupObj: any = {
  //   uname: '',
  //   email: '',
  //   password: '',
  // };

  // loginObj: any = {
  //   uname: '',
  //   password: '',
  // };


  ngOnInit(): void {

    // const localData = localStorage.getItem('signUpUsers');
    // if (localData != null) {
    //   this.signupUsers = JSON.parse(localData);
    // }

    // this.signUpForm=new FormGroup({
    //   uname: new FormControl('',[]),
    //   email: new FormControl(),
    //   password: new FormControl(),
    // });

    //removing new keyword dependency (best practice)
    this.signUpForm = this._fb.group({
      uname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15),])], //when we are applying multiple validators
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    });

    //Value Changes and Status Changes in Form

    // this.signUpForm.get('uname')?.valueChanges.subscribe(username => {
    //   console.log("Form Value : " + username);
    // })

    // this.signUpForm.get('email')?.valueChanges.subscribe(useremail => {
    //   console.log('UserEmal: ' + useremail);
    // })

    //Applying on hole form
    // this.signUpForm.valueChanges.subscribe(formdata => {
    // console.log("UserName : "+formdata.uname);
    // console.log("UserEmail : "+formdata.email);
    // console.log("userPassword: "+formdata.password);
    // })


    //Status Changes
    this.signUpForm.get('uname')?.statusChanges.subscribe(unameStatus=>{
      console.log("UnameStatus:"+unameStatus);
    })
  }

  //Storing data in local storage
  onSignUp(formdata: FormGroup) {
    // this.signupUsers.push(this.signupObj);
    // localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers))
    // alert("User Registered Successfully");


    // console.log(this.signUpForm.controls);
    // console.log(this.signUpForm.valid);

    //get Form data and reset form
    // console.log(this.signUpForm.get('password')?.value);

  };

  onLogin() {
    // const isUserExist = this.signupUsers.find(m => m.uname == this.loginObj.uname && m.password == this.loginObj.password);
    // if (isUserExist != undefined) {
    //   alert('User Login Successfully');

    // } else {
    //   alert('wrong credientials');
    // }

  };

  resetData() {
    // this.signUpForm.get('uname')?.value,
    // this.signUpForm.reset();  //reset 2

    //Partially reset 
    this.signUpForm.reset({
      // uname:"Dummy",
      // uname:this.signUpForm.get('uname')?.value

    });
  };

  fillData() {
    // this.signUpForm.setValue({
    //   uname:'Shiv',
    //   email:'shiv@gmzil.com',
    //   password:'12345',
    // });

    //Partially fill data
    this.signUpForm.patchValue({
      // uname:'Shiva',
      // email:'shiv@gmzil.com',
      // password:'12345',
    });
  }
}
