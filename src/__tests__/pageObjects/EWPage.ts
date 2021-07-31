import { By, until, WebDriver } from "selenium-webdriver";




export class EWPage {
    /** The WebDriver object */
    driver: WebDriver;
    /** URL of the Enter Wanted application */
    appUrl: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
    /** The application title on the page */
    appTitle: By = By.css('.cake');
    /** Webform inputs */
    headerInput: By = By.name('hdrInput');
    mkeInput: By = By.name('mkeInput');
    oaiInput: By = By.name('oriInput');
    nameInput: By = By.name('namInput');
    sexInput: By = By.name('sexInput');
    raceInput: By = By.name('racInput');
    heightInput: By = By.name('hgtInput');
    weightInput: By = By.name('wgtInput');
    hairInput: By = By.name('haiInput');
    offenseInput: By = By.name('offInput');
    warDateInput: By = By.name('dowInput');
    dlInput: By = By.name('olnInput');
    dlState: By = By.name('olsInput');
    dlExpDate: By = By.name('olyInput');
    licPlate: By = By.name('licInput');
    licState: By = By.name('lisInput');
    licYear: By = By.name('liyInput');
    /** Webform buttons */
    submitBtn: By = By.id('saveBtn');
    clearBtn: By = By.id('clearBtn');
    /** Error message list */
    errorMsgList: By = By.id('errorList');
    /** Valid query */
    validTitle: By = By.id('validHeader');
    result: By = By.name('queryBody');


    /**
     * This is the constructor for the SpecPage class
     * @param drive - The WebDriver object
     */
     constructor(drive: WebDriver) {
        this.driver = drive;
    }

    /**
     * This navigates to the homepage specified in the url string
     */
     async openApp() {
        await this.driver.get(this.appUrl);
        await this.driver.wait(until.elementLocated(this.appTitle));
        await this.driver.wait(
            until.elementIsVisible(await this.driver.findElement(this.appTitle))
        );
    }

    /** 
     * Fills input to the page element
     * @param locator - the input element
     * @param keys - the string to input
     */
     async sendKeys(locator: By, keys: string) {
        await this.driver.wait(until.elementLocated(locator));
        return this.driver.findElement(locator).sendKeys(keys);
    }

    /** Click action for page elements
     * @param locator - the element to click
     */
     async click(locator: By) {
        await this.driver.wait(until.elementLocated(locator));
        return (await this.driver.findElement(locator)).click();
    }

    /**
     * Returns the text inside of a given element
     * @param locator - the location of the element
     * @returns string of text
     */
    async getText(locator: By) {
        await this.driver.wait(until.elementLocated(locator));
        return (await this.driver.findElement(locator)).getText();
    }

    /**
     * Waits for the identified element to be located and visible before returning it
     * @param locator - the locator for the element
     * @returns - the WebElement (promise)
     */
     async findPageElement(locator: By) {
        await this.driver.wait(until.elementLocated(locator));
        let element = this.driver.findElement(locator);
        return element;
    }

    async pageElementVisible(locator: By) {
        await this.driver.wait(until.elementLocated(locator));
        await this.driver.wait(
            until.elementIsVisible(await this.driver.findElement(locator))
        );
    }

    async getErrors() {
        return this.getAttribute(this.errorMsgList, "innerText");
    }

    /**
     * Returns the specified attribute of an element after its available (visible and enabled)
     * @param locator - the locator for the element
     * @param attr - the string attribute
     * @returns - the text of the attribute of the element
     */
     async getAttribute(locator: By, attr: string) {
        let element = await this.findPageElement(locator);
        await this.driver.wait(until.elementIsVisible(element));
        return element.getAttribute(attr);
    }

    async getTitle() {
        return (await this.getText(this.appTitle));
    }

    async getAppUrl() {
        return (await this.driver.getCurrentUrl());
    }

    async quitApp() {
        await this.driver.quit();
    }

    async fillWithPeriodInput() {
        await this.sendKeys(this.headerInput, "abcdefghi");
        await this.sendKeys(this.mkeInput, "ab");
        await this.sendKeys(this.oaiInput, "abcd.fghi");
        await this.sendKeys(this.nameInput, "abc");
        await this.sendKeys(this.sexInput, "U");
        await this.sendKeys(this.raceInput, "a");
        await this.sendKeys(this.heightInput, "507");
        await this.sendKeys(this.weightInput, "110");
        await this.sendKeys(this.hairInput, "abc");
        await this.sendKeys(this.offenseInput, "abcde");
        await this.sendKeys(this.warDateInput, "10102019");
    }
}