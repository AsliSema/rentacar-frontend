import { Component } from '@angular/core';
import { AddRentalsFormComponent } from '../../../../features/rentals/components/add-rentals-form/add-rentals-form.component';

@Component({
  selector: 'app-management-create-rental-page',
  standalone: true,
  imports: [AddRentalsFormComponent],
  templateUrl: './management-create-rental-page.component.html',
  styleUrl: './management-create-rental-page.component.scss'
})
export class ManagementCreateRentalPageComponent {

}
