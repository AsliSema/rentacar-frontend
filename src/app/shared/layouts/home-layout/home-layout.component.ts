import { Component } from '@angular/core';
import { NavItem, NavTitle, NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../features/auths/services/auth.service';
import { TokenService } from '../../../features/auths/services/token/token.service';


@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ButtonComponent, RouterModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

  token : string | null = null;


  constructor(private tokenService: TokenService) {}


  ngOnInit(){
    this.token = this.tokenService.token;
  }

  logout() {
    this.tokenService.clearToken();
    location.href = "/";
  }


  title : NavTitle = {
    text: "RentiCar",
    routerLink: "/"
  }

  navItems : NavItem[] = [
    {label: "Home", link: "/"},
    {label: "About", link: "/about"},
    {label: "Cars", link: "/cars"},
    {label: "Contact", link: "mailto: a@gmail.com"}
  ]

  managementItems: NavItem[] = [
    {label: "Users Management", link: "/management/users"},
    {label: "Brands Management", link: "/management/brands"},
    {label: "Cars Management", link: "/management/cars"},
    {label: "Models Management", link:"/management/models"},
    {label: "Rentals Management", link: "/management/rentals"}
  ]


}
