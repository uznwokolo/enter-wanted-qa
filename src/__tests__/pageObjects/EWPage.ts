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
    
}