import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-models-page',
  standalone: true,
  imports: [RouterModule, HomeLayoutComponent],
  templateUrl: './models-page.component.html',
  styleUrl: './models-page.component.scss'
})
export class ModelsPageComponent {

}
