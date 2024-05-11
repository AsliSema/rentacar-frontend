import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddUserFormComponent } from '../../../../features/users/components/add-user-form/add-user-form.component';

@Component({
  selector: 'app-management-create-user-page',
  standalone: true,
  imports: [CommonModule, AddUserFormComponent],
  templateUrl: './management-create-user-page.component.html',
  styleUrl: './management-create-user-page.component.scss'
})
export class ManagementCreateUserPageComponent {

}
