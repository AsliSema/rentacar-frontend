import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { TokenService } from '../../../features/auths/services/token/token.service';
import { AuthService } from '../../../features/auths/services/auth.service';
import { GetUserByEmailResponse } from '../../../features/auths/models/get-user-by-email-response.dto';


export type NavItem = {
  label: string;
  link: string
}

export type NavTitle = {
  text: string,
  routerLink?: string
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
  
  token: string | null = null;
  role: string | null = null;
  id: number | null = null;
  user !: GetUserByEmailResponse | null;


constructor(private tokenService: TokenService, private authService: AuthService, private change: ChangeDetectorRef) { }


  ngOnInit() {
    this.token = this.tokenService.token;
    this.role = this.authService.role; 
    this.authService.getUser().subscribe((user) => {
      this.user = user;
      this.change.markForCheck(); // Trigger change detection
    });
  }



  isUrl(url: string): boolean {
    return (
      url.startsWith("http") ||
      url.startsWith("https") ||
      url.startsWith("mailto") ||
      url.startsWith("tel")
    )

  }
}
