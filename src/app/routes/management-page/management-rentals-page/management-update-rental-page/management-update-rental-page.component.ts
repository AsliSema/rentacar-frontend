import { Component } from '@angular/core';
import { UpdateRentalFormComponent } from '../../../../features/rentals/components/update-rental-form/update-rental-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-update-rental-page',
  standalone: true,
  imports: [UpdateRentalFormComponent],
  templateUrl: './management-update-rental-page.component.html',
  styleUrl: './management-update-rental-page.component.scss'
})
export class ManagementUpdateRentalPageComponent {

  rentalId !: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getRentalIdFromRoute();
  }

  getRentalIdFromRoute(){
    this.route.params.subscribe((params)=>{
      const rentalId = params['rentalId'];
      if(!rentalId) return;

      this.rentalId = Number(rentalId);
    })
  }

}
