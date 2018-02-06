import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {UsersService} from '../../services/users.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'forgotreset',
  templateUrl: './forgotreset.html',
  styleUrls: ['./forgotreset.scss']
})
export class ForgotReset {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted: boolean = false;
  public sendStatus: boolean = false;

  public code: string;

  constructor(fb: FormBuilder, private userService: UsersService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)]) ]
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') })
    });

    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.code = params['verificationCode'];
        console.log(this.code);
      });
    
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
        // your code goes here
      this.userService.forgotreset(this.email.value, this.password.value, this.code).then((data) => {
        if(data['status']==true) {

          this.sendStatus = true;

          setTimeout(() => {
            this.router.navigate(['login']);
          }, 3000);
        }
      });

      
    }
  }
}
