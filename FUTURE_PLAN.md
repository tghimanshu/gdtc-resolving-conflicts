# Future Plan (Phase 2)

This document outlines the proposed enhancements and features for the next phase of development for the "Resolving Conflicts" application. Phase 1 focused on setting up the basic structure, user listing, and initial profile components.

## Proposed Enhancements

### 1. Enhanced User Profile
- **Dynamic Profile Routing**: Instead of static profile components (like `himanshu-profile`), implement a dynamic route (e.g., `/profile/:id`) that fetches and displays details for a specific user based on their ID.
- **Detailed User View**: Show more information about the user, such as their address and company details, which are available in the API but currently not displayed.

### 2. User Interaction
- **Search Functionality**: Add a search bar to the Users list to filter users by name or email.
- **Pagination**: Implement pagination for the user list if the dataset grows.
- **Sorting**: Allow sorting of the user table by different columns (Name, Username, Email, etc.).

### 3. State Management
- **RxJS/NgRx**: As the application grows, consider implementing more robust state management to handle user data and caching, reducing the need for redundant API calls.

### 4. UI/UX Improvements
- **Responsive Design**: Ensure the table and other components are fully responsive on mobile devices.
- **Loading Indicators**: Add a loading spinner or progress bar while data is being fetched from the API.
- **Error Handling**: Implement global error handling and display user-friendly error messages if the API fails.

### 5. Testing
- **E2E Testing**: Add Cypress or Playwright for End-to-End testing.
- **Increased Coverage**: Increase unit test coverage for all components and services, ensuring edge cases are handled.

### 6. Code Quality
- **Linting**: Enforce stricter linting rules (ESLint) to maintain code quality.
- **CI/CD**: Set up a Continuous Integration/Continuous Deployment pipeline to automatically run tests and build the application on commit.
