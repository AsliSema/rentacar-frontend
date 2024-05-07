import { CommonModule } from '@angular/common';
import { Component, OnInit, model } from '@angular/core';
import { UpdateModelFormComponent } from '../../../../features/models/components/update-model-form/update-model-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-update-model-page',
  standalone: true,
  imports: [CommonModule, UpdateModelFormComponent],
  templateUrl: './management-update-model-page.component.html',
  styleUrl: './management-update-model-page.component.scss'
})
export class ManagementUpdateModelPageComponent implements OnInit{

  modelId !: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.getModelIdFromRoute();
  }

  getModelIdFromRoute(){
    this.route.params.subscribe((params)=>{
      const modelId = params['modelId'];
      if(!modelId) return;

      this.modelId = Number(modelId);
    })
  }
}
