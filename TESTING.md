## TESTING

## TABLE OF CONTENTS

- What is Software Testing
- Type of Software Testing
- Levels of Software Testing
- Difference between Automation & Manual testing
- Testing Approach: Manual Testing

### What is Software Testing

Software testing is an aspect of software development that involves the systematic process of evaluating a software application to verify that it meets specified requirements and functions as intended. The goal of software testing is to identify defects, errors, or gaps early in the development lifecycle, ensuring the software is reliable, secure, and delivers a positive user experience. Effective software testing helps reduce risks, improve quality, and build confidence before releasing the product to end users.

Just like software development, sofware testing is a cycle, it involves the following processes:

1. Analysis - understanding of the software requirement to determine what and how to test
2. Planning - defines the overall approach, scope, resources, timeline, and testing objectives
3. Design - test scenarios, test cases, test data, automation script(if applicable) are created
4. Execution - execation of test cases (or test scripts) on the software under test
5. Reporting - compare actual with expected test result from execution and report to stakeholders
6. Closure - conclude on test, after acceptance criteria set in planning phase is met.

### Types of Software Testing

Software testing can be broadly categorized into functional and non-functional testing, along with several supporting approaches.

#### Functional Testing

Functional testing focuses on verifying that the software behaves according to business and functional requirements.

Common types include:

- Unit Testing – Tests individual components or functions in isolation.
- Integration Testing – Verifies interaction between integrated components or systems.
- System Testing – Validates the complete application with the aim of breaking the software.
- Acceptance Testing - Validates the application just to ensure it works as expected

Other types of testing include:

- Regression Testing – Ensures new changes do not break existing functionality.
- Smoke Testing – Performs basic checks to confirm the application stability and further testing.
- Sanity Testing – Confirms that specific functionality works after minor changes.

#### Non-Functional Testing

Non-functional testing evaluates how well the system performs rather than what it does.

Common types include:

- Performance Testing – Assesses system responsiveness and stability under load.
- Load Testing – Measures behaviour under expected user traffic.
- Stress Testing – Evaluates system limits beyond normal conditions.
- Security Testing – Identifies vulnerabilities and protects against threats.
- Usability Testing – Ensures the system is easy to use and user-friendly.
- Compatibility Testing – Checks behaviour across browsers, devices, and platforms.

#### Other Testing Approaches

- Static Testing - Verifies test documents without execution of application under test.
- Dynamic Testing -Validates written test cases/scripts on the application under test.
- Exploratory Testing – Testers explore the application without predefined scripts.
- Acceptance Testing (UAT) – Confirms the software meets business and user expectations.
- End-to-End Testing – Validates complete user workflows from start to finish.

### Levels of Software Testing

Levels of testing describe when and where testing occurs in the software development lifecycle Testing levels usually relates to functional testing and its dynamic in nature because it involves validating the application under test.

#### The following are levels of testing:

- Unit Testing - Tests individual units or functions of code, usually performed by developers.
- Integration Testing - Tests interactions between multiple components or services.
- System Testing - Tests the fully integrated application in an environment similar to production.
- Acceptance Testing - Conducted by users to ensuren the system is ready for release.

### Difference between Automation & Manual Testing

Manual testing involves testers executing test cases by hand without the use of automation tools. It is useful for exploratory testing, usability testing, and scenarios that require human judgment.
Automation testing, on the other hand, uses scripts and tools to execute tests automatically, making it efficient for repetitive tasks, regression testing, and large test suites. While automation improves speed and consistency, manual testing remains essential for areas where human insight is critical.

| Aspect         | Manual Testing                               | Automation Testing                                   |
| -------------- | -------------------------------------------- | ---------------------------------------------------- |
| Execution      | Test cases are executed manually by testers  | Test cases are executed using scripts and tools      |
| Speed          | Slower, as each test is performed by a human | Faster, especially for repetitive tests              |
| Accuracy       | Prone to human error                         | Highly accurate once scripts are stable              |
| Cost           | Lower initial cost                           | Higher initial setup cost                            |
| Maintenance    | Easy to adapt for small changes              | Requires script maintenance when application changes |
| Best Used For  | Exploratory, usability, ad-hoc testing       | Regression, smoke, performance testing               |
| Human Judgment | Required                                     | Minimal once automated                               |
| Tools Required | No tools required                            | Requires automation frameworks and tools             |

### Testing Approach: Manual Testing

Manual testing has been chosen for the Budget Expense Tracker project due to its scope and nature. This is a one-off project with a limited feature set, and the initial time and effort required to design, implement, and maintain an automation framework would outweigh its benefits.

Manual testing allows for quicker validation of features, flexibility in exploring edge cases, and effective verification of user flows without additional tooling overhead. It is particularly suitable for validating usability, data accuracy, and overall behaviour during the early and final stages of development.

Given the project’s size, timeline, and objectives, manual testing provides a practical and efficient approach to ensuring quality while keeping development and testing costs realistic.
