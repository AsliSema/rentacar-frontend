import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { UserAddItemDto } from '../../models/user-add-item-dto';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auths/services/auth.service';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';
import { CitiesService } from '../../../../shared/services/cities.service';

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.scss'
})
export class AddUserFormComponent implements OnInit{
  form !: FormGroup

  formMessage: FormMessage = { success: null, error: null };
  
  citiesInTurkey: string[] = [];
  

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private citiesService: CitiesService,
    private change: ChangeDetectorRef,
    private router: Router
  ){}


  ngOnInit(): void {
    this.createForm();
    this.citiesInTurkey = this.citiesService.getCities();
  }

  createForm(){
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      identityNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      city: ['', [Validators.required]]

    })
  }

  add(){
    const request: UserAddItemDto = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      confirmPassword: this.form.value.confirmPassword,
      phoneNumber: this.form.value.phoneNumber,
      identityNumber: this.form.value.identityNumber,
      city: this.form.value.city
    }



    this.authService.registerUser(request).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        this.formMessage = error.error;
        this.change.markForCheck();
      },
      complete: () => {
        this.formMessage.success = 'User add successfully!';
        this.form.reset();
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/users']);
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
        if (controlName === 'email' && control.errors?.['email']) {
          return 'Invalid email address.';
        }
      }
    }
  
    return null;
  }


}
