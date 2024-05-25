import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CarDetailComponent } from '../../../features/cars/components/car-detail/car-detail.component';

@Component({
  selector: 'app-car-detail-page',
  standalone: true,
  imports: [RouterModule, CarDetailComponent],
  templateUrl: './car-detail-page.component.html',
  styleUrl: './car-detail-page.component.scss'
})
export class CarDetailPageComponent {

  carId !: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCarIdFromRoute();
  }

  getCarIdFromRoute(){
    this.route.params.subscribe((params)=>{
      const carId = params['id'];
      if(!carId) return;

      this.carId = Number(carId);
    })
  } 


}
