import { EWPage } from "./pageObjects/EWPage";
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder()
                            .withCapabilities(Capabilities.chrome())
                            .build();

const ewp = new EWPage(driver);

const errorI = "The \"Header\" field should be between 9 and 19";
const errorP = "The \"Originating Agency Identifier\" field can only include characters from the English Alphabet or numeric characters.";

describe("Testing the Enter Wanted app...", () => {
    beforeEach(async () => {
        await ewp.openApp();
    });
    test("it shows the correct title and url", async () => {
        let apt = await ewp.getTitle();
        let wsu = await ewp.getAppUrl();
        expect(apt).toBe("Enter Wanted");
        expect(wsu).toBe(ewp.appUrl);
    })
    // UN4DL-36 -> https://dmutah.atlassian.net/browse/UN4DL-36
    test("submitting an incomplete form produces errors", async () => {
        await ewp.sendKeys(ewp.headerInput, "f");
        await ewp.click(ewp.submitBtn);
        await ewp.pageElementVisible(ewp.errorMsgList);
        expect(await ewp.getErrors()).toContain(errorI);
    })
    // UN4DL-34 -> https://dmutah.atlassian.net/browse/UN4DL-34
    test("periods not allowed in form submission", async () => {
        await ewp.fillWithPeriodInput();
        await ewp.click(ewp.submitBtn);
        await ewp.pageElementVisible(ewp.errorMsgList);
        expect(await ewp.getErrors()).toContain(errorP);
    })
    afterAll(async () => {
        await ewp.quitApp();
    });
})