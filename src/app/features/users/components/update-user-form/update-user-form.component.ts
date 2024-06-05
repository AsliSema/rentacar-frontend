import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UpdateUserRequest } from '../../models/user-update-request.dto';
import { GetUserByIdResponse } from '../../models/get-user-by-id-response-dto';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';

@Component({
  selector: 'app-update-user-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './update-user-form.component.html',
  styleUrl: './update-user-form.component.scss'
})
export class UpdateUserFormComponent implements OnInit{

  @Input() userId !: number;

  form !: FormGroup;

  formMessage: FormMessage = { success: null, error: null };


  constructor(
    private formBuilder: FormBuilder, private userService: UserService, private change: ChangeDetectorRef, private router: Router
  ){}

  ngOnInit(): void {
    this.createForm();
    this.getUser();
  }


  createForm() {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      phoneNumber: '',
      identityNumber: '',
      city: '',
      licenseNumber:'',
      issueDate:'',
      licenseClass:''
    })
  }


  getUser(){
    this.userService.getUserById(this.userId).subscribe((user)=>{
      console.log(user.issueDate)
      console.log(user)
      this.form.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        companyName: user.companyName,
        phoneNumber: user.phoneNumber,
        identityNumber: user.identityNumber,
        city: user.city,
        licenseNumber: user.licenseNumber,
        issueDate: user.issueDate,  //does not work
        licenseClass: user.licenseClass
      })
    })
  }

  update() {
    const request: UpdateUserRequest = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      companyName: this.form.value.companyName,
      phoneNumber: this.form.value.phoneNumber,
      identityNumber: this.form.value.identityNumber,
      city: this.form.value.city,
      password: this.form.value.password,
      confirmPassword: this.form.value.confirmPassword
    }

    this.userService.updateUserById(this.userId, request).subscribe({
      complete: () => {
        this.formMessage.success = 'User Update Successfully!';
        this.change.markForCheck();

        setTimeout(()=>{
          if(localStorage.getItem("role") === "ADMIN"){
            this.router.navigate(['/management/users']);
          }else{
            this.router.navigate(['/cars']);
          }
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
