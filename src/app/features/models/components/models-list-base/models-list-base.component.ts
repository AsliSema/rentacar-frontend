import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { ModelService } from '../../services/model.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-models-list-base',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './models-list-base.component.html',
  styleUrl: './models-list-base.component.scss'
})
export class ModelsListBaseComponent implements OnInit{


  @Input() initialSelectedModelId: number | null = null; 
  @Output() selectModel = new EventEmitter<ModelListItemDto | null>();

  models !: ModelListItemDto[];
  selectedModel: ModelListItemDto | null = null;
  initialSelectedModelIndex: number | null = null;

  constructor(protected modelService: ModelService, protected change: ChangeDetectorRef){}

  ngOnInit(){
    this.getModelList();
  }

  getModelList(){
    this.modelService.getModels().subscribe((response)=>{
      this.models = response;

      console.log("hey to youu!")

      if (this.initialSelectedModelId) {
        this.selectedModel =
          this.models.find(
            (model) => model.id === this.initialSelectedModelId
          ) ?? null;
        this.initialSelectedModelIndex = this.models.findIndex(
          (model) => model.id === this.initialSelectedModelId
        );
      }

      this.change.markForCheck()
    })
  }

  onSelectModel(model: ModelListItemDto) {
    this.selectedModel = this.selectedModel?.id !== model.id ? model : null;
    this.selectModel.emit(this.selectedModel);
  }

}
