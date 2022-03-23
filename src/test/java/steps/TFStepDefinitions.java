package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.BandCAddContactPage;
 
import pages.TestBase;

public class TFStepDefinitions extends TestBase {
	
	 
	BandCAddContactPage bandcaddcontactpage;

	@Before
	public void beforeRun() {
		initDriver();

		bandcaddcontactpage = PageFactory.initElements(driver,BandCAddContactPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() throws Throwable {
	     
	}

	

	@When("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String username)   {
		bandcaddcontactpage.enterUserName(username);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			 e.printStackTrace();
		}
	}


	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password)   {
		bandcaddcontactpage.enterPassword(password); 
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			 e.printStackTrace();
		}
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() {

		bandcaddcontactpage.clickSignInButton();

	}

	@When("^User should land on Dashboard page$")
	public void user_should_land_on_dashboard_page() throws Throwable {
		Assert.assertEquals("Dashboard- iBilling", bandcaddcontactpage.getPageTitle());
		takeScreenshot(driver);

	}
	
	@When("^User clicks on BankCash button$")
	public void user_clicks_on_bankcash_button() throws Throwable {
		bandcaddcontactpage.clickBankCashButton();
	}

	@Then("^User clicks on New Account button$")
	public void user_clicks_on_new_accounts_button() throws Throwable {
		bandcaddcontactpage.clickNewAccountButton();
	}
	
	@When("^User should land on Accounts page$")
	public void user_should_land_on_Accounts_page() throws Throwable {
		Assert.assertEquals("Accounts- iBilling",bandcaddcontactpage.getPageTitle());
		takeScreenshot(driver);
	}
		
	
	@When("^User enters Account Title as\"([^\"]*)\"$")
	public void user_enters_account_title_as(String accountTitle) throws Throwable {
		bandcaddcontactpage.enterAccountTitle(accountTitle);
	}

	@When("^User enters Description as \"([^\"]*)\"$")
	public void user_enters_description_as(String description) throws Throwable {
		bandcaddcontactpage.enterDescription(description);
	}

	@When("^User enters Initial Balance as\"([^\"]*)\"$")
	public void user_enters_initial_balance_as(String balance) throws Throwable {
		bandcaddcontactpage.enterInitalBalance(balance);
	}

	@When("^User enters Account Number as\"([^\"]*)\"$")
	public void user_enters_account_number_as(String accountNumber) throws Throwable {
		bandcaddcontactpage.enterAccountNumber(accountNumber);
	}

	@When("^User enters Contact as \"([^\"]*)\"$")
	public void user_enters_contact_as(String contact) throws Throwable {
		bandcaddcontactpage.enterContact(contact);
	}

	@When("^User enters Phone as \"([^\"]*)\"$")
	public void user_enters_phone_as(String phone) throws Throwable {
		bandcaddcontactpage.enterPhone(phone);
	}

	@When("^User enters Internet Banking URL as\"([^\"]*)\"$")
	public void user_enters_internet_banking_url_as(String url) throws Throwable {
		bandcaddcontactpage.enterURL(url);
	}
 
	@Then("^User clicks on submit button$")
	public void user_clicks_on_submit_button() throws Throwable {
		bandcaddcontactpage.clickSubmitButton();  
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
	     
	}
	@After
	public void tearDown() throws InterruptedException {
		Thread.sleep(3000);
		driver.close();
		driver.quit();

	}



}
