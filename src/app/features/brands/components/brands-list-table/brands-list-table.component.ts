import { ChangeDetectorRef, Component} from '@angular/core';
import { BrandListBaseComponent } from '../brand-list-base/brand-list-base.component';
import { CommonModule } from '@angular/common';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands-list-table',
  standalone: true,
  imports: [CommonModule, TableDirective, ButtonComponent, RouterModule],
  templateUrl: './brands-list-table.component.html',
  styleUrl: './brands-list-table.component.scss'
})
export class BrandsListTableComponent extends BrandListBaseComponent{



/* deleteBrand(brandId: number) {
  this.brandServise.deleteBrandById(brandId).subscribe(brand => this.brandServise.getBrands);
} */

deleteBrand(brandId: number) {
  this.brandsService.deleteBrandById(brandId).subscribe({
    complete: () => {
      this.getBrandList();
    }
  });
}

}
