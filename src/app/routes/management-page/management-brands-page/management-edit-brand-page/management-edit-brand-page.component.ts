import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditBrandFormComponent } from '../../../../features/brands/components/edit-brand-form/edit-brand-form.component';

@Component({
  selector: 'app-management-edit-brand-page',
  standalone: true,
  imports: [CommonModule, EditBrandFormComponent],
  templateUrl: './management-edit-brand-page.component.html',
  styleUrl: './management-edit-brand-page.component.scss'
})
export class ManagementEditBrandPageComponent implements OnInit{

  brandId !: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getBrandIdFromRoute();
  }


  getBrandIdFromRoute(){
    this.route.params.subscribe((params)=>{  
      const brandId = params['brandId'];
      if(!brandId) return;

      this.brandId = Number(brandId);
    })
  }

}
