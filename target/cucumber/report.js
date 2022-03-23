$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TFBankANdCash.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios Bank and Cash Add Contact functionality Validation",
  "description": "",
  "id": "techfios-bank-and-cash-add-contact-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AddContactFeature"
    },
    {
      "line": 1,
      "name": "@Test2"
    }
  ]
});
formatter.before({
  "duration": 9227016000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to create new account from Bank and Cash",
  "description": "",
  "id": "techfios-bank-and-cash-add-contact-functionality-validation;user-should-be-able-to-create-new-account-from-bank-and-cash",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters the username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters the password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on BankCash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on New Account button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should land on Accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters Account Title as\"Business\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Description as \"Checking\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Initial Balance as\"25000.00\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Account Number as\"000111222\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters Contact as \"Mark Doe\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters Phone as \"817252\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters Internet Banking URL as\"bankurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TFStepDefinitions.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 352949200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "TFStepDefinitions.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3721671300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "TFStepDefinitions.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3266857800,
  "status": "passed"
});
formatter.match({
  "location": "TFStepDefinitions.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 3632109900,
  "status": "passed"
});
formatter.match({
  "location": "TFStepDefinitions.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 317927500,
  "status": "passed"
});
formatter.match({
  "location": "TFStepDefinitions.user_clicks_on_bankcash_button()"
});
formatter.result({
  "duration": 1094127400,
  "status": "passed"
});
formatter.match({
  "location": "TFStepDefinitions.user_clicks_on_new_accounts_button()"
});
formatter.result({
  "duration": 1803296700,
  "status": "passed"
});
formatter.match({
  "location": "TFStepDefinitions.user_should_land_on_Accounts_page()"
});
formatter.result({
  "duration": 274635000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business",
      "offset": 29
    }
  ],
  "location": "TFStepDefinitions.user_enters_account_title_as(String)"
});
formatter.result({
  "duration": 348307400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 28
    }
  ],
  "location": "TFStepDefinitions.user_enters_description_as(String)"
});
formatter.result({
  "duration": 274886500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000.00",
      "offset": 31
    }
  ],
  "location": "TFStepDefinitions.user_enters_initial_balance_as(String)"
});
formatter.result({
  "duration": 277509600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "000111222",
      "offset": 30
    }
  ],
  "location": "TFStepDefinitions.user_enters_account_number_as(String)"
});
formatter.result({
  "duration": 349680200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark Doe",
      "offset": 24
    }
  ],
  "location": "TFStepDefinitions.user_enters_contact_as(String)"
});
formatter.result({
  "duration": 240391100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "817252",
      "offset": 22
    }
  ],
  "location": "TFStepDefinitions.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 241349800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankurl",
      "offset": 36
    }
  ],
  "location": "TFStepDefinitions.user_enters_internet_banking_url_as(String)"
});
formatter.result({
  "duration": 318464200,
  "status": "passed"
});
formatter.match({
  "location": "TFStepDefinitions.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 2278036200,
  "status": "passed"
});
formatter.match({
  "location": "TFStepDefinitions.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 41500,
  "status": "passed"
});
formatter.after({
  "duration": 4455092400,
  "status": "passed"
});
});