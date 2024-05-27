import { Component } from '@angular/core';
import { RentalsListByUserIdComponent } from '../../../features/rentals/components/rentals-list-by-user-id/rentals-list-by-user-id.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-past-rentals',
  standalone: true,
  imports: [RentalsListByUserIdComponent],
  templateUrl: './user-past-rentals.component.html',
  styleUrl: './user-past-rentals.component.scss'
})
export class UserPastRentalsComponent {
  id !: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log("params  ",params)
      this.id = Number(params.get('user'));
    });
  }

}
