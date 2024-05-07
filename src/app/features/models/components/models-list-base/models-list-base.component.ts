import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  models !: ModelListItemDto[];

  constructor(protected modelService: ModelService, private change: ChangeDetectorRef){}

  ngOnInit(){
    this.getModelList();
  }

  getModelList(){
    this.modelService.getModels().subscribe((response)=>{
      this.models = response;

      this.change.markForCheck()
    })
  }

}
