import { Component } from '@angular/core';
import { NavItem, NavTitle, NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
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
    {label: "Brands Management", link: "/management/brands"}
  ]



}
