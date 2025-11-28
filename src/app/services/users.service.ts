import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/users/users.component';

/**
 * Service to handle user-related operations.
 * This service is responsible for fetching user data from external APIs.
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   * Initializes the UsersService.
   *
   * @param http - The HttpClient used to perform HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches the list of users from the API.
   *
   * @returns An Observable containing an array of User objects.
   */
  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
