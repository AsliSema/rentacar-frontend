import { Component } from '@angular/core';
import { CarListBaseComponent } from '../car-list-base/car-list-base.component';
import { CommonModule } from '@angular/common';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cars-list-table',
  standalone: true,
  imports: [CommonModule, TableDirective, ButtonComponent, RouterModule],
  templateUrl: './cars-list-table.component.html',
  styleUrl: './cars-list-table.component.scss'
})
export class CarsListTableComponent extends CarListBaseComponent{

  deleteCar(carId: number){
    this.carService.deleteCarById(carId).subscribe({
      complete: () => {
        this.getCarList();
      }
    })
  }

}
