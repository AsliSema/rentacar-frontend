import { Component, model } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ModelDetailComponent } from '../../../features/models/components/model-detail/model-detail.component';

@Component({
  selector: 'app-model-detail-page',
  standalone: true,
  imports: [ModelDetailComponent, RouterModule],
  templateUrl: './model-detail-page.component.html',
  styleUrl: './model-detail-page.component.scss'
})
export class ModelDetailPageComponent {
  modelId !: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

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
