import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { LicenseService } from '../../../services/license.service';
import { Router } from '@angular/router';
import { LicenseAddItemDto } from '../../../models/license-add-item.dto';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-create-license-form',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule, ButtonComponent],
  templateUrl: './create-license-form.component.html',
  styleUrl: './create-license-form.component.scss'
})
export class CreateLicenseFormComponent implements OnInit{
  @Input() userId !: number;

  form !: FormGroup
  formMessage: string | null = null;

  constructor (
    private formBuilder: FormBuilder,
    private licenseService: LicenseService,
    private change: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      licenseNumber: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6) ]],
      issueDate: ['', [Validators.required, this.dateFormatValidator('yyyy-MM-dd')]],
      licenseClass: ['', Validators.required] 
    })
  }

  dateFormatValidator(format: string): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const regex = /^\d{4}-\d{2}-\d{2}$/; // Regex for 'yyyy-MM-dd' format
      const valid = regex.test(value);
      return valid ? null : { invalidDateFormat: { valid: false, expectedFormat: format } };
    };
  }

  add(){
    const request: LicenseAddItemDto = {
      licenseNumber: this.form.value.licenseNumber,
      issueDate: this.form.value.issueDate,
      licenseClass: this.form.value.licenseClass
    }
    this.licenseService.createLicense(this.userId, request).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        this.formMessage = error.error;
        this.change.markForCheck();
      },
      complete: () => {
        this.formMessage = 'License add successfully!';
        this.form.reset();
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/user/information']);
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
