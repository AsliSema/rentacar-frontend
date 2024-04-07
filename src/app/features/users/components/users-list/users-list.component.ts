import { ChangeDetectorRef, Component } from '@angular/core';
import { UserListItemDto } from '../../models/user-list-item-dto';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
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

}
