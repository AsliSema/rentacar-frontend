import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { GetCarByIdResponse } from '../../models/car-get-by-id-item.dto';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss'
})
export class CarDetailComponent {

  @Input() id!: number;
  car !: GetCarByIdResponse;

  constructor(private carsService: CarService, private change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCarDetail();
  }


  getCarDetail() {
    this.carsService.getCarById(this.id).subscribe((car) => {
      this.car = car;
      console.log(this.car)
      this.change.markForCheck();
    })
  }


}
