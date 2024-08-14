import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, Validator, NgModel,FormGroup } from '@angular/forms';
import { FormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FormsModule , ReactiveFormsModule ,
    CommonModule,TemplateFormComponent, ReactiveFormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular_login_and_signup';


ngOnInit(): void {
  
}
  



};
