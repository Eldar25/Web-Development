import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import {LoginService} from '../login.service'
import { User} from '../user'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: User
  username:string ="";
  password:string="";
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
      status: ['',Validators.email]
    });
  }
  hide = true;

  

  onSubmit():void{
    //console.log('sadad')
    //console.log('sadad')
    status = this.form.get('status').value;
   //const status = this.form.get('status').value;
   // this.user.name =this.form.get('username').value;
   // console.log('sadad')
    //this.user.password = this.form.get('password').value;
    //this.user.privilege = this.form.get('status').value;
    
    if(status == "user"){
      this.loginService.loggedStatus = 'user';
      console.log('user');
      this.loginService.logged = true;
      console.log(this.loginService.logged);
    }
    else if(status == "admin"){
      this.loginService.loggedStatus = 'admin';
      console.log('admin');
      this.loginService.logged = true;
      console.log(this.loginService.logged);
    }else{
      this.loginService.loggedStatus = 'unknown';
      console.log('unknown');
      this.loginService.logged = true;
    }
    console.log('sadad')
    
    //localStorage.setItem('currentUser',JSON.stringify(username,password));
  }

}
