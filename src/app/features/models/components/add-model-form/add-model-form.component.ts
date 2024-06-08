import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModelService } from '../../services/model.service';
import { Router } from '@angular/router';
import { ModelAddItemDto } from '../../models/model-add-item-dto';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';
import { BrandsService } from '../../../brands/services/brands.service';
import { FuelsService } from '../../../fuels/services/fuels.service';
import { TransmissionsService } from '../../../transmissions/services/transmissions.service';
import { GenericEntity } from '../../../../interfaces/genericEntity';

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.scss'
})
export class AddModelFormComponent implements OnInit{
  form !: FormGroup

  formMessage: FormMessage = { success: null, error: null };

  allBrands: GenericEntity[] = [{ id: null, name: null }];
  allTransmissions: GenericEntity[] = [{ id: null, name: null }];
  allFuels: GenericEntity[] = [{ id: null, name: null }];
  

  constructor(
    private formBuilder: FormBuilder, 
    private modelService: ModelService,
    private brandService: BrandsService,
    private fuelService: FuelsService,
    private transmissionService: TransmissionsService,
    private change: ChangeDetectorRef,
    private router: Router
  ){}


  ngOnInit(): void {
    this.createForm();
    this.getAllBrands();
    this.getAllTransmissions();
    this.getAllFuels();
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
        this.formMessage.success = 'Model add successfully!';
        this.form.reset();
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/models']);
        }, 2000)
      }
    });
  }

  getAllBrands(){
    this.brandService.getBrands().subscribe((brands)=>{
      this.allBrands = brands.map(brand => ({ id: brand.id, name: brand.name }));
    })
  }

  getAllTransmissions(){
    this.transmissionService.getTransmissions().subscribe((transmissions) => {
      this.allTransmissions = transmissions.map(transmission => ({id: transmission.id, name: transmission.name}));
    })
  }

  getAllFuels(){
    this.fuelService.getFuels().subscribe((fuels) => {
      this.allFuels = fuels.map(fuel => ({id: fuel.id, name: fuel.name}))
    })
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
