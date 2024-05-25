import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cars-page',
  standalone: true,
  imports: [HomeLayoutComponent, RouterModule],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.scss'
})
export class CarsPageComponent {

}
