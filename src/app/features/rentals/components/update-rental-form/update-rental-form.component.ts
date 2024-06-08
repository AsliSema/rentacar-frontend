import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';
import { RentalService } from '../../services/rental.service';
import { Router } from '@angular/router';
import { RentalUpdateRequestDto } from '../../models/rental-update-request.dto';
import { GenericEntity } from '../../../../interfaces/genericEntity';
import { UserService } from '../../../users/services/user.service';
import { CarService } from '../../../cars/services/car.service';

@Component({
  selector: 'app-update-rental-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ],
  templateUrl: './update-rental-form.component.html',
  styleUrl: './update-rental-form.component.scss'
})
export class UpdateRentalFormComponent {

  @Input() rentalId !: number;  

  form !: FormGroup;
  
  formMessage: FormMessage = { success: null, error: null };


  allUsers: GenericEntity[] = [{id: null, name: null}];
  allCars:  GenericEntity[] = [{id: null, name: null}];


  constructor(
    private formBuilder: FormBuilder, 
    private rentalService: RentalService, 
    private userService: UserService,
    private carService: CarService, 
    private change: ChangeDetectorRef, 
    private router: Router
  ){}


  ngOnInit(): void {
    this.createFrom();
    this.getRental();
    this.getAllUsers();
    this.getAllCars();
  }


  createFrom(){
    this.form = this.formBuilder.group({
      carId: ['', [Validators.required]],
      userId: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })
  }

  getRental() {
    this.rentalService.getRentalById(this.rentalId).subscribe((rental)=>{
      console.log(rental)
      this.form.patchValue({
        carId: rental.carId,
        userId: rental.userId,
        startDate: rental.startDate,
        endDate: rental.endDate
      })
    })
  }

  getAllUsers(){
    this.userService.getUsers().subscribe((users)=>{
      this.allUsers = users.map(user => ({ id: user.id, name: user.email }));
    })
  }

  getAllCars(){
    this.carService.getCars().subscribe((cars)=>{
      this.allCars = cars.map(car => ({ id: car.id, name: car.modelName + " " + car.modelYear}));
    })
  }

  update() {
    const request: RentalUpdateRequestDto = {
      carId: this.form.value.carId,
      userId: this.form.value.userId,
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate
    }
    this.rentalService.updateRentalById(this.rentalId, request).subscribe({
      complete: () => {
        this.formMessage.success = 'Rental Update Successfully!';
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/rentals']);
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
