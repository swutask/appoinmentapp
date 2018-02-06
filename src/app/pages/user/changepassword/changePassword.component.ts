import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

import { CalendarService, Calendar } from '../../../services/calendars.service';
import { ServicesService, Service } from '../../../services/services.service';
import { OpeningHoursService, OpeningHours } from '../../../services/openinghours.service';

import { LocalDataSource } from 'ng2-smart-table';
import { NotificationsService } from 'angular2-notifications';
import { LanguageService } from '../../../services/language.service';

import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../../theme/validators';
import {UsersService} from '../../../services/users.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'change-password',
  templateUrl: './changePassword.html',
  styleUrls: ['./changePassword.scss']
})

export class ChangePassword implements OnInit {

    data = [];
    public loading: boolean; 

    options = {
      position:["top", "right"],
      timeOut:3000,
      lastOnBottom: true,
      clickToClose: true,
      animation: 'scale',
      showProgressBar: false,
      maxLength: 100
    }

    public form: FormGroup;
    public currentpassword: AbstractControl;
    public password: AbstractControl;
    public repeatPassword: AbstractControl;
    public passwords: FormGroup;

    language;

    public submitted: boolean = false;
    public sendStatus: boolean = false;


    constructor(fb: FormBuilder, _langService: LanguageService, private userService: UsersService, private modalService: NgbModal, private calendarService: CalendarService, private _service: NotificationsService,)
    {
      this.form = fb.group({
        'currentpassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'passwords': fb.group({
          'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)]) ]
        }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') })
      });

      this.currentpassword = this.form.controls['currentpassword'];
      this.passwords = <FormGroup> this.form.controls['passwords'];
      this.password = this.passwords.controls['password'];
      this.repeatPassword = this.passwords.controls['repeatPassword'];

      if(localStorage.getItem('lang')=='de'){
        _langService.getDEJSON().then(data => {
          console.log("12345678", data);  
          this.language=data;
        })
      } else {
        _langService.getENJSON().then(data => {
          console.log("12345678", data);  
          this.language=data;
        })
      }
    }

    ngOnInit() {

    }

    saveOpeiningHours() {
       // console.log(this.openingHours);
      // this.openinghourService.update(this.openingHours, this.currentUser.user.companyID).then((data) => {
      //     this.openingHours = data;
      //   this.showSuccessToast(this.language.message.success, this.language.message.openinghoursupdated);
      // });
    }

    public onSubmit(values:Object):void {
      this.submitted = true;
      if (this.form.valid) {

        this.userService.changepassword(this.currentpassword.value, this.password.value).then((data) => {
          if(data['status']) {
            this.showSuccessToast(this.language.message.success, this.language.message.changepasswordsuccess);
          } else {
            this.showErrorToast(this.language.message.info, this.language.message.changepassworderror);
          }
        });

      }
    }

    showSuccessToast(title, content){
      this._service.success(
        title,
        content,
        this.options
      )
    }

    showErrorToast(title, content){
      this._service.info(
        title,
        content,
        this.options
      )
    }
}
