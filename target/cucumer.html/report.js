$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/flipkartFeatureFile/ApplicationLoginAndsearch.feature");
formatter.feature({
  "name": "Login to the application and Search for a product",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login to the flipkart application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "8144855487",
        "Selva@2000"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch flipkart application",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.launch_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to the flipkart application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"8144855487\" and \"Selva@2000\"",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.user_should_be_successfully_navigated_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.logout_from_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search for a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter \"\u003cproduct\u003e\" to search",
  "keyword": "When "
});
formatter.step({
  "name": "Product should be successfully searched",
  "keyword": "Then "
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "product"
      ]
    },
    {
      "cells": [
        "8144855487",
        "Selva@2000",
        "Mobilephone"
      ]
    },
    {
      "cells": [
        "8144855487",
        "Selva@2000",
        "noresult"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch flipkart application",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.launch_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "Enter \"8144855487\" and \"Selva@2000\"",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.user_should_be_successfully_navigated_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"Mobilephone\" to search",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.enter_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product should be successfully searched",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfully_searched()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.logout_from_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch flipkart application",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.launch_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "Enter \"8144855487\" and \"Selva@2000\"",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.user_should_be_successfully_navigated_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"noresult\" to search",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.enter_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product should be successfully searched",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfully_searched()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: No search result found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat flipkartPages.FlipkartProduct.validateSearch(FlipkartProduct.java:232)\r\n\tat flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfully_searched(LoginAndSearchStepDef.java:53)\r\n\tat ✽.Product should be successfully searched(file:///E:/SG/Downloads/Mariner%20Final%20code%20for%20second%20Poc/src/test/java/flipkartFeatureFile/ApplicationLoginAndsearch.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.logout_from_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search for a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter \"\u003cproduct\u003e\" to search",
  "keyword": "When "
});
formatter.step({
  "name": "Product should be successfully searched",
  "keyword": "Then "
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "product"
      ]
    },
    {
      "cells": [
        "Value_Username",
        "Value_Password",
        "Value_Product"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch flipkart application",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.launch_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter \"Value_Username\" and \"Value_Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.user_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.user_should_be_successfully_navigated_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Value_Product\" to search",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.user_enter_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product should be successfully searched",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfully_searched()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.logout_from_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/flipkartFeatureFile/WishlistAddandRemove.feature");
formatter.feature({
  "name": "Search for a product and add to wishlist or remove from wishlist",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search for a product and add to wishlist",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter \"\u003cproduct\u003e\" to search",
  "keyword": "When "
});
formatter.step({
  "name": "Product should be successfully searched",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on the product in the search result to view details",
  "keyword": "When "
});
formatter.step({
  "name": "Add the the product to the wishlist",
  "keyword": "And "
});
formatter.step({
  "name": "Product should be successfully added to wishlist",
  "keyword": "Then "
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "product"
      ]
    },
    {
      "cells": [
        "8144855487",
        "Selva@2000",
        "Mobilephone"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch flipkart application",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.launch_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a product and add to wishlist",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"8144855487\" and \"Selva@2000\"",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.user_should_be_successfully_navigated_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"Mobilephone\" to search",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.enter_to_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product should be successfully searched",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfully_searched()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the product in the search result to view details",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.click_on_the_product_in_the_search_result_to_view_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the the product to the wishlist",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.add_the_the_product_to_the_wishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product should be successfully added to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfully_added_to_wishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.logout_from_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search for a product and remove from wishlist",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "Navigate to userprofile and click on wishlist",
  "keyword": "When "
});
formatter.step({
  "name": "Click on the product from the wishlist to remove",
  "keyword": "And "
});
formatter.step({
  "name": "Product should be successfuly removed from the wishlist",
  "keyword": "Then "
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "8144855487",
        "Selva@2000"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch flipkart application",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.launch_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a product and remove from wishlist",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"8144855487\" and \"Selva@2000\"",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be successfully navigated to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.user_should_be_successfully_navigated_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to userprofile and click on wishlist",
  "keyword": "When "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.navigate_to_userprofile_and_click_on_wishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the product from the wishlist to remove",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.click_on_the_product_from_the_wishlist_to_remove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product should be successfuly removed from the wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfuly_removed_from_the_wishlist()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //div[@class\u003d\u0027_3oWply\u0027]/child::span\u0027 (tried for 8 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat flipkartPages.FlipkartProduct.waitUntil(FlipkartProduct.java:162)\r\n\tat flipkartPages.FlipkartProduct.validateWishlist(FlipkartProduct.java:279)\r\n\tat flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfuly_removed_from_the_wishlist(LoginAndSearchStepDef.java:83)\r\n\tat ✽.Product should be successfuly removed from the wishlist(file:///E:/SG/Downloads/Mariner%20Final%20code%20for%20second%20Poc/src/test/java/flipkartFeatureFile/WishlistAddandRemove.feature:25)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027_3oWply\u0027]/child::span\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ZS-DSK-0014\u0027, ip: \u0027192.168.0.226\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\SELVAM~1.ZUC\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:64468}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b62b9109025c529e6e2c1abfe9791fac\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027_3oWply\u0027]/child::span}\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat flipkartPages.FlipkartProduct.waitUntil(FlipkartProduct.java:162)\r\n\tat flipkartPages.FlipkartProduct.validateWishlist(FlipkartProduct.java:279)\r\n\tat flipkartStepDef.LoginAndSearchStepDef.product_should_be_successfuly_removed_from_the_wishlist(LoginAndSearchStepDef.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "flipkartStepDef.LoginAndSearchStepDef.logout_from_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});