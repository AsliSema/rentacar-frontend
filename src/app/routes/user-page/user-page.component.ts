import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { UsersListComponent } from '../../features/users/components/users-list-table/users-list-table.component';
import { UpdateUserFormComponent } from '../../features/users/components/update-user-form/update-user-form.component';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../features/auths/services/auth.service';
import { GetUserByEmailResponse } from '../../features/auths/models/get-user-by-email-response.dto';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent, UsersListComponent, UpdateUserFormComponent, ButtonComponent, RouterModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent {

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
