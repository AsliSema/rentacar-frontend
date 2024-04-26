import { ChangeDetectionStrategy,ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuComponent, MenuItem } from '../../../../shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandsService } from '../../services/brands.service';
import { BrandListBaseComponent } from '../brand-list-base/brand-list-base.component';



@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListMenuComponent extends BrandListBaseComponent implements OnInit{

  get brandsMenuItems(): MenuItem[] {
    return this.brands?.map((brand) => {
      return {
        label: brand.name,
        //click: (_: MouseEvent) => console.log(`Brand ${brand.name} clicked!`),
        click: (_: MouseEvent) => this.onSelectBrand(brand),
      };
    })
  }

}
