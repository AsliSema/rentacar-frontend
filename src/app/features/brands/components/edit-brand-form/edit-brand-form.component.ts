import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandsService } from '../../services/brands.service';
import { UpdateBrandRequest } from '../../models/brand-update-request-dto';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-brand-form',
    standalone: true,
    templateUrl: './edit-brand-form.component.html',
    styleUrl: './edit-brand-form.component.scss',
    imports: [CommonModule, ReactiveFormsModule, ButtonComponent]
})
export class EditBrandFormComponent implements OnInit{
  @Input() brandId !: number;  

  form !: FormGroup;
  formMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private brandsService: BrandsService, private change: ChangeDetectorRef, private router: Router){}


  ngOnInit(): void {
    this.createFrom();
    this.getBrand();
  }

  createFrom(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

  getBrand() {
    this.brandsService.getBrandById(this.brandId).subscribe((brand)=>{
      this.form.patchValue({
        name: brand.name
      })
    })
  }


  edit() {
    const request: UpdateBrandRequest = {
      name: this.form.value.name
    }
    this.brandsService.updateBrandById(this.brandId, request).subscribe({
      complete: () => {
        this.formMessage = 'Brand Update Successfully!';
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/brands']);
        }, 2000)
      }
    });
  }

  onFormSubmit() {
    if(this.form.invalid){
      this.formMessage = 'Please Fill the form correctly!';
      return
    }

    this.edit();
  }


}
