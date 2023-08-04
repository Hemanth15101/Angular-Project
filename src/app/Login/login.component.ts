import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class logInComponent {
  title = 'Login Component';
  register: boolean = true;
  value: any = [];
  loginMsg = '';
  Registr !: FormGroup
  public loginForm!: FormGroup;

  constructor() { }


  ngOnInit() {
    this.Registr = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  formSubmit() {
    console.log(this.Registr)
    localStorage.setItem("userData", JSON.stringify(this.Registr.value));
    readfile("../assets/userdata.json")
    this.register = true;
  }

  public onSubmit() {
    fetch("../assets/userdata.json").then((res) => {
      return res.json();
    }).then((data) => {
        this.value = data.users;
      });
    const data = this.value.filter((el: any) => {
      return el.email == this.loginForm.value.username && el.password === this.loginForm.value.password;
    })
    this.loginMsg = data.length > 0 ? "login successful" : 'Login Fail';
  }
}

function readfile(arg0: string) {
  throw new Error("Function not implemented.");
}
