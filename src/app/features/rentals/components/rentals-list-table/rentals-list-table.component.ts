import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { RentalListItemDto } from '../../models/rental-list-item.dto';
import { RentalService } from '../../services/rental.service';

@Component({
  selector: 'app-rentals-list-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './rentals-list-table.component.html',
  styleUrl: './rentals-list-table.component.scss'
})
export class RentalsListTableComponent {
  rentals !: RentalListItemDto[]

  constructor(private rentalService: RentalService, private change: ChangeDetectorRef){}

  ngOnInit(){
    this.getRentalList();
  }

  getRentalList(){
    this.rentalService.getRentals().subscribe((response)=>{
      this.rentals = response;

      this.change.markForCheck()
    })
  }

}
