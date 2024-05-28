import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelService } from '../../services/model.service';
import { Router } from '@angular/router';
import { UpdateModelRequest } from '../../models/model-update-request.dto';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';

@Component({
  selector: 'app-update-model-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './update-model-form.component.html',
  styleUrl: './update-model-form.component.scss'
})
export class UpdateModelFormComponent implements OnInit{

  @Input() modelId !: number;  

  form !: FormGroup;

  formMessage: FormMessage = { success: null, error: null };
  

  constructor(private formBuilder: FormBuilder, private modelService: ModelService, private change: ChangeDetectorRef, private router: Router){}


  ngOnInit(): void {
    this.createFrom();
    this.getModel();
  }

  createFrom(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
      fuelId: ['', [Validators.required]],
      transmissionId: ['', [Validators.required]]
    })
  }

  getModel() {
    this.modelService.getModelById(this.modelId).subscribe((model)=>{
      this.form.patchValue({
        name: model.name,
        brandId: model.brandId,
        brandName: model.brandName,
        fuelId: model.fuelId,
        fuelName: model.fuelName,
        transmissionId: model.transmissionId,
        transmissionName: model.transmissionName
      })
    })
  }


  update() {
    const request: UpdateModelRequest = {
      name: this.form.value.name,
      brandId: this.form.value.brandId,
      fuelId: this.form.value.fuelId,
      transmissionId: this.form.value.transmissionId
    }
    this.modelService.updateModelById(this.modelId, request).subscribe({
      complete: () => {
        this.formMessage.success = 'Model Update Successfully!';
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/models']);
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
