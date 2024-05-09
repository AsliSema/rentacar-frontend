import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';
import { UpdateCarRequest } from '../../models/car-update-request.dto';

@Component({
  selector: 'app-update-car-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './update-car-form.component.html',
  styleUrl: './update-car-form.component.scss'
})
export class UpdateCarFormComponent implements OnInit{

  @Input() carId !: number;

  form !: FormGroup;
  formMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private carService: CarService, private change: ChangeDetectorRef, private router: Router){
  }

  ngOnInit(): void {
      this.createForm();
      this.getCar();
    }

/*   createForm(){
    this.carService.getCarById(this.carId).subscribe((car)=>{
      console.log(this.carId)
      console.log(car)
      this.form = this.formBuilder.group({
        plate: car.plate,
        modelYear: car.modelYear,
        state: car.state,
        dailyPrice: car.dailyPrice,
        modelId: car.modelId,
        userId: car.userId
      })
    })
  } */

  createForm() {
    this.form = this.formBuilder.group({
      plate: '',
      modelYear: '',
      state: '',
      dailyPrice: '',
      color: '',
      modelId: '',
      userId: ''
    })
  }

  getCar(){
    this.carService.getCarById(this.carId).subscribe((car)=>{
      this.form.patchValue({
        plate: car.plate,
        modelYear: car.modelYear,
        state: car.state,
        dailyPrice: car.dailyPrice,
        color: car.color,
        modelId: car.modelId,
        userId: car.userId
      })
    })
  }
  


  update() {
    const request: UpdateCarRequest = {
      plate: this.form.value.plate,
      modelYear: this.form.value.modelYear,
      state: this.form.value.state,
      dailyPrice: this.form.value.dailyPrice,
      color: this.form.value.color,
      modelId: this.form.value.modelId,
      userId: this.form.value.userId
    }
    this.carService.updateCarById(this.carId, request).subscribe({
      complete: () => {
        this.formMessage = 'Car Update Successfully!';
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/cars']);
        }, 2000)
      }
    });
  }

  onFormSubmit() {
    if(this.form.invalid){
      this.formMessage = 'Please Fill the form correctly!';
      return
    }

    this.update();
  }
}
