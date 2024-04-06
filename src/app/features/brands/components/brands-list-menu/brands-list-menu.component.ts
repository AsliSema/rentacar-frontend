import { ChangeDetectionStrategy,ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuComponent, MenuItem } from '../../../../shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandsService } from '../../services/brands.service';



@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListMenuComponent implements OnInit{
  @Input() initialSelectedBrandId : number | null = null;
  @Output() selectBrand = new EventEmitter<BrandListItemDto | null>();

  brands !: BrandListItemDto[];
  selectedBrand: BrandListItemDto | null = null;
  initialSelectedBrandIndex: number | null = null;


/*   brandsService: BrandsService;  //Birinci yol
  constructor(brandsService: BrandsService){
    this.brandsService = brandsService;
  } */

  constructor(private brandsService: BrandsService, private change: ChangeDetectorRef){} //İkinci yol

  ngOnInit(): void {
      this.getBrandList();
  }

  getBrandList(){
    this.brandsService.getBrands().subscribe((response) => {
      this.brands = response;

      if(this.initialSelectedBrandId){
        this.selectedBrand =
        this.brands.find(
          (brand) => brand.id === this.initialSelectedBrandId
        ) ?? null;
      
      this.initialSelectedBrandIndex = this.brands.findIndex(brand => brand.id === this.initialSelectedBrandId)  
      }

      this.change.markForCheck();
    });

  }

  onSelectBrand(brand: BrandListItemDto){
    this.selectedBrand = this.selectedBrand?.id !== brand.id ? brand : null;
    this.selectBrand.emit(this.selectedBrand);
  };

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
