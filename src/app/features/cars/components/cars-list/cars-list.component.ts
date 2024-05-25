import { Component, Input } from '@angular/core';
import { CarListBaseComponent } from '../car-list-base/car-list-base.component';
import { CarListItemDto } from '../../models/car-list-item-dto';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent extends CarListBaseComponent {

   
  @Input() transmissionId: number | null = null;
  @Input() fuelId: number | null = null;
  @Input() brandId: number | null = null;


  override ngOnInit(): void {
    super.ngOnInit();
    this.filteredCars;
  }


  get filteredCars(): CarListItemDto[] {
    let filteredCars: CarListItemDto[] = this.cars;

    if(!filteredCars) return this.cars;

    if (this.transmissionId)
      filteredCars = filteredCars.filter((car) => car.transmissionId === this.transmissionId);

    if(this.fuelId)
      filteredCars = filteredCars.filter((car) => car.fuelId === this.fuelId) 

    if(this.brandId)
      filteredCars = filteredCars.filter((car) => car.brandId === this.brandId)   

    return filteredCars;

  }


}
