import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModelService } from '../../services/model.service';
import { Router } from '@angular/router';
import { ModelAddItemDto } from '../../models/model-add-item-dto';

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.scss'
})
export class AddModelFormComponent implements OnInit{
  form !: FormGroup
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private modelService: ModelService, 
    private change: ChangeDetectorRef,
    private router: Router
  ){}


  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(2), Validators.maxLength(30) ]],
      brandId: ['', Validators.required],
      fuelId: ['', Validators.required],
      transmissionId: ['', Validators.required]
    })
  }

  add(){
    const request: ModelAddItemDto = {
      name: this.form.value.name,
      brandId: this.form.value.brandId,
      fuelId: this.form.value.fuelId,
      transmissionId: this.form.value.transmissionId
    }
    this.modelService.createModel(request).subscribe({
      next: (response) => {
        //Observable dan gelen veriyi yakaladığımız fonksiyon
        console.log(response)
      },
      error: (error) => {
        this.formMessage = error.error;
        this.change.markForCheck();
      },
      complete: () => {
        this.formMessage = 'Model add successfully!';
        this.form.reset();
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/models']);
        }, 2000)
      }
    });
  }

  onFormSubmit() {
    if(this.form.invalid){
      const nameErrors = this.form.get('name')?.errors;
      if (nameErrors) {
        if (nameErrors['required']) {
          this.formMessage = 'Model name is required.';
        } else if (nameErrors['minlength']) {
          this.formMessage = 'Model name must be at least 2 characters.';
        } else if (nameErrors['maxlength']) {
          this.formMessage = 'Model name must be at most 30 characters.';
        } else {
          this.formMessage = null;
        }
      }

      const brandIdControl = this.form.get('brandId');
      if (brandIdControl?.errors && brandIdControl.errors['required']) {
        this.formMessage = 'Brand is required.';
      }
  
      const fuelIdControl = this.form.get('fuelId');
      if (fuelIdControl?.errors && fuelIdControl.errors['required']) {
        this.formMessage = 'Fuel type is required.';
      }
  
      const transmissionIdControl = this.form.get('transmissionId');
      if (transmissionIdControl?.errors && transmissionIdControl.errors['required']) {
        this.formMessage = 'Transmission type is required.';
      }
      
      return;
    }
    this.add()
  }


  

}
