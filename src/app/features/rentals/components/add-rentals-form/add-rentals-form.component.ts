import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';
import { Router } from '@angular/router';
import { RentalService } from '../../services/rental.service';
import { RentalAddItemDto } from '../../models/rental-add-item.dto';

@Component({
  selector: 'app-add-rentals-form',
  standalone: true,
  imports: [   CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './add-rentals-form.component.html',
  styleUrl: './add-rentals-form.component.scss'
})
export class AddRentalsFormComponent {

    form !: FormGroup
  
    formMessage: FormMessage = { success: null, error: null };
  
  
    constructor(
      private formBuilder: FormBuilder, 
      private rentalService: RentalService, 
      private change: ChangeDetectorRef,
      private router: Router
    ){}
  
    ngOnInit(): void {
      this.createForm();
    }
  
    createForm(){
      this.form = this.formBuilder.group({
        carId:['', [Validators.required, Validators.minLength(2), Validators.maxLength(30) ]],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        userId: ['', Validators.required]
      })
    }
  
    add(){
      //create gelmiyor service in içinden open-api-generator kullanınca
      const request: RentalAddItemDto = {
        carId: this.form.value.carId,
        startDate: this.form.value.startDate,
        endDate: this.form.value.endDate,
        userId: this.form.value.userId
      }
      //const brand: BrandAddItemDto = this.form.value.name;
      this.rentalService.createRental(request).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (error) => {
          this.formMessage = error.error;
          this.change.markForCheck();
        },
        complete: () => {
          this.formMessage.success = 'Rental add successfully!';
          this.form.reset();
          this.change.markForCheck();
  
          setTimeout(()=>{
            this.router.navigate(['/management/rentals']);
          }, 2000)
        }
      });
  
    }
  
  
    onFormSubmit() {
      if (this.form.invalid) {
        this.formMessage.error = this.getErrorMessage();
        return;
      }
      this.add();
    }
    
    private getErrorMessage(): string | null {
      const controls = this.form.controls;
    
      for (const controlName in controls) {
        const control = controls[controlName];
        if (control.invalid) {
          if (control.errors?.['required']) {
            return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required.`;
          }
          if (control.errors?.['minlength']) {
            return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be at least ${control.errors['minlength'].requiredLength} characters.`;
          }
          if (control.errors?.['maxlength']) {
            return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be at most ${control.errors['maxlength'].requiredLength} characters.`;
          }
          if (control.errors?.['min']) {
            return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be the minimum ${control.errors['min'].min}.`;
          }
        }
      }
    
      return null;
    }

}
