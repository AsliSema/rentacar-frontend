import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { ModelService } from '../../services/model.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';


@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent extends ModelsListBaseComponent implements OnInit{
 
  @Input() transmissionId: number | null = null;
  @Input() fuelId: number | null = null;
  @Input() brandId: number | null = null;


  override ngOnInit(): void {
    super.ngOnInit();
    this.filteredModels;
  }


  get filteredModels(): ModelListItemDto[] {
    let filteredModels: ModelListItemDto[] = this.models;

    if(!filteredModels) return this.models;

    if (this.transmissionId)
      filteredModels = filteredModels.filter((model) => model.transmissionId === this.transmissionId);

    if(this.fuelId)
      filteredModels = filteredModels.filter((model) => model.fuelId === this.fuelId) 

    if(this.brandId)
      filteredModels = filteredModels.filter((model) => model.brandId === this.brandId)   

    return filteredModels;

  }




}
