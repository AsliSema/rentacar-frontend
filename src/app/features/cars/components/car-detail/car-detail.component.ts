import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { GetCarByIdResponse } from '../../models/car-get-by-id-item.dto';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';
import { Router } from '@angular/router';
import { GetUserByEmailResponse } from '../../../auths/models/get-user-by-email-response.dto';
import { AuthService } from '../../../auths/services/auth.service';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss'
})
export class CarDetailComponent {

  @Input() id!: number;
  car !: GetCarByIdResponse;
  user !: GetUserByEmailResponse | null;

  message: FormMessage = { success: null, error: null };

  constructor(private carsService: CarService, private change: ChangeDetectorRef, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getCarDetail();
    this.authService.getUser().subscribe((user) => {
      this.user = user;
      this.change.markForCheck(); 
    });
  }


  getCarDetail() {
    this.carsService.getCarById(this.id).subscribe((car) => {
      this.car = car;
      this.change.markForCheck();
    })
  }


  renting() {
    if(!this.user){
      this.message.error = "You have to sign in first!"

      setTimeout(()=>{
        this.router.navigate(['/login']);
      }, 2000)
    }if(this.user){
      console.log(this.user.id)
      this.message.success = "success"
    }
  }


}
