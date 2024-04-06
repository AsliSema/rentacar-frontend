import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [RouterModule, HomeLayoutComponent],
  templateUrl: './management-page.component.html',
  styleUrl: './management-page.component.scss'
})
export class ManagementPageComponent {

}
