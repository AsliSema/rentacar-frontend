import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { AddBrandFormComponent } from '../../../features/brands/components/add-brand-form/add-brand-form.component';
import { BrandsListTableComponent } from '../../../features/brands/components/brands-list-table/brands-list-table.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-brands-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, BrandsListTableComponent, RouterModule],
  templateUrl: './management-brands-page.component.html',
  styleUrl: './management-brands-page.component.scss'
})
export class ManagementBrandsPageComponent {
  @ViewChild('brandsListTable') brandsListTable!: BrandsListTableComponent;


  onBrandAdded() {
    this.brandsListTable.getBrandList(); // Refresh the list of brands
  }

}
