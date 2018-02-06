import { GlobalState } from '../../global.state';
import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Config} from '../../services/config';
import {UsersService} from '../../services/users.service';
import {AppTranslationModule} from '../../app.translation.module';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public invalid = false;
  public selectedValue;


  constructor(fb:FormBuilder, private router:Router, private userService:UsersService, private translate: AppTranslationModule) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.selectedValue = "en";
    this.translate.setDefaultLang('en');
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      
      this.userService.login(this.email.value, this.password.value).then((data) => {
        console.log(data['jwt_Token']);

        localStorage.setItem('currentUser', JSON.stringify({ user: data['user'], token: data['jwt_Token'] }));

        localStorage.setItem('lang', this.translate.getCurrentLang());

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        console.log("currentUser=====>", currentUser.token);

        if(data.role == 'company'){
          Config.companyID = data.companyID;
          Config.approle = data.role;
        } 
        // console.log(Config.apptoken);
        data?this.router.navigateByUrl('/clients'):this.invalid = true;
        data.role == 'user'? GlobalState.curUser = 0: 1;
      //  console.log(data);
      }).catch((error)=>{
        this.invalid = true;
      })
      
      //  console.log(GlobalState.curPage);
    }
  }

  translate_ch(){
    //this.translate.addLangs(["en"]);
    if(this.translate.getCurrentLang()==="de")
      this.translate.setDefaultLang('en');
    else if(this.translate.getCurrentLang()==="en")
      this.translate.setDefaultLang('de');
    //this.translate.use('en');
  }
  onChangeLang(e){
    this.selectedValue = e;
    console.log(this.selectedValue);
    if(this.selectedValue==="de"){
      this.translate.setDefaultLang('de');
    } else if(this.selectedValue==="en"){
      this.translate.setDefaultLang('en');
    }

  }
}
