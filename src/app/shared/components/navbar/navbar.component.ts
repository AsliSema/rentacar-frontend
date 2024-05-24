import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { TokenService } from '../../../features/auths/services/token/token.service';
import { AuthService } from '../../../features/auths/services/auth.service';

/* export interface NavItemInterface{ //Bu şekilde de interface tanımlayarak da olur.
  label: string;
  link: string;
}
export type NavItem = NavItemInterface; */

export type NavItem = {  
  label: string;
  link: string
}

export type NavTitle = {
  text: string,
  routerLink ?: string
} | undefined;


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  @Input() title: NavTitle;
  @Input() navItems : NavItem[] = [];
  @Input() managementItems : NavItem[] = [];
  @Input() endContentTemplate ?: TemplateRef<any>;
  
  token : string | null = null;
  role: string | null = null;


  constructor(private tokenService: TokenService, private authService: AuthService) {}


  ngOnInit(){
    this.token = this.tokenService.token;
    this.role = this.authService.role;

    console.log(this.authService.role)
  }



  isUrl(url: string): boolean{
    return (
      url.startsWith("http") ||
      url.startsWith("https") ||
      url.startsWith("mailto") ||
      url.startsWith("tel")
    )

/*     const urlRegex = new RegExp ( / ( https: \/\/ www \. | http: \/\/ www \. | https: \/\/ | http: \/\/ ) ? [ a-zA-Z0-9 ] {2,} ( \. [ a-zA-Z0-9 ] {2,} )( \. [ a-zA-Z0-9 ] {2,} ) ? / );

    return urlRegex.test(url); */
  }
}
