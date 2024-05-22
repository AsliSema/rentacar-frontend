import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { RegisterFormComponent } from '../../features/auths/register-form/register-form.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent, RegisterFormComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
