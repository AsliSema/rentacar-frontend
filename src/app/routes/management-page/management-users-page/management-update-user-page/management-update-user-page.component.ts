import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UpdateUserFormComponent } from '../../../../features/users/components/update-user-form/update-user-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-update-user-page',
  standalone: true,
  imports: [CommonModule, UpdateUserFormComponent],
  templateUrl: './management-update-user-page.component.html',
  styleUrl: './management-update-user-page.component.scss'
})
export class ManagementUpdateUserPageComponent implements OnInit{

  userId !: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getUserIdFromRoute();
  }

  getUserIdFromRoute(){
    this.route.params.subscribe((params)=>{
      const userId = params['userId'];
      if(!userId) return;

      this.userId = Number(userId);
    })
  }

}
