import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { UsersListComponent } from '../../features/users/components/users-list-table/users-list-table.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent, UsersListComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent {

}
