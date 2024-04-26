import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { AddBrandFormComponent } from '../../../features/brands/components/add-brand-form/add-brand-form.component';
import { BrandsListTableComponent } from '../../../features/brands/components/brands-list-table/brands-list-table.component';

@Component({
  selector: 'app-management-brands-page',
  standalone: true,
  imports: [CommonModule, AddBrandFormComponent, BrandsListTableComponent],
  templateUrl: './management-brands-page.component.html',
  styleUrl: './management-brands-page.component.scss'
})
export class ManagementBrandsPageComponent {
  @ViewChild('brandsListTable') brandsListTable!: BrandsListTableComponent;


  onBrandAdded() {
    this.brandsListTable.getBrandList(); // Refresh the list of brands
  }

}
