import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class logInComponent {
    title = 'Login Component';
  

  public loginForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    console.log(this.loginForm);

  }
}