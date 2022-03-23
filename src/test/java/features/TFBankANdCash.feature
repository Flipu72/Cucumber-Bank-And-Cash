 @AddContactFeature @Test2
 Feature: Techfios Bank and Cash Add Contact functionality Validation
 
 
 @Scenario1
 Scenario:User should be able to create new account from Bank and Cash
 
 Given User is on the techfios login page 
	When User enters the username as "demo@techfios.com" 
	When User enters the password as "abc123" 
	When  User clicks on signin button
	Then User should land on Dashboard page 
	When User clicks on BankCash button
	Then User clicks on New Account button 
	Then User should land on Accounts page
	When User enters Account Title as"Business"  
  When User enters Description as "Checking"  
  When User enters Initial Balance as"25000.00"  
  When User enters Account Number as"000111222"   
  When User enters Contact as "Mark Doe"   
  When User enters Phone as "817252"   
  When User enters Internet Banking URL as"bankurl" 
	Then User clicks on submit button 
	Then User should be able to validate account created successfully