import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { GetRentalsByUserId } from '../../models/get-rental-by-user-id.response.dto';
import { RentalService } from '../../services/rental.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rentals-list-by-user-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rentals-list-by-user-id.component.html',
  styleUrl: './rentals-list-by-user-id.component.scss'
})
export class RentalsListByUserIdComponent {
  @Input() userId!: number;
  rentals !: GetRentalsByUserId[];


  constructor(private rentalsService: RentalService, private change: ChangeDetectorRef) { }

  ngOnInit(){
    this.getRentalsByUserId();
  }

  getRentalsByUserId(){
    console.log("this.userId   ", this.userId)
    this.rentalsService.getRentalsByUserId(this.userId).subscribe((rentals) => {
      this.rentals = rentals;

      this.change.markForCheck();
    })
  }


}
