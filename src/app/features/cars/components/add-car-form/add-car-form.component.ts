import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { CarAddItemDto } from '../../models/car-add-item-dto';

@Component({
  selector: 'app-add-car-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './add-car-form.component.html',
  styleUrl: './add-car-form.component.scss'
})
export class AddCarFormComponent implements OnInit{
  form !: FormGroup
  formMessage: string | null = null;

  constructor (
    private formBuilder: FormBuilder,
    private carService: CarsService,
    private change: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      plate: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8) ]],
      modelYear:['', [Validators.required, Validators.min(2000)]],
      state: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      dailyPrice: ['', [Validators.required]],
      modelId: ['', [Validators.required]],
      userId: ['', [Validators.required]]
    })
  }

  add(){
    const request: CarAddItemDto = {
      modelYear: this.form.value.modelYear,
      plate: this.form.value.plate,
      state: this.form.value.state,
      dailyPrice: this.form.value.dailyPrice,
      modelId: this.form.value.modelId,
      userId: this.form.value.userId
    }
    this.carService.createCar(request).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        this.formMessage = error.error;
        this.change.markForCheck();
      },
      complete: () => {
        this.formMessage = 'Car add successfully!';
        this.form.reset();
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/cars']);
        }, 2000)
      }
    });
  }


  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = this.getErrorMessage();
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
