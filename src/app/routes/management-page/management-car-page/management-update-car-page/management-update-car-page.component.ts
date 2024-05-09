import { Component, OnInit } from '@angular/core';
import { UpdateCarFormComponent } from '../../../../features/cars/components/update-car-form/update-car-form.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-update-car-page',
  standalone: true,
  imports: [CommonModule, UpdateCarFormComponent],
  templateUrl: './management-update-car-page.component.html',
  styleUrl: './management-update-car-page.component.scss'
})
export class ManagementUpdateCarPageComponent implements OnInit{

  carId !: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getCarIdFromRoute();
  }

  getCarIdFromRoute(){
    this.route.params.subscribe((params)=>{
      const carId = params['carId'];
      if(!carId) return;

      this.carId = Number(carId);
    })
  }
}
