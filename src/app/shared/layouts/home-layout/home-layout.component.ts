import { Component } from '@angular/core';
import { NavItem, NavTitle, NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ButtonComponent, RouterModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {
  title : NavTitle = {
    text: "RentACar",
    routerLink: "/"
  }

  navItems : NavItem[] = [
    {label: "Home", link: "/"},
    {label: "About", link: "/about"},
    {label: "Contact", link: "mailto: a@gmail.com"},
    {label: "Management", link: "/management"},
    {label: "Models", link: "/models"},
    {label: "Users Management", link: "/management/users"},
    {label: "Cars Management", link: "/management/cars"},
    {label: "Brands Management", link: "/management/brands"},
    {label: "Models Management", link:"/management/models"}
  ]



}
