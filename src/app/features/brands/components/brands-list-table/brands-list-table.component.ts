import { Component } from '@angular/core';
import { BrandListBaseComponent } from '../brand-list-base/brand-list-base.component';
import { CommonModule } from '@angular/common';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brands-list-table',
  standalone: true,
  imports: [CommonModule, TableDirective, ButtonComponent, RouterModule],
  templateUrl: './brands-list-table.component.html',
  styleUrl: './brands-list-table.component.scss'
})
export class BrandsListTableComponent extends BrandListBaseComponent{
}
