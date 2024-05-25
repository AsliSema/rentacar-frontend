import { ChangeDetectorRef, Component } from '@angular/core';
import { CreateLicenseFormComponent } from '../../../../features/licences/components/create-license-form/create-license-form/create-license-form.component';
import { HomeLayoutComponent } from '../../../../shared/layouts/home-layout/home-layout.component';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { GetUserByEmailResponse } from '../../../../features/auths/models/get-user-by-email-response.dto';
import { AuthService } from '../../../../features/auths/services/auth.service';

@Component({
  selector: 'app-user-add-license-page',
  standalone: true,
  imports: [CommonModule, CreateLicenseFormComponent, HomeLayoutComponent],
  templateUrl: './user-add-license-page.component.html',
  styleUrl: './user-add-license-page.component.scss'
})
export class UserAddLicensePageComponent {

  user !: GetUserByEmailResponse;

  constructor(private authService: AuthService, private change: ChangeDetectorRef){}

  ngOnInit(){
    console.log(localStorage.getItem('token'))
    this.getUser();
  }
   
  getUser() {
    const decodedEmail = this.decodeToken();
    if (decodedEmail) {
      this.authService.getUserByEmail(decodedEmail).subscribe((response) => {
        this.user = response;
        this.change.markForCheck();
      });
    } else {
      console.log('No valid token found');
    }
  }

  decodeToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: { sub: string } = jwtDecode(token);
        return decodedToken.sub;
      } catch (error) {
        console.error('Invalid token:', error);
        return null;
      }
    }
    return null;
  }
}
