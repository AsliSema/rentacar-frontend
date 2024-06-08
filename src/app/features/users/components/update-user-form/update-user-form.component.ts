import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UpdateUserRequest } from '../../models/user-update-request.dto';
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


  citiesInTurkey: string[] = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin","Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa","Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum","Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir","Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir","Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir","Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Sivas", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
  ];

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
      this.form.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        identityNumber: user.identityNumber,
        city: user.city,
        licenseNumber: user.licenseNumber,
        issueDate: user.issueDate, 
        licenseClass: user.licenseClass
      })
    })
  }

  update() {
    const request: UpdateUserRequest = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
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
