import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModelsListTableComponent } from '../../../../features/models/components/models-list-table/models-list-table.component';

@Component({
  selector: 'app-management-models-page',
  standalone: true,
  imports: [CommonModule, ModelsListTableComponent],
  templateUrl: './management-models-page.component.html',
  styleUrl: './management-models-page.component.scss'
})
export class ManagementModelsPageComponent {

}
