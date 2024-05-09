import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CarService } from '../../services/car.service';
import { CarListItemDto } from '../../models/car-list-item-dto';

@Component({
  selector: 'app-car-list-base',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './car-list-base.component.html',
  styleUrl: './car-list-base.component.scss'
})
export class CarListBaseComponent implements OnInit{

  cars !: CarListItemDto[];

  constructor(protected carService: CarService, private change: ChangeDetectorRef){}

  ngOnInit(): void {
      this.getCarList();
  }


  getCarList(){
    this.carService.getCars().subscribe((response)=>{
      this.cars = response;

      this.change.markForCheck()
    })
  }

}
