import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarsListTableComponent } from '../../../features/cars/components/cars-list-table/cars-list-table.component';

@Component({
  selector: 'app-management-car-page',
  standalone: true,
  imports: [CarsListTableComponent],
  templateUrl: './management-car-page.component.html',
  styleUrl: './management-car-page.component.scss'
})
export class ManagementCarPageComponent {

}
