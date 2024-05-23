import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { LoginFormComponent } from '../../features/auths/components/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [HomeLayoutComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
