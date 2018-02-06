import { GlobalState } from '../../global.state';
import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Config} from '../../services/config';
import {UsersService} from '../../services/users.service';
import {AppTranslationModule} from '../../app.translation.module';
@Component({
  selector: 'forgot',
  templateUrl: './forgot.html',
  styleUrls: ['./forgot.scss']
})
export class Forgot {

  public form:FormGroup;
  public email:AbstractControl;
  public submitted:boolean = false;
  public invalid = false;

  public sendStatus:boolean = false;
  public sendDone:boolean = false;
  
  constructor(fb:FormBuilder, private router:Router, private userService:UsersService, private translate: AppTranslationModule) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
    this.email = this.form.controls['email'];
    if(localStorage.getItem('lang')==="en"){
      this.translate.setDefaultLang('en');
    } else if(localStorage.getItem('lang')==="de"){
      this.translate.setDefaultLang('de');
    }
    

  }

  onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      
      
      this.userService.forgot(this.form.value).then((data) => {
        console.log("data===>", data);
        this.sendDone = true;

        if(data['status']==false) {
          this.invalid = true;
        } else {
          this.sendStatus = true;
        }


      }, (error) =>{
        this.invalid = true;
      });
      
      
    }
  }
}
