import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../users/services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LoginRequest } from '../../models/login-request.dto';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {


  form !: FormGroup
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private tokenService: TokenService, 
    private change: ChangeDetectorRef,
    private router: Router
  ){}



  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  add(){
    const request: LoginRequest = {
      email: this.form.value.email,
      password: this.form.value.password
    }



    this.authService.loginUser(request).subscribe({
      next: (response) => {
        this.tokenService.token = response.bareerToken as string
        this.authService.role = response.role as string
        this.authService.userId = response.id as number
        console.log(response) //sil sonra
        console.log(this.authService.userId)
        console.log("decodedEmail   ", this.authService.decodedEmail)
        console.log(this.authService.getUserByEmail)

      },
      error: (error) => {
        this.formMessage = error.error;
        this.change.markForCheck();
      },
      complete: () => {
        this.formMessage = 'You have signed in successfully!';
        //this.form.reset();
        this.change.markForCheck();

        setTimeout(()=>{ 
          this.router.navigate(['/models']);
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
        if (controlName === 'email' && control.errors?.['email']) {
          return 'Invalid email address.';
        }
      }
    }
  
    return null;
  }
}
