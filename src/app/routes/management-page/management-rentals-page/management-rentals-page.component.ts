import { Component } from '@angular/core';
import { RentalsListTableComponent } from '../../../features/rentals/components/rentals-list-table/rentals-list-table.component';

@Component({
  selector: 'app-management-rentals-page',
  standalone: true,
  imports: [RentalsListTableComponent],
  templateUrl: './management-rentals-page.component.html',
  styleUrl: './management-rentals-page.component.scss'
})
export class ManagementRentalsPageComponent {

}
