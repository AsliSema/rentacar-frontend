import { ChangeDetectorRef, Component } from '@angular/core';
import { UserListItemDto } from '../../models/user-list-item-dto';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './users-list-table.component.html',
  styleUrl: './users-list-table.component.scss'
})
export class UsersListComponent {
  users !: UserListItemDto[];

  constructor(private userService: UserService, private change: ChangeDetectorRef){}

  ngOnInit(){
    this.getUserList();
  }

  getUserList(){
    this.userService.getUsers().subscribe((response)=>{
      this.users = response;

      this.change.markForCheck()
    })
  }

  deleteUser(userId: number){
    this.userService.deleteUserById(userId).subscribe({
      complete: () => {
        this.getUserList();
      }
    })
  }

}
