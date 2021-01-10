import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { LogInData } from '../log-in-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  FormData = new LogInData('', '');

  constructor() { }

  ngOnInit(): void {

  }

  logData(){
    console.log(this.FormData);
  }

}
