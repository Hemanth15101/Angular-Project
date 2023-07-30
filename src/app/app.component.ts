import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { logInComponent  } from './Login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Project';
}
