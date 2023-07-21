import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website',
  ];
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.dataSource.data = res;
    });
  }
}
