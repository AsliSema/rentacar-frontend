import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TransmissionListItemDto } from '../../../features/transmissions/models/transmission-list-item.dto';
import { FuelListItemDto } from '../../../features/fuels/models/fuel-list-item.dto';
import { BrandListItemDto } from '../../../features/brands/models/brand-list-item-dto';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { TransmissionsListMenuComponent } from '../../../features/transmissions/component/transmissions-list-menu/transmissions-list-menu.component';
import { FuelsListMenuComponent } from '../../../features/fuels/components/fuels-list-menu/fuels-list-menu.component';
import { BrandsListMenuComponent } from '../../../features/brands/components/brands-list-menu/brands-list-menu.component';
import { CarsListComponent } from '../../../features/cars/components/cars-list/cars-list.component';

@Component({
  selector: 'app-cars-list-page',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent, CarsListComponent, TransmissionsListMenuComponent, FuelsListMenuComponent, BrandsListMenuComponent, RouterModule],
  templateUrl: './cars-list-page.component.html',
  styleUrl: './cars-list-page.component.scss'
})
export class CarsListPageComponent {

  selectedTransmissionId: number | null = null; 
  selectedFuelId: number | null = null;
  selectedBrandId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.getSelectedTransmissionIdFromRoute();
      this.getSelectedFuelIdFromRoute();
      this.getSelectedBrandIdFromRoute();
  }


  getSelectedTransmissionIdFromRoute() {
    this.route.queryParams.subscribe((params) => {
      if (
        params['transmissionId'] &&
        this.selectedTransmissionId !== Number.parseInt(params['transmissionId'])
      )
        this.selectedTransmissionId = Number.parseInt(params['transmissionId']);
    });
  }


  onSelectTransmission(selectedTransmission: TransmissionListItemDto | null ){

    this.selectedTransmissionId = selectedTransmission?.id ?? null;

    if(this.selectedTransmissionId !== null){
      this.router.navigate(['/cars'], {
        queryParams : {
          transmissionId: this.selectedTransmissionId
        }
      })
    } else {
      this.router.navigate(['/cars']);
    }
  }


  getSelectedFuelIdFromRoute() {
    this.route.queryParams.subscribe((params) => {
      if (
        params['fuelId'] &&
        this.selectedFuelId !== Number.parseInt(params['fuelId'])
      )
        this.selectedFuelId = Number.parseInt(params['fuelId']);
    });
  }


  onSelectFuel(selectedFuel: FuelListItemDto | null ){

    this.selectedFuelId = selectedFuel?.id ?? null;

    if(this.selectedFuelId !== null){
      this.router.navigate(['/cars'], {
        queryParams : {
          fuelId: this.selectedFuelId
        }
      })
    } else {
      this.router.navigate(['/cars']);
    }
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
      this.router.navigate(['/cars'], {
        queryParams : {
          brandId: this.selectedBrandId
        }
      })
    } else {
      this.router.navigate(['/cars']);
    }
  }
}


