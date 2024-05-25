import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

/*   cars !: CarListItemDto[];

  constructor(protected carService: CarService, private change: ChangeDetectorRef){}

  ngOnInit(): void {
      this.getCarList();
  }


  getCarList(){
    this.carService.getCars().subscribe((response)=>{
      this.cars = response;

      this.change.markForCheck()
    })
  } */






  @Input() initialSelectedCarId: number | null = null; 
  @Output() selectCar = new EventEmitter<CarListItemDto | null>();

  cars !: CarListItemDto[];
  selectedCar: CarListItemDto | null = null;
  initialSelectedCarIndex: number | null = null;

  constructor(protected carService: CarService, protected change: ChangeDetectorRef){}

  ngOnInit(){
    this.getCarList();
  }

  getCarList(){
    this.carService.getCars().subscribe((response)=>{
      this.cars = response;

      if (this.initialSelectedCarId) {
        this.selectedCar =
          this.cars.find(
            (car) => car.id === this.initialSelectedCarId
          ) ?? null;
        this.initialSelectedCarId = this.cars.findIndex(
          (car) => car.id === this.initialSelectedCarId
        );
      }

      this.change.markForCheck()
    })
  }

  onSelectModel(car: CarListItemDto) {
    this.selectedCar = this.selectedCar?.id !== car.id ? car : null;
    this.selectCar.emit(this.selectedCar);
  }
}
