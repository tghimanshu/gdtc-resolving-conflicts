import { Component } from '@angular/core';

/**
 * Root component of the application.
 * Acts as the main container for the application views.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * The title of the application.
   */
  title = 'resolving-conflicts';

  /**
   * Initializes the AppComponent.
   */
  constructor() {}
}
