import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersListComponent } from '../../../features/users/components/users-list-table/users-list-table.component';

@Component({
  selector: 'app-management-users-page',
  standalone: true,
  imports: [CommonModule, UsersListComponent],
  templateUrl: './management-users-page.component.html',
  styleUrl: './management-users-page.component.scss'
})
export class ManagementUsersPageComponent {

}
