import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-model-page',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent, ModelsListComponent],
  templateUrl: './model-page.component.html',
  styleUrl: './model-page.component.scss'
})
export class ModelPageComponent {

}
