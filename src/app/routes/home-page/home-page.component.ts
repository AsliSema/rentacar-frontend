import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BrandsListMenuComponent } from '../../features/brands/components/brands-list-menu/brands-list-menu.component';
import { BrandListItemDto } from '../../features/brands/models/brand-list-item-dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent, ButtonComponent, BrandsListMenuComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  selectedBrandId: number | null = null; 

  constructor(private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.getSelectedBrandIdFromRoute();
  }


  getSelectedBrandIdFromRoute() {
    this.route.queryParams.subscribe((params) => {
      if (
        params['brandId'] &&
        this.selectedBrandId !== Number.parseInt(params['brandId'])
      )
        this.selectedBrandId = Number.parseInt(params['brandId']);
    });
  }


  onSelectBrand(selectedBrand: BrandListItemDto | null ){

    this.selectedBrandId = selectedBrand?.id ?? null;

    if(this.selectedBrandId !== null){
      this.router.navigate([''], {
        queryParams : {
          brandId: this.selectedBrandId
        }
      })
    } else {
      this.router.navigate(['']);
    }
  }

}
