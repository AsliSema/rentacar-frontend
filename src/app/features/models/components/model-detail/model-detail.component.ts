import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { GetModelByIdResponse } from '../../models/get-model-by-id-response.dto';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-model-detail',
  standalone: true,
  imports: [],
  templateUrl: './model-detail.component.html',
  styleUrl: './model-detail.component.scss'
})
export class ModelDetailComponent {

  @Input() id!: number;
  model !: GetModelByIdResponse;

  constructor(private modelsService: ModelService, private change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getModelDetail();
  }


  getModelDetail() {
    console.log("model detail")
    this.modelsService.getModelById(this.id).subscribe((model) => {
      this.model = model;

      this.change.markForCheck();
    })
  }

}
