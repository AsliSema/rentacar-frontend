import { Component } from '@angular/core';
import { AddCarFormComponent } from '../../../../features/cars/components/add-car-form/add-car-form.component';

@Component({
  selector: 'app-management-create-car-page',
  standalone: true,
  imports: [AddCarFormComponent],
  templateUrl: './management-create-car-page.component.html',
  styleUrl: './management-create-car-page.component.scss'
})
export class ManagementCreateCarPageComponent {

}
