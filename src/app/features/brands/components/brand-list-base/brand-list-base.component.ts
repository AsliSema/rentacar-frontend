import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandsService } from '../../services/brands.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-brand-list-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-list-base.component.html',
  styleUrl: './brand-list-base.component.scss'
})
export class BrandListBaseComponent {
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

}
