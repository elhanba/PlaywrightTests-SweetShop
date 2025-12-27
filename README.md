# PlaywrightTests-SweetShop
I have implemented 5 automated test cases for the Sweet Shop application using Playwright and the Page Object Model (POM) design pattern.

## Implemented Test Cases

1.  **TC_01: Verify User Login (Positive)**
    *   **Status:**  Passed
    *   **Description:** Verifies that a user can login (the app accepts test credentials).
2.  **TC_02: Verify User Login (Negative)**
    *   **Status:**  Failed (Expected Behavior)
    *   **Description:** Verifies that invalid credentials show an error.
    *   **Result:** The application **accepted** invalid credentials (`wrongpassword`) and logged the user in. This is a BUG in the application relative to the test case requirements.
3.  **TC_03: Add Item to Basket (Positive)**
    *   **Status:**  Passed
    *   **Description:** Verifies adding an item increments the basket counter.
4.  **TC_05: Empty Checkout Submission (Negative)**
    *   **Status:**  Passed
    *   **Description:** Verifies that submitting an empty checkout form shows validation errors.
5.  **TC_10: Navigation Menu (Usability)**
    *   **Status:**  Passed
    *   **Description:** Verifies navigation links work correctly.
