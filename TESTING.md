## TESTING

### What is Software Testing

Software testing is an aspect of software development that involves the systematic process of evaluating a software application to verify that it meets specified requirements and functions as intended. The goal of software testing is to identify defects, errors, or gaps early in the development lifecycle, ensuring the software is reliable, secure, and delivers a positive user experience. Effective software testing helps reduce risks, improve quality, and build confidence before releasing the product to end users.

Software Testing approach is generally divided into two (2) broad categories:

- Manual Testing
- Automation Testing

### Principles of Manual Testing

Manual testing involves a human tester executing test cases without using automation tools. The tester interacts with the application the same way an end user would.

#### Core Principles

- Human judgment & intuition – Testers observe behaviour, usability, and visual issues that tools often miss.
- Exploratory testing – Testers can deviate from scripts to discover unexpected defects.
- User-centric validation – Focuses on how real users experience the system.
- Flexibility – Tests can be quickly adapted as requirements change.
- Early defect discovery – Useful when features are still evolving.

#### When Manual Testing Is Best Deployed

- Early stages of development (new features, MVPs).
- Exploratory, ad-hoc, and usability testing.
- One-off or short-term projects where automation setup cost isn’t justified.
- UI/UX validation (look, feel, layout, accessibility).
- When requirements are unstable or unclear.

#### Limitations

- Time-consuming and repetitive.
- Prone to human error.
- Not scalable for large regression suites.

### Principles of Automation Testing

Automated testing uses scripts and tools to execute test cases automatically and compare actual results with expected outcomes.

#### Core Principles

- Repeatability – Tests can be run multiple times with consistent results.
- Efficiency & speed – Large test suites run faster than manual execution.
- Accuracy – Reduces human error in repetitive tests.
- Early feedback – Enables quick detection of regressions.
- Maintainability – Well-designed tests are reusable and easy to update.

#### When Automated Testing Is Best Deployed

- Regression testing.
- Smoke and sanity testing.
- Performance and load testing.
- Data-driven testing.
- Stable features with well-defined requirements.
- CI/CD pipelines where fast feedback is critical.

#### Limitations

- Initial setup time and cost.
- Requires technical skills.
- Less effective for subjective areas like usability or visual design.
- Maintenance overhead when the UI or requirements change frequently.

| Aspect         | Manual Testing         | Automation Testing                       |
| -------------- | ---------------------- | ---------------------------------------- |
| Execution      | Human-driven           | Tool/script-driventools                  |
| Speed          | Slower                 | Faster                                   |
| Accuracy       | Prone to human error   | Highly accurate once scripts are stable  |
| Cost           | Lower initial cost     | Higher initial setup cost                |
| Maintenance    | Easy to adapt          | Requires more technical ability          |
| Best Used For  | Exploratory, usability | Regression, performance                  |
| Human Judgment | Required               | Minimal once automated                   |
| Tools Required | No tools required      | Requires automation frameworks and tools |

### Testing Approach: Manual Testing

Manual testing has been chosen for the Budget Expense Tracker project due to its scope and nature. This is a one-off project with a limited feature set, and the initial time and effort required to design, implement, and maintain an automation framework would outweigh its benefits.

Manual testing allows for quicker validation of features, flexibility in exploring edge cases, and effective verification of user flows without additional tooling overhead. It is particularly suitable for validating usability, data accuracy, and overall behaviour during the early and final stages of development.

Given the project’s size, timeline, and objectives, manual testing provides a practical and efficient approach to ensuring quality while keeping development and testing costs realistic.


# Manual Test Cases – Budget Expense Tracker

## 1. Currency Selection

| Test Case ID | Test Scenario | Test Steps | Expected Result | Remarks |
|-------------|---------------|------------|----------------|---------------|
| CUR-01 | Select GBP | Open app → Select GBP | All amounts should display with £ | PASS | 
| CUR-02 | Select USD | Change currency to USD | All amounts should display with $ | PASS |
| CUR-03 | Select EUR | Change currency to EUR | All amounts should display with € | PASS |
| CUR-04 | Change currency after setting budget | Set budget → Switch currency | Numeric value unchanged, symbol updates | PASS |
| CUR-05 | Currency persistence | Refresh page | Selected currency persists | PASS |

![select pound as currency by default](assets/documentation/images/select-pounds.png)
![select dollar as currency](assets/documentation/images/select-dollar.png)
![select euro as currency](assets/documentation/images/select-euro.png)

---

## 2. Set Budget

| Test Case ID | Test Scenario | Test Steps | Expected Result | Remarks |
|-------------|---------------|------------|----------------|---------------|
| BUD-01 | Set valid budget | Enter valid amount | Budget saved and displayed | PASS |
| BUD-02 | Decimal budget | Enter 250.75 | Decimal accepted | PASS |
| BUD-03 | Zero budget | Enter 0 | Validation error shown | PASS |
| BUD-04 | Negative budget | Enter -100 | Budget not accepted | PASS |
| BUD-05 | Update budget | Modify existing budget | Budget updates correctly | PASS |

![before add valid budget](assets/documentation/images/before-add-budget.png)
![after add valid budget](assets/documentation/images/confirm-add-budget.png)
![add decimal budget](assets/documentation/images/add-decimal-budget.png)
![before add zero budget](assets/documentation/images/add-zero-budget.png)
![add negative budget](assets/documentation/images/add-negative-budget.png)
![before modify budget](assets/documentation/images/before-modify-budget.png)
![after modify budget](assets/documentation/images/after-modify-budget.png)

---

## 3. Add Expense

| Test Case ID | Test Scenario | Test Steps | Expected Result | Remarks |
|-------------|---------------|------------|----------------|---------------|
| EXP-01 | Add valid expense | Enter title and amount | Expense added successfully | PASS |
| EXP-02 | Empty title | Leave title blank | Validation error shown | PASS |
| EXP-03 | Negative amount | Enter -50 | Expense not added | PASS |
| EXP-04 | Expense exceeds budget | Add high expense | negative balance | PASS |
| EXP-05 | Multiple expenses | Add several expenses | All displayed in history | PASS |

![add valid expense](assets/documentation/images/add-valid-expense.png)
![add blank title expense](assets/documentation/images/no-title-expense.png)
![add negative expense](assets/documentation/images/add-negative-expense.png)
![add high expense](assets/documentation/images/add-high-expense.png)
![add multiple expenses](assets/documentation/images/add-multiple-expense.png)

---

## 4. Budget Overview

| Test Case ID | Test Scenario | Test Steps | Expected Result | Remarks |
|-------------|---------------|------------|----------------|---------------|
| OVR-01 | Budget only | Set budget | Expenses = 0, budget left = budget| PASS |
| OVR-02 | With expenses | Add expenses | Totals update correctly| PASS |
| OVR-03 | After deletion | Delete an expense | Totals recalculate| PASS |
| OVR-04 | Currency change | Switch currency | Currency symbols update| PASS |

![add budget only overview](assets/documentation/images/add-budget-only-overview.png)
![add budget expense overview](assets/documentation/images/add-budget-expense-overview.png)
![before remove expenses overview](assets/documentation/images/add-expenses-overview.png)
![after remove expenses overview](assets/documentation/images/remove-expense-overview.png)
![switch currency overview](assets/documentation/images/switch-currency-overview.png)

---

## 5. Expense History

| Test Case ID | Test Scenario | Test Steps | Expected Result | Remarks |
|-------------|---------------|------------|----------------|---------------|
| HIS-01 | View history | Add multiple expenses | All expenses listed| PASS |
| HIS-02 | Persistence | Refresh page | History persists| PASS |
| HIS-03 | Expense order | Add expenses | Correct order displayed| PASS |

![before adding next expense order & list](assets/documentation/images/before-add-next-expense.png)
![after adding last expense - order](assets/documentation/images/after-add-last-expense.png)

---

## 6. Remove Expense

| Test Case ID | Test Scenario | Test Steps | Expected Result | Remarks |
|-------------|---------------|------------|----------------|---------------|
| DEL-01 | Delete expense | Click remove | Expense removed| PASS |
| DEL-02 | Update overview | Delete expense | Totals update| PASS |
| DEL-03 | Delete last expense | Remove final item | Expense list empty| PASS |

![before remove expenses](assets/documentation/images/before-remove-expense.png)
![after remove expenses ](assets/documentation/images/after-use-remove-button.png)
![after remove last expenses](assets/documentation/images/add-expenses-overview.png)

---

## 7. Reset All Data

| Test Case ID | Test Scenario | Test Steps | Expected Result | Remarks |
|-------------|---------------|------------|----------------|---------------|
| RES-01 | Reset data | Click Reset | Budget and expenses cleared| PASS |
| RES-02 | Persistence after reset | Refresh page | Data remains cleared| PASS |
| RES-03 | Reset confirmation | Click Reset | Confirmation shown (if implemented)| PASS |

![reset alert](assets/documentation/images/reset-all-check.png)
![reset confirmation](assets/documentation/images/reset-all-confirm.png)
---

## 8. Data Persistence

| Test Case ID | Test Scenario | Test Steps | Expected Result | Remarks |
|-------------|---------------|------------|----------------|---------------|
| PER-01 | Auto-save | Add budget and expenses | Data saved automatically| PASS |
| PER-02 | Reopen app | Close and reopen app | Data restored| PASS |
| PER-03 | Currency persistence | Change currency → reload | Currency retained| PASS |

![data persisitence](assets/documentation/images/data-persistence.mp4)

---

## 9. Responsiveness Testing

| Test Case ID | Device | Test Steps | Expected Result | Remarks |
|-------------|--------|------------|----------------|---------------|
| RES-UI-01 | Desktop | Open app | Layout displays correctly| PASS |
| RES-UI-02 | Tablet | Resize to tablet width | No overlap or cutoff| PASS |
| RES-UI-03 | Mobile | Resize to mobile width | Readable stacked layout| PASS |
| RES-UI-04 | Mobile interaction | Tap buttons | Buttons are clickable| PASS |
| RES-UI-05 | Window resize | Resize browser | UI adjusts smoothly| PASS |

![desktop view](assets/documentation/images/desktop-view.png)
![tablet view](assets/documentation/images/tablet-view.png)
![mobile views](assets/documentation/images/mobile-views.png)
![mobile interaction](assets/documentation/images/mobile-interaction.mp4)
![browser resize](assets/documentation/images/resize-browser.mp4)

---

## Validator Testing
  ### HTML
  No error or warnings were found when index.html was passed through the official W3C validator

  ![HTML Validation](assets/documentation/images/html-validation.png)

   ### CSS
  No errors found, but a few warnings were found when style.css was passed through the official W3C (Jigsaw) validator.
    
  ![CSS Validation](assets/documentation/images/css-validation.mp4)
  ![CSS warnings](assets/documentation/images/css-warnings.png)


## Lighthouse report

  - Using lighthouse in devtools i confirmed that the website is perfroming well, and accessible, colours and fonts chosen are contrasting and readable
  
  ![Lighthouse Report](assets/documentation/images/lighthouse-report.png)


## Bugs

+ ### Solved bugs
   
       
    1. Budget form submission triggering expense validation and the expense form completely broken
        
        *Solution:* Corrected the wrong use of 'add-budget-container form' class by replacing it with the right class - 'add-expense-container form'
    2. 'Budget left' math error from parsing the 'total budget' without 'total expense'
       
        *Solution:* Subtract 'budgetData.totalExpenses' from 'budgetAmount'
    3. Typo errors - typing 'budgetData.expense' instead of the 'budgetData.expenses' causing a failure in adding expense
       
        *Solution:* Corrected the typo error to fix the bug
    4. Validation errors in HTML document with trailing '/'
    
        *Solutions:* Remove the the trailing '/'.
    5. Validation errors in CSS style with unneccessary '0' padding
        *Solutions:* Remove the the padding '0'
    
    

+ ### Unsolved bugs
    - When user adds some expenses without addding budget and then remove the expense, the 'budget left' in the overview shows -0.00
    [Unresolved bug](assets/documentation/images/unresolved-bug.png)