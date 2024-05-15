import { CommonModule } from '@angular/common';
import { EventEmitter, ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BrandsService } from '../../services/brands.service';
import { BrandAddItemDto } from '../../models/brand-add-item-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand-form',
  standalone: true,
  imports: [
    CommonModule, 
    //FormsModule,
    ReactiveFormsModule,
    ButtonComponent],
  templateUrl: './add-brand-form.component.html',
  styleUrl: './add-brand-form.component.scss'
})
export class AddBrandFormComponent implements OnInit{
  //nameInput: string = ''  FormsModule için
  form !: FormGroup
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private brandService: BrandsService, 
    private change: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(2), Validators.maxLength(30) ]]
    })
  }

  add(){
    //create gelmiyor service in içinden open-api-generator kullanınca
    const request: BrandAddItemDto = {
      name: this.form.value.name
    }
    //const brand: BrandAddItemDto = this.form.value.name;
    this.brandService.createBrand(request).subscribe({
      next: (response) => {
        //Observable dan gelen veriyi yakaladığımız fonksiyon
        console.log(response)
      },
      error: (error) => {
        this.formMessage = error.error;
        this.change.markForCheck();
      },
      complete: () => {
        this.formMessage = 'Brand add successfully!';
        this.form.reset();
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/brands']);
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
