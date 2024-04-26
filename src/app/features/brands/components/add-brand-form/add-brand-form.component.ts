import { CommonModule } from '@angular/common';
import { EventEmitter, ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BrandsService } from '../../services/brands.service';
import { BrandAddItemDto } from '../../models/brand-add-item-dto';

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
    private change: ChangeDetectorRef
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
    //create gelmiyo service in içinden
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
      }
    });

  }

  onFormSubmit() {
    if(this.form.invalid){
      const nameErrors = this.form.get('name')?.errors;
      if (nameErrors) {
        if (nameErrors['required']) {
          this.formMessage = 'Brand name is required.';
        } else if (nameErrors['minlength']) {
          this.formMessage = 'Brand name must be at least 2 characters.';
        } else if (nameErrors['maxlength']) {
          this.formMessage = 'Brand name must be at most 30 characters.';
        } else {
          this.formMessage = null;
        }
      }
      return;
    }
    this.add()
  }

}
