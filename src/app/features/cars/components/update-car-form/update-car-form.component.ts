import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';
import { UpdateCarRequest } from '../../models/car-update-request.dto';
import { FormMessage } from '../../../auths/components/login-form/login-form.component';
import { GenericEntity } from '../../../../interfaces/genericEntity';
import { ModelService } from '../../../models/services/model.service';
import { CitiesService } from '../../../../shared/services/cities.service';

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

  formMessage: FormMessage = { success: null, error: null };


  selectModels: GenericEntity[] = [{ id: null, name: null }];


  citiesInTurkey: string[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private carService: CarService, 
    private change: ChangeDetectorRef,  
    private citiesService: CitiesService,
    private modelService: ModelService, 
    private router: Router){
  }

  ngOnInit(): void {
      this.createForm();
      this.getCar();
      this.getAllModels();
      this.citiesInTurkey = this.citiesService.getCities();
    }


  createForm() {
    this.form = this.formBuilder.group({
      plate: '',
      modelYear: '',
      state: '',
      dailyPrice: '',
      color: '',
      modelId: '',
      location: '',
      userId: ''
    })
  }

  getCar(){
    this.carService.getCarById(this.carId).subscribe((car)=>{
      console.log(car)
      this.form.patchValue({
        plate: car.plate,
        modelYear: car.modelYear,
        state: car.state,
        dailyPrice: car.dailyPrice,
        color: car.color,
        modelId: car.modelId,
        location: car.location
      })
    })
  }


  getAllModels() {
    this.modelService.getModels().subscribe((models)=>{
      this.selectModels = models.map(model => ({ id: model.id, name: model.name }));
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
      location: this.form.value.location
    }
    this.carService.updateCarById(this.carId, request).subscribe({
      error: (error)=>{
        console.log("error ",error)
        console.log(this.carId)
      },
      complete: () => {
        this.formMessage.success = 'Car Update Successfully!';
        this.change.markForCheck();

        setTimeout(()=>{
          this.router.navigate(['/management/cars']);
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
