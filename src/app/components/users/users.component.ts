import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatTableDataSource } from '@angular/material/table';

/**
 * Interface representing a User.
 * Defines the structure of the user object fetched from the API.
 */
export interface User {
  /** The unique identifier of the user. */
  id: number;
  /** The full name of the user. */
  name: string;
  /** The username of the user. */
  username: string;
  /** The email address of the user. */
  email: string;
  /** The phone number of the user. */
  phone: string;
  /** The website URL of the user. */
  website: string;
}

/**
 * Component to display a list of users.
 * Uses the UsersService to fetch data and displays it in a Material table.
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  /**
   * Data source for the Material table.
   * Holds the list of users to be displayed.
   */
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  /**
   * Columns to be displayed in the table.
   */
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website',
  ];

  /**
   * Initializes the UsersComponent.
   *
   * @param userService - The service used to fetch user data.
   */
  constructor(private userService: UsersService) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Fetches the users from the service and updates the table data source.
   */
  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.dataSource.data = res;
    });
  }
}
