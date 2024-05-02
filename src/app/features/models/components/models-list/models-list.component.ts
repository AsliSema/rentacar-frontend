import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { ModelService } from '../../services/model.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';


@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit{
  models !: ModelListItemDto[];

  constructor(private modelService: ModelService, private change: ChangeDetectorRef){}

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
