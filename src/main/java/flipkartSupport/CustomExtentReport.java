package flipkartSupport;

import java.io.File;
import java.io.IOException;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

public class CustomExtentReport {

	private  ExtentHtmlReporter extentHtmlReporter;
	private ExtentReports extendReports;




	public CustomExtentReport(String reportlocation) {
		extentHtmlReporter = new ExtentHtmlReporter(new File(reportlocation));
		extendReports = new ExtentReports();
		extendReports.attachReporter(extentHtmlReporter);
	}



	public void createTest(io.cucumber.java.Scenario scenario, String screenShotPath) throws IOException, InterruptedException {
		String title=scenario.getName();

		if (scenario.getStatus() != null) {

			switch (scenario.getStatus()) {

			case PASSED:
				extendReports.createTest(scenario.getName()).pass(scenario.getName()+" Executed successfully");
				break;
			case FAILED:
				Thread.sleep(3000);
				extendReports.createTest(scenario.getName()).fail(scenario.getName()+" Execution failed").addScreenCaptureFromPath(screenShotPath+".png");
				break;
			default:
				extendReports.createTest(scenario.getName()).skip(scenario.getName()+"Execution skipped");
				break;
			}
		}

	}

	public void writeReport() {
		if (extendReports != null ) {
			extendReports.flush();
		}
	}





}





