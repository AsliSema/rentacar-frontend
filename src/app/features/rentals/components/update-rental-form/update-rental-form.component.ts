import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';
import { RentalService } from '../../services/rental.service';
import { Router } from '@angular/router';
import { RentalUpdateRequestDto } from '../../models/rental-update-request.dto';

@Component({
  selector: 'app-update-rental-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ],
  templateUrl: './update-rental-form.component.html',
  styleUrl: './update-rental-form.component.scss'
})
export class UpdateRentalFormComponent {

  @Input() rentalId !: number;  

  form !: FormGroup;
  
  formMessage: FormMessage = { success: null, error: null };


  constructor(private formBuilder: FormBuilder, private rentalService: RentalService, private change: ChangeDetectorRef, private router: Router){}


  ngOnInit(): void {
    this.createFrom();
    this.getRental();
  }


  createFrom(){
    this.form = this.formBuilder.group({
      carId: ['', [Validators.required]],
      userId: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })
  }

  getRental() {
    this.rentalService.getRentalById(this.rentalId).subscribe((rental)=>{
      console.log(rental)
      this.form.patchValue({
        carId: rental.carId,
        userId: rental.userId,
        startDate: rental.startDate,
        endDate: rental.endDate
      })
    })
  }


  update() {
    const request: RentalUpdateRequestDto = {
      carId: this.form.value.carId,
      userId: this.form.value.userId,
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate
    }
    this.rentalService.updateRentalById(this.rentalId, request).subscribe({
      complete: () => {
        this.formMessage.success = 'Rental Update Successfully!';
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/rentals']);
        }, 2000)
      }
    });
  }

  onFormSubmit() {
    if(this.form.invalid){
      this.formMessage.error = 'Please Fill the form correctly!';
      return
    }

    this.update();
  }


}
