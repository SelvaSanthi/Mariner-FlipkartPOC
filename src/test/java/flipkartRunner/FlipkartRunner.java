package flipkartRunner;

import java.io.IOException;
import java.util.Date;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.reporting.CucumberDetailedResults;
import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;

import flipkartSupport.PropertyReader;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(features="src/test/java/flipkartFeatureFile/" , 
glue="flipkartStepDef",
monochrome=true,
//dryRun=true,
//tags= {"@RegressionTest"},
//strict = true,
plugin= {"json:target/cucumber-report.json","html:target/cucumer.html"})



public class FlipkartRunner extends flipkartPages.FlipkartProduct {

	@BeforeClass
	public static void setUp() throws IOException {
		String Browser=PropertyReader.readProperty("Browser");

		if (Browser.equalsIgnoreCase("Chrome")) {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\chromedriver.exe");
		} else if (Browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\geckodriver.exe");
		}	

	}









	@AfterClass
	public static void tearDown() throws Exception {


		Date date= new Date();

		CucumberDetailedResults dresult= new CucumberDetailedResults();
		dresult.setOutputDirectory("src\\reports\\"+sdf.format(date));
		dresult.setOutputName(sdf.format(date));
		dresult.setSourceFile("target\\cucumber-report.json");
		dresult.setScreenShotLocation("src\\reports\\"+sdf.format(date));
		dresult.execute();

		CucumberResultsOverview result_Oview = new CucumberResultsOverview();
		result_Oview.setOutputDirectory("src\\reports\\"+sdf.format(date));
		result_Oview.setOutputName(sdf.format(date));
		result_Oview.setSourceFile("target\\cucumber-report.json");
		result_Oview.execute();

	}



}
