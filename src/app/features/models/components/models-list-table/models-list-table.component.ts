import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { TableDirective } from '../../../../shared/directives/table.directive';

@Component({
  selector: 'app-models-list-table',
  standalone: true,
  imports: [CommonModule, TableDirective, ButtonComponent, RouterModule],
  templateUrl: './models-list-table.component.html',
  styleUrl: './models-list-table.component.scss'
})
export class ModelsListTableComponent extends ModelsListBaseComponent{


  deleteModel(modelId: number) {
    this.modelService.deleteModelById(modelId).subscribe({
      complete: () => {
        this.getModelList();
      }
    });
  }

}
