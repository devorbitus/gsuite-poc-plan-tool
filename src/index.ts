
const ADDON_NAME = "POC Plan Generator";
const LAYOUT_TO_USE_ID = "3_Title and Content_1";
const HEADER_LEFT = 26.127243307086616;
const HEADER_TOP = 4.251968503937008;
const HEADER_WIDTH = 667.8425196850394;
const HEADER_HEIGHT = 48.99212598425197;
const HEADER_FONT_FAMILY = "Nunito";
const HEADER_FONT_SIZE = 21;
const HEADER_PREFIX = "Documentation and Considerations for Session #";
const LOGISTICS_TITLE_TEXT = "Logistics & Tips";
const LOGISTICS_BODY_FONT_SIZE = 12;
const LOGISTICS_SUB_ITEM_BODY_FONT_SIZE = 10;
const BODY_FONT_FAMILY = "Nunito";
const BODY_FONT_SIZE = 12;
const BODY_LINK_FONT_SIZE = 9;
const BODY_LEFT = 26.12732224409449;
const BODY_TOP = 68.19960314960629;
const BODY_WIDTH = 667.8425196850394;
const BODY_HEIGHT = 283.46456692913387;
const CIRCLE_SHAPE_WIDTH_AND_HEIGHT = 13.582677165354331;
const MNDA_SIGNED_EMOJI = "✅";
const BODY_WARNING_CUSTOM_COLOR = "#071724";
const SESSION_PLAN_TASKS_FIRST_LEFT = 0;
const SESSION_PLAN_TASKS_LAST_LEFT = 600;
const SESSION_PLAN_TASKS_TOP = 120;
const SESSION_PLAN_TASKS_WIDTH = 110;
const SESSION_PLAN_TASKS_HEIGHT = 125;
const SESSION_PLAN_TASKS_GATEWAY_PREFIX = "Intro to Akeyless\nGateway Config\nRBAC, ";
const SESSION_PLAN_TITLE = "Pilot Plan - Proposed Schedule";
const SESSION_PLAN_SUMMARY_POSTFIX_TOPIC = "Summary";
const SESSION_PLAN_SUMMARY_POSTFIX_CHOICES = "+ Q&A";
const SESSION_PLAN_SHAPE_FIRST_LEFT = 50;
const SESSION_PLAN_SHAPE_LAST_LEFT = 656.4912196850394;
const SESSION_PLAN_SHAPE_TOP = 248.597;
const SESSION_PLAN_SHAPE_WIDTH = CIRCLE_SHAPE_WIDTH_AND_HEIGHT;
const SESSION_PLAN_SHAPE_HEIGHT = CIRCLE_SHAPE_WIDTH_AND_HEIGHT;
const SESSION_PLAN_SHAPE_COLOR_HEX_STRING = "#0F8EC5";
const SESSION_PLAN_DATE_FIRST_LEFT = 26.73925118110236;
const SESSION_PLAN_DATE_LAST_LEFT = 633.3061803149607;
const SESSION_PLAN_DATE_TOP = 270.4874507874016;
const SESSION_PLAN_DATE_WIDTH = 59.952755905511815;
const SESSION_PLAN_DATE_HEIGHT = 65.45669291338582;
const SESSION_PLAN_DATE_DEFAULT_FONT_SIZE = 9;
const SESSION_PLAN_DATE_MINUTES_FONT_SIZE = 6;
const SESSION_PLAN_DATE_TEXT = "90 minutes";
const SESSION_PLAN_GATEWAY_FONT_SIZE = 9;
const SESSION_PLAN_TOPIC_FONT_SIZE = 10;
const SESSION_PLAN_CHOICES_FONT_SIZE = 8;
const SESSION_PLAN_PROPERTY_SLIDE_ID = "sessionSlideId";
const SESSION_PLAN_PROPERTY_TASK_SHAPES_ID = "taskShapeIdsJsonString";
const SESSION_PLAN_PROPERTY_CIRCLE_SHAPES_ID = "circleShapeIdsJsonString";
const SESSION_PLAN_PROPERTY_DATE_SHAPES_ID = "datesShapeIdsJsonString";
const SESSION_PLAN_DATE_PREFIX = "Session #";
const SUMMARY_SLIDE_TITLE = "POC Requirements Summary";
const SUMMARY_SLIDE_TABLE_LEFT = 26.12795275590551;
const SUMMARY_SLIDE_TABLE_TOP = 53.24409448818898;
const SUMMARY_SLIDE_TABLE_WIDTH = 685;
const SUMMARY_SLIDE_TABLE_HEIGHT = 320;
const SUMMARY_SLIDE_TABLE_DEFAULT_ROWS = 1;
const SUMMARY_SLIDE_TABLE_DEFAULT_COLUMNS = 3;
const SUMMARY_SLIDE_TABLE_HEADER_ROW_COLOR = "#0089D0";
const SUMMARY_SLIDE_TABLE_ROWS_COLOR = "#DEEAF6";
const SUMMARY_SLIDE_TABLE_HEADER_COL_1_TEXT = "Requirements";
const SUMMARY_SLIDE_TABLE_HEADER_COL_2_TEXT = "Description (examples inline)";
const SUMMARY_SLIDE_TABLE_HEADER_COL_3_TEXT = "Priority";
const SUMMARY_SLIDE_TABLE_HEADER_ROW_INDEX = 0;
const SUMMARY_SLIDE_TABLE_HEADER_FONT_SIZE = 9;
const SUMMARY_SLIDE_TABLE_ROW_FONT_SIZE = 9;
const COLUMN_1_INDEX = 0;
const COLUMN_2_INDEX = 1;
const COLUMN_3_INDEX = 2;

const SESSION_PLAN_TYPE = Object.freeze({
  TASK: Symbol("task"),
  SHAPE: Symbol("shape"),
  DATE: Symbol("date")
});

const SHEET_DATA_WORKSHEET_ID = "1O0cmSxdBWcSuvphnh3j3Bf_c5_zfV-M-riqqP4oDc90";
const GOOGLE_SHEET_REFERENCE_NAME = "ReferenceDocs";
const SESSION_ITEM_START = " - ";
const SESSION_ONE_TITLE_ONE = "Gateway Configuration";
const SESSION_ONE_TITLE_ONE_URLS = [
  "https://docs.akeyless.io/docs/install-and-configure-the-gateway"
];
const SESSION_ONE_TITLE_ONE_WARNINGS = ["A deployment target will need to be selected for the gateway, either a kubernetes cluster (helm)\n\tor something like a VM with docker and docker-compose already installed"];
const SESSION_ONE_TITLE_TWO = "Gateway resource configuration";
const SESSION_ONE_TITLE_TWO_URLS = [
  "https://docs.akeyless.io/docs/api-gateway-network-connectivity"
];
const SESSION_ONE_TITLE_TWO_WARNINGS = ["Required outgoing network access for the gateway should be available"];
const CHAR_NEW_LINE = "\n";
const CHAR_CARRIAGE_RETURN = "\r";
const CHAR_TAB = "\t";
const EMPTY_SESSION_TOPIC = "none";
const POC_FILE_NAME_PREFIX = "Akeyless Vault Platform - POC Plan - ";
const POC_PLAN_SHARED_FOLDER_ID = "1cMWlKWbxaPWMs2WWtDkcLdh5HjB8-SJJ";
const POC_PLAN_BLANK_TEMPLATE_WITH_LAYOUT = "1YT64KHQL8KPFp8DT2m1ze_ucGa5uS8Z42_DR_nRqTho";

const LOGISTICS_PAGE_OBJECT = {
    "title": "Logistics & Tips",
    "logisticsItems": [
        {
            "item": "1. MNDA",
            "subItem": ""
        },
        {
            "item": "2. Gather the Team",
            "subItem": "Gather your A team to participate in the sessions"
        },
        {
            "item": "3. Questions during the pilot period",
            "subItem": "Recommended using a dedicated Slack channel - we can all collaborate."
        },
        {
            "item": "4. Let’s record the POC sessions",
            "subItem": "To make sure that everyone is aligned"
        },
        {
            "item": "5. Commercial discussion",
            "subItem": "In parallel (number of Clients, SLA - TBD)"
        },
    ]
};

/**
 * @OnlyCurrentDoc
 *
 * The above comment directs Apps Script to limit the scope of file
 * access for this add-on. It specifies that this add-on will only
 * attempt to read or modify the files in which the add-on is used,
 * and not all of the user's files. The authorization request message
 * presented to users will reflect this limited scope.
 */

/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onOpen trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode.
 */
const onOpen = (e) => {
    let ui = SlidesApp.getUi();
    ui.createMenu('POC Plan Automation')
    .addItem('Open POC Plan Generator', 'showSidebar')
    .addItem('Duplicate Logo to other slides', 'copyLogoToAllSlides')
    .addItem('Remove Existing Logos from all Slides', 'removeLogosFromSlides')
    .addItem('Remove All Slides', 'removeAllSlides')
    // .addItem('Test', 'prepSessionTextObjects')
    .addToUi();
}

/**
 * Runs when the add-on is installed.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onInstall trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode. (In practice, onInstall triggers always
 *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
 *     AuthMode.NONE.)
 */
const onInstall = (e) => {
    onOpen(e);
}

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 */
const showSidebar = () => {
    var html = HtmlService.createTemplateFromFile('src/sidebar').evaluate().setTitle(ADDON_NAME).setWidth(400);
    SlidesApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showSidebar(html);
}

/**
 * Parses the file with the given file name. This is used to inject CSS and Javascript
 * in an HTML file.
 */
const include = (filename: string) => HtmlService.createHtmlOutputFromFile(filename).getContent();

const getEmail = () => {
    const userEmail = Session.getActiveUser().getEmail();
    Logger.log(`userEmail ${userEmail}`);
    return userEmail;
}

const getScriptProperty = (propertyName: string) => {
    try {
        const scriptProperties = PropertiesService.getScriptProperties();
        const propertyValue = scriptProperties.getProperty(propertyName);
        return propertyValue;
    } catch (error) {
        // TODO (developer) - Handle exception
        console.error('Failed with error %s', error.message);
    }
    return null;
}

const getDeals = () => {
    const POC_PLAN_REGISTRY_LIST_URL:string | null = getScriptProperty('POC_PLAN_REGISTRY_LIST_URL');
    if (POC_PLAN_REGISTRY_LIST_URL) {
        const response = fetchData(POC_PLAN_REGISTRY_LIST_URL);
        const dealsListString = response.getContentText();
        Logger.log(dealsListString);
        const dealsList = JSON.parse(dealsListString);
        return dealsList;
    } else {
        Logger.log('Unable to retrieve POC_PLAN_REGISTRY_LIST_URL from script properties');
        return [];
    }
}

interface DealRequest {
    hubSpotDealID: string
}

const getDeal = (dealId: string) => {
    const POC_PLAN_REGISTRY_GET_URL:string | null = getScriptProperty('POC_PLAN_REGISTRY_GET_URL');
    if(POC_PLAN_REGISTRY_GET_URL) {
        const response = fetchData(POC_PLAN_REGISTRY_GET_URL, {"hubSpotDealID": dealId});
        const dealsGetString = response.getContentText();
        Logger.log(dealsGetString);
        const dealObject = JSON.parse(dealsGetString);
        return dealObject;
    } else {
        Logger.log('Unable to retrieve POC_PLAN_REGISTRY_GET_URL from script properties');
        return null;
    }
}

const fetchData = (url:string, payload?:DealRequest, additionalOptions:any = null) => {
    let headers:GoogleAppsScript.URL_Fetch.HttpHeaders = {
        accept: 'application/json'
    };
    let options:GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        'method' : 'post',
        headers
    };
    if (payload) {
        options.payload = JSON.stringify(payload);
        headers.contentType = 'application/json';
    }
    if (additionalOptions) {
        Object.assign(options, additionalOptions);
    }

    let response = UrlFetchApp.fetch(url, options);
    return response;
}

const htmlDialog = (title, htmlMessage, height = 250, width = 350) => {
    const htmlOutput = HtmlService
        .createHtmlOutput(htmlMessage)
        .setWidth(width)
        .setHeight(height);
    SlidesApp.getUi().showModelessDialog(htmlOutput, title);
}

function camalize_(str) {
    return str.toLowerCase().replace(/[\(|\)]/g,'').replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function getReferenceSheetValues() {
    const sheets = SpreadsheetApp.openById(SHEET_DATA_WORKSHEET_ID);

    // Get the sheet by its name
    const sheet = sheets.getSheetByName(GOOGLE_SHEET_REFERENCE_NAME);

    // Get the range of data on the sheet
    const dataRange = sheet?.getDataRange();

    // Get the values in the data range
    const sheetValues = dataRange?.getValues();

    // Remove the header row
    sheetValues?.shift();

    const sheetValuesAndSummary = {
        referenceMatrix: sheetValues
    }

    sheetValues?.forEach( (row) => {
        const camelizedTopic = camalize_(row[0]);
        const camelizedChoice = camalize_(row[1]);
        const camelizedTopicAndChoice = camelizedTopic + "|" + camelizedChoice;
        const fullTopicName = row[0];
        const linkString = row[5];
        const choice = row[1];
        const warning = row[7];
        const urls = linkString.split(" ");
        const filteredUrls = urls.filter( (item) => item !== '');

        if (!sheetValuesAndSummary[camelizedTopic]) {
            // topic is NOT already stored, creating object
            sheetValuesAndSummary[camelizedTopic] = {
                fullTopicName,
                camelizedTopic,
            }
            sheetValuesAndSummary[camelizedTopic][camelizedChoice] = {
                camelizedTopicAndChoice,
                choice,
                camelizedChoice,
                fullTopicName,
                links: filteredUrls,
                warningMessage: warning
            }
        } else {
            sheetValuesAndSummary[camelizedTopic][camelizedChoice] = {
                camelizedTopicAndChoice,
                choice,
                camelizedChoice,
                fullTopicName,
                links: filteredUrls,
                warningMessage: warning
            }
        }
    });

    return sheetValuesAndSummary;
}

function cleanAndPrepareSessionObject(session) {
    for (const [key, value] of Object.entries(session)) {
        if (Array.isArray(session[key])) {
            const sessionArray: any[] = value as any[];
            // clear out the empty arrays
            const filteredList = sessionArray.filter( (value) => value !== EMPTY_SESSION_TOPIC);
            if (sessionArray.length > filteredList.length) {
                session[key] = filteredList;
            }
            if(filteredList.length > 0) {
                if (!session["topicsToWork"]) {
                    session["topicsToWork"] = [key]
                } else {
                    session["topicsToWork"].push(key);
                }
            }
        }
    }
    session.choices = {};
    session.topicsToWork.forEach( (topic) => {
        const sessionChoices = [].concat(...session[topic]);
        sessionChoices.forEach( (sessionChoice) => {
        const camelizedChoice = camalize_(sessionChoice);
        if (session.choices[topic] && Array.isArray(session.choices[topic])) {
            // choices array for topic already exists
            session.choices[topic].push({
            sessionFullChoice: sessionChoice,
            camelizedChoice
            });
        } else {
            session.choices[topic] = [{
            sessionFullChoice: sessionChoice,
            camelizedChoice
            }];
        }
        });
        
    });
    return session;
}

function prepSheetValues(){
    const sheetValues = getReferenceSheetValues();
    return sheetValues;
}

function prepSession(inputObject) {
    const obj = inputObject;
    const sessions: any[] = [];
    const topicsBeingWorked: any[] = [];
    obj.createSessions.forEach( (session) => {
        const preppedSession = cleanAndPrepareSessionObject(session);
        preppedSession?.topicsToWork?.forEach( (topic) => topicsBeingWorked.push(topic));
        sessions.push(preppedSession);
    });
    const uniqueTopicsBeingWorked = topicsBeingWorked.filter(onlyUnique);
    return {
        uniqueTopicsBeingWorked,
        sessions
    }
}

function createProperBlankSlide(selectAsCurrentPage = false){
    const presentation = SlidesApp.getActivePresentation();
    var layouts = presentation.getLayouts();
    let layoutToUse:GoogleAppsScript.Slides.Layout | undefined = layouts.find( (layout) => layout.getLayoutName() == LAYOUT_TO_USE_ID);
    let slide;
    if (layoutToUse){
        slide = presentation.appendSlide(layoutToUse);
        if (selectAsCurrentPage) {
            slide.selectAsCurrentPage();
        }
        return {
            presentation,
            layoutToUse,
            slide
        };
    } else {
        console.error("Unable to locate layout to use");
        return {
            presentation,
            layoutToUse,
            slide
        };
    }
}

function addHeaderToSlide_(slide, title) {
    const newShape = slide.insertTextBox(title, HEADER_LEFT, HEADER_TOP, HEADER_WIDTH, HEADER_HEIGHT);
    newShape.setContentAlignment(SlidesApp.ContentAlignment.BOTTOM);
    const shapeTextRange = newShape.getText();
    const shapeTextRangeStyle = shapeTextRange.getTextStyle();
    shapeTextRangeStyle.setFontFamily(HEADER_FONT_FAMILY);
    shapeTextRangeStyle.setFontSize(HEADER_FONT_SIZE);
}

function alertOnMessages(msgs, buttons) {
    return SlidesApp.getUi().alert(msgs.join("\n"), buttons);
}

function prepSessionTextObjects() {
    const { sessions } = prepSession(objBackup);
    const sheetValues = prepSheetValues();
    const sessionTextObjects = createSessionTextObjects(sessions, sheetValues);
    return sessionTextObjects;
}

function prepSummarySlide(inputObject) {
    const obj = inputObject;
    let msgs: any[] = [];
    const { uniqueTopicsBeingWorked } = prepSession(obj);
    const sheetValues = prepSheetValues();
    const { slide, presentation }  = createProperBlankSlide(true);
    Logger.log("slideId", slide.getObjectId());
    Logger.log("presentationId", presentation.getId());
    addHeaderToSlide_(slide, SUMMARY_SLIDE_TITLE);

    const table = slide.insertTable(SUMMARY_SLIDE_TABLE_DEFAULT_ROWS,
        SUMMARY_SLIDE_TABLE_DEFAULT_COLUMNS);
    table.setLeft(SUMMARY_SLIDE_TABLE_LEFT);
    table.setTop(SUMMARY_SLIDE_TABLE_TOP);
    const headerRow = table.getRow(SUMMARY_SLIDE_TABLE_HEADER_ROW_INDEX);
    const headerRowCells = headerRow.getNumCells();
    for (let i = 0; i < headerRowCells; i++) {
        const headerRowCell = headerRow.getCell(i);
        const headerRowCellFill = headerRowCell.getFill();
        headerRowCellFill.setSolidFill(SUMMARY_SLIDE_TABLE_HEADER_ROW_COLOR);
        const headerRowCellTextRange = headerRowCell.getText();
        let headerRowCellTextRangeTextStyle;
        switch (i) {
        case COLUMN_1_INDEX:
            headerRowCellTextRange.appendText(SUMMARY_SLIDE_TABLE_HEADER_COL_1_TEXT);
            headerRowCellTextRangeTextStyle = headerRowCellTextRange.getTextStyle();
            headerRowCellTextRangeTextStyle.setForegroundColor(standardColorObject.white);
            headerRowCellTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
            headerRowCellTextRangeTextStyle.setFontSize(SUMMARY_SLIDE_TABLE_HEADER_FONT_SIZE);
            break;
        case COLUMN_2_INDEX:
            headerRowCellTextRange.appendText(SUMMARY_SLIDE_TABLE_HEADER_COL_2_TEXT);
            headerRowCellTextRangeTextStyle = headerRowCellTextRange.getTextStyle();
            headerRowCellTextRangeTextStyle.setForegroundColor(standardColorObject.white);
            headerRowCellTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
            headerRowCellTextRangeTextStyle.setFontSize(SUMMARY_SLIDE_TABLE_HEADER_FONT_SIZE);
            break;
        case COLUMN_3_INDEX:
            headerRowCellTextRange.appendText(SUMMARY_SLIDE_TABLE_HEADER_COL_3_TEXT);
            headerRowCellTextRangeTextStyle = headerRowCellTextRange.getTextStyle();
            headerRowCellTextRangeTextStyle.setForegroundColor(standardColorObject.white);
            headerRowCellTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
            headerRowCellTextRangeTextStyle.setFontSize(SUMMARY_SLIDE_TABLE_HEADER_FONT_SIZE);
            break;
        }
    }

    // Skipping the header row, create all the other rows
    uniqueTopicsBeingWorked.forEach( (topic) => {
        let sheetValueObject = sheetValues[topic];
        const row = table.appendRow();
        if (sheetValueObject) {
        const rowCells = row.getNumCells();
        let rowCellTextRange;
        // Get selected topics
        const topicKey = `${topic}Question`;
        const priorityKey = `${topic}Priority`;
        const selectedTopics = obj[topicKey];
        const selectedPriority = obj[priorityKey];
        let formattedPriority = "nth" === selectedPriority ? "NTH" : "Must";
        const joinedSelectedTopics = selectedTopics?.length > 0 ? selectedTopics?.join(", ") : "";
        for (let rowCellIndex = 0; rowCellIndex < rowCells; rowCellIndex++) {
            const rowCell = row.getCell(rowCellIndex);
            const rowCellFill = rowCell.getFill();
            rowCellFill.setSolidFill(SUMMARY_SLIDE_TABLE_ROWS_COLOR);
            rowCellTextRange = rowCell.getText();
            let rowCellTextRangeTextStyle;
            switch (rowCellIndex) {
            case COLUMN_1_INDEX:
                rowCellTextRange.appendText(sheetValueObject.fullTopicName);
                rowCellTextRangeTextStyle = rowCellTextRange.getTextStyle();
                rowCellTextRangeTextStyle.setForegroundColor(standardColorObject.black);
                rowCellTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
                rowCellTextRangeTextStyle.setFontSize(SUMMARY_SLIDE_TABLE_ROW_FONT_SIZE);
                break;
            case COLUMN_2_INDEX:
                rowCellTextRange.appendText(joinedSelectedTopics);
                rowCellTextRangeTextStyle = rowCellTextRange.getTextStyle();
                rowCellTextRangeTextStyle.setForegroundColor(standardColorObject.black);
                rowCellTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
                rowCellTextRangeTextStyle.setFontSize(SUMMARY_SLIDE_TABLE_ROW_FONT_SIZE);
                break;
            case COLUMN_3_INDEX:
                rowCellTextRange.appendText(formattedPriority);
                rowCellTextRangeTextStyle = rowCellTextRange.getTextStyle();
                rowCellTextRangeTextStyle.setForegroundColor(standardColorObject.black);
                rowCellTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
                rowCellTextRangeTextStyle.setFontSize(SUMMARY_SLIDE_TABLE_ROW_FONT_SIZE);
                break;
            }
        }
        }
    });

    var objectId = table.getObjectId();
    let rowCount = table.getNumRows();
    let tableRowProps:any = [];
    SlidesApp.getActivePresentation().saveAndClose();
    for (let i = 0; i < rowCount; i++) {
        const theMagnitude = i == 0 ? 21.255905511811022 : 23.3248031496063;
        tableRowProps.push(
        {updateTableRowProperties: {tableRowProperties: 
            {minRowHeight: {magnitude: theMagnitude, unit: "PT"}},
            rowIndices: [i],
            objectId: objectId,
            fields: "minRowHeight"
        }}
        )
    }

    var resource = {requests: [
        {updateTableColumnProperties: {tableColumnProperties: 
        {columnWidth: {magnitude: 197.75393700787401, unit: "PT"}},
        columnIndices: [0],
        objectId: objectId,
        fields: "columnWidth"
        }},
        {updateTableColumnProperties: {tableColumnProperties: 
        {columnWidth: {magnitude: 401.38385826771656, unit: "PT"}},
        columnIndices: [1],
        objectId: objectId,
        fields: "columnWidth"
        }},
        {updateTableColumnProperties: {tableColumnProperties: 
        {columnWidth: {magnitude: 82.16929133858268, unit: "PT"}},
        columnIndices: [2],
        objectId: objectId,
        fields: "columnWidth"
        }},
        ...tableRowProps
    ]};
    Slides?.Presentations?.batchUpdate(resource, presentation.getId());

    if (msgs?.length) {
        alertOnMessages(msgs, undefined);
    }
}

function populateSessionTextObjectsFromSession(session, sheetValues) {
    const sessionTextObjects: any[] = [];
    // work the session object
    session.topicsToWork.forEach( (topic) => {
        const choicesThisSession = session.choices[topic];
        const choices: any[] = [];
        const links: any[] = [];
        const warnings: any[] = [];
        const topicObj = sheetValues[topic];
        choicesThisSession.forEach( (sessionChoice) => {
        const choiceObj = topicObj?.[sessionChoice.camelizedChoice];
        if (choiceObj) {
            // we have a choice object
            choices.push(choiceObj.choice);
            choiceObj.links.forEach( (link) => links.push(link));
            if (choiceObj.warningMessage !== ''){
            warnings.push(choiceObj.warningMessage.trim());
            }
        } else {
            // no choice object found (maybe custom choice)
            choices.push(sessionChoice.sessionFullChoice);
        }
        });
        if (!topicObj?.fullTopicName) {
        Logger.log("Full topic name not found for topic : ", topic)
        }
        const title = `${topicObj?.fullTopicName} (${choices.join(", ")})`;
        const sessionTextObject = {
        title,
        topic: topicObj?.fullTopicName,
        choices: choices.join(", "),
        links,
        warnings
        };
        sessionTextObjects.push(sessionTextObject);
    })
    return sessionTextObjects;
}

function createGatewaySessionObject(session, sheetValues) {
    const sessionTextObjects = [{
        title: SESSION_ONE_TITLE_ONE,
        links: SESSION_ONE_TITLE_ONE_URLS,
        warnings: SESSION_ONE_TITLE_ONE_WARNINGS
    },{
        title: SESSION_ONE_TITLE_TWO,
        links: SESSION_ONE_TITLE_TWO_URLS,
        warnings: SESSION_ONE_TITLE_TWO_WARNINGS
    }];
    // gather text for body of slide
    const additionalSessionTextObjects = populateSessionTextObjectsFromSession(session, sheetValues);
    additionalSessionTextObjects.forEach( (item) => sessionTextObjects.push(item));
    return sessionTextObjects;
}

function createOtherSessionObjects(session, sheetValues) {
    // gather text for body of slide
    const sessionTextObjects = populateSessionTextObjectsFromSession(session, sheetValues);
    return sessionTextObjects;
}

function createSessionTextObjects(sessions, sheetValues) {
    let sessionTextObjects: any[] = [];
    sessions.forEach( (session) => {
        const sessionArray: any[] = [];
        if (session.sessionNumber == 1) {
            const sessionObjects = createGatewaySessionObject(session, sheetValues);
            sessionObjects.forEach( (item) => sessionArray.push(item));
        } else {
            const sessionObjects = createOtherSessionObjects(session, sheetValues);
            sessionObjects.forEach( (item) => sessionArray.push(item));
        }
        sessionTextObjects.push(sessionArray);
    })
    return sessionTextObjects;
}

function appendSessionTopicAndChoice(taskShapeTextRange, topic, choices) {
    // set topic
    const topicText = topic + CHAR_NEW_LINE;
    const taskShapeTopicTextRange = taskShapeTextRange.appendText(topicText);
    const taskShapeTopicTextRangeParagraphStyle = taskShapeTopicTextRange.getParagraphStyle();
    taskShapeTopicTextRangeParagraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    const taskShapeTopicTextRangeTextStyle = taskShapeTopicTextRange.getTextStyle();
    taskShapeTopicTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
    taskShapeTopicTextRangeTextStyle.setFontSize(SESSION_PLAN_TOPIC_FONT_SIZE);
    taskShapeTopicTextRangeTextStyle.setForegroundColor(standardColorObject.black);
    // set choices
    const choicesText = choices + CHAR_NEW_LINE;
    const taskShapeChoicesTextRange = taskShapeTextRange.appendText(choicesText);
    const taskShapeChoicesTextRangeParagraphStyle = taskShapeChoicesTextRange.getParagraphStyle();
    taskShapeChoicesTextRangeParagraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    const taskShapeChoicesTextRangeTextStyle = taskShapeChoicesTextRange.getTextStyle();
    taskShapeChoicesTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
    taskShapeChoicesTextRangeTextStyle.setFontSize(SESSION_PLAN_CHOICES_FONT_SIZE);
    taskShapeChoicesTextRangeTextStyle.setForegroundColor(standardColorObject.black);
}

function createSessionPlanShape(slide, shapeEnum, index, lastItemIndex) {
    let taskShape;
    const isLast = index == lastItemIndex;
    let calculatedLeft;
    let needsContentAlignBottom = false;
    switch (shapeEnum){
        case SESSION_PLAN_TYPE.TASK:
        if (isLast) {
            calculatedLeft = SESSION_PLAN_TASKS_LAST_LEFT;
        } else {
            calculatedLeft = SESSION_PLAN_TASKS_FIRST_LEFT + index;
        }
        taskShape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 
            calculatedLeft, 
            SESSION_PLAN_TASKS_TOP, 
            SESSION_PLAN_TASKS_WIDTH, 
            SESSION_PLAN_TASKS_HEIGHT);
        needsContentAlignBottom = true;
        break;
        case SESSION_PLAN_TYPE.SHAPE:
        if (isLast) {
            calculatedLeft = SESSION_PLAN_SHAPE_LAST_LEFT;
        } else {
            calculatedLeft = SESSION_PLAN_SHAPE_FIRST_LEFT + index;
        }
        taskShape = slide.insertShape(SlidesApp.ShapeType.ELLIPSE, 
            calculatedLeft, 
            SESSION_PLAN_SHAPE_TOP, 
            SESSION_PLAN_SHAPE_WIDTH, 
            SESSION_PLAN_SHAPE_HEIGHT);
        break;
        case SESSION_PLAN_TYPE.DATE:
        if (isLast) {
            calculatedLeft = SESSION_PLAN_DATE_LAST_LEFT;
        } else {
            calculatedLeft = SESSION_PLAN_DATE_FIRST_LEFT + index;
        }
        taskShape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 
            calculatedLeft, 
            SESSION_PLAN_DATE_TOP, 
            SESSION_PLAN_DATE_WIDTH, 
            SESSION_PLAN_DATE_HEIGHT);
        taskShape.setContentAlignment(SlidesApp.ContentAlignment.TOP);
        break;
    }
    if (needsContentAlignBottom) {
        taskShape.setContentAlignment(SlidesApp.ContentAlignment.BOTTOM);
    }
    return taskShape;
}

function prepSessionSlide(inputObject) {
    const obj = inputObject;
    let msgs = [];
    const { sessions } = prepSession(obj);
    const sheetValues = prepSheetValues();
    const sessionTextObjects = createSessionTextObjects(sessions, sheetValues);

    let { slide } = createProperBlankSlide(true);
    addHeaderToSlide_(slide, SESSION_PLAN_TITLE);

    const lastItemIndex = sessions.length - 1;
    const documentProperties = PropertiesService.getDocumentProperties();
    const taskShapeIDs: any[] = [];
    const circleShapeIDs: any[] = [];
    const dateShapeIDs: any[] = [];
    sessions.forEach( (session, index) => {
        const isFirst = index == 0;
        const isLast = index == lastItemIndex;

        const sessionTextObjectArray = sessionTextObjects[index];
        let sessionTextObject;

        // create task shape
        const taskShape = createSessionPlanShape(slide, SESSION_PLAN_TYPE.TASK, index, lastItemIndex);
        let taskShapeTextRange = taskShape.getText();
        
        if (isFirst) {
            sessionTextObject = sessionTextObjectArray.pop();
            const text = SESSION_PLAN_TASKS_GATEWAY_PREFIX + sessionTextObject.choices + CHAR_NEW_LINE;
            taskShapeTextRange.appendText(text);
            const taskShapeTextRangeParagraphStyle = taskShapeTextRange.getParagraphStyle();
            taskShapeTextRangeParagraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
            const taskShapeTextRangeTextStyle = taskShapeTextRange.getTextStyle();
            taskShapeTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
            taskShapeTextRangeTextStyle.setFontSize(SESSION_PLAN_GATEWAY_FONT_SIZE);
            taskShapeTextRangeTextStyle.setForegroundColor(standardColorObject.black);
        } else {
            sessionTextObjectArray.forEach( (sessionTextObject) => {
                appendSessionTopicAndChoice(taskShapeTextRange, sessionTextObject.topic, sessionTextObject.choices);
            });
        }
        if (isLast) {
            appendSessionTopicAndChoice(taskShapeTextRange, SESSION_PLAN_SUMMARY_POSTFIX_TOPIC, SESSION_PLAN_SUMMARY_POSTFIX_CHOICES);
        }
        taskShapeIDs.push(taskShape.getObjectId());

        // create circle shape under task
        const circleShape = createSessionPlanShape(slide, SESSION_PLAN_TYPE.SHAPE, index, lastItemIndex);
        const circleShapeFill = circleShape.getFill();
        circleShapeFill.setSolidFill(SESSION_PLAN_SHAPE_COLOR_HEX_STRING);
        circleShapeIDs.push(circleShape.getObjectId());
        const circleShapeBorder = circleShape.getBorder();
        circleShapeBorder.setTransparent();

        // create date shape
        const dateShape = createSessionPlanShape(slide, SESSION_PLAN_TYPE.DATE, index, lastItemIndex);
        const dateShapeTextRange = dateShape.getText();
        const text = SESSION_PLAN_DATE_PREFIX + session.sessionNumber + CHAR_NEW_LINE;
        dateShapeTextRange.appendText(text);
        const dateShapeTextRangeParagraphStyle = dateShapeTextRange.getParagraphStyle();
        dateShapeTextRangeParagraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
        const dateShapeTextRangeTextStyle = dateShapeTextRange.getTextStyle();
        dateShapeTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
        dateShapeTextRangeTextStyle.setFontSize(SESSION_PLAN_DATE_DEFAULT_FONT_SIZE);
        dateShapeTextRangeTextStyle.setForegroundColor(standardColorObject.blue);
        dateShapeIDs.push(dateShape.getObjectId());
        const dateMinutesTextRange = dateShapeTextRange.appendText(SESSION_PLAN_DATE_TEXT);
        const dateMinutesTextRangeTextStyle = dateMinutesTextRange.getTextStyle();
        dateMinutesTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
        dateMinutesTextRangeTextStyle.setFontSize(SESSION_PLAN_DATE_MINUTES_FONT_SIZE);
        dateShapeTextRange.appendText(CHAR_NEW_LINE);
        dateShapeTextRange.appendText(CHAR_NEW_LINE);
        let sessionDayOfWeek = "";
        let sessionShortDate = "";
        if (obj.suppressSessionDateOnPlan) {
            sessionDayOfWeek = "TBD";
            sessionShortDate = "-/-"
        } else {
            const sessionDate = new Date(session.sessionDate);
            let dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format;
            sessionDayOfWeek = dayName(sessionDate);
            sessionShortDate = new Date().toLocaleDateString('en-US', {month: 'numeric', day: 'numeric'});
        }
        const dateDaysDateShapeTextRange = dateShapeTextRange.appendText(sessionDayOfWeek);
        const dateDaysDateShapeTextRangeTextStyle = dateDaysDateShapeTextRange.getTextStyle();
        dateDaysDateShapeTextRangeTextStyle.setFontFamily(HEADER_FONT_FAMILY);
        dateDaysDateShapeTextRangeTextStyle.setFontSize(SESSION_PLAN_DATE_DEFAULT_FONT_SIZE);
        dateDaysDateShapeTextRange.appendText(CHAR_NEW_LINE);
        dateDaysDateShapeTextRange.appendText(sessionShortDate);
    });

    const taskShapeIdsJsonString = JSON.stringify(taskShapeIDs, null, 2);
    const circleShapeIdsJsonString = JSON.stringify(circleShapeIDs, null, 2);
    const dateShapeIdsJsonString = JSON.stringify(dateShapeIDs, null, 2);

    documentProperties.setProperty(SESSION_PLAN_PROPERTY_CIRCLE_SHAPES_ID, circleShapeIdsJsonString);
    documentProperties.setProperty(SESSION_PLAN_PROPERTY_TASK_SHAPES_ID, taskShapeIdsJsonString);
    documentProperties.setProperty(SESSION_PLAN_PROPERTY_DATE_SHAPES_ID, dateShapeIdsJsonString);
    documentProperties.setProperty(SESSION_PLAN_PROPERTY_SLIDE_ID, slide.getObjectId());

    // create line between circle shapes
    const startShapeId = circleShapeIDs[0];
    const endShapeId = circleShapeIDs[circleShapeIDs.length - 1];
    const line = slide.insertLine(
        SlidesApp.LineCategory.STRAIGHT,
        slide.getPageElementById(startShapeId).asShape().getConnectionSites()[6],
        slide.getPageElementById(endShapeId).asShape().getConnectionSites()[6]
    );
    line.sendToBack();

    if (msgs?.length) {
        alertOnMessages(msgs, undefined);
    }
}

function populateLogisticsSlideBody(shape, logisticsObject, isMndaSigned) {
    const textRange = shape.getText();

    logisticsObject.logisticsItems.forEach( (logisticsItem, index) => {
        const itemText = `${logisticsItem.item}${index == 0 && isMndaSigned ? " " + MNDA_SIGNED_EMOJI : ''}`;
        const insertedText = textRange.appendText(itemText);
        const insertedTextStyle = insertedText.getTextStyle();
        insertedTextStyle.setFontFamily(BODY_FONT_FAMILY);
        insertedTextStyle.setFontSize(LOGISTICS_BODY_FONT_SIZE);
        insertedTextStyle.setBold(true);
        if (logisticsItem.subItem !== "") {
        textRange.appendText(CHAR_NEW_LINE);
        const insertedText = textRange.appendText(logisticsItem.subItem);
        const insertedTextStyle = insertedText.getTextStyle();
        insertedTextStyle.setFontFamily(BODY_FONT_FAMILY);
        insertedTextStyle.setFontSize(LOGISTICS_SUB_ITEM_BODY_FONT_SIZE);
        insertedTextStyle.setBold(false);
        }
        textRange.appendText(CHAR_NEW_LINE);
        textRange.appendText(CHAR_NEW_LINE);
    });
}

function populateSessionShapeText(shape, sessionTextObjects) {
    sessionTextObjects.forEach( (sessionShapeObject) => {
        const textRange = shape.getText();
        // Set text in TEXT_BOX
        textRange.appendText(SESSION_ITEM_START);
        // add session topic and choices title
        const insertedText = textRange.appendText(sessionShapeObject.title);
        const insertedTextStyle = insertedText.getTextStyle();
        insertedTextStyle.setFontFamily(BODY_FONT_FAMILY);
        insertedTextStyle.setFontSize(BODY_FONT_SIZE);
        insertedTextStyle.setForegroundColor(standardColorObject.cornflower_blue);
        textRange.appendText(CHAR_NEW_LINE);
        // add urls
        sessionShapeObject.links?.forEach( (url) => {
        const insertedLink = textRange.appendText(url);
        const insertedTextStyle = insertedLink.getTextStyle();
        insertedTextStyle.setLinkUrl(url);
        insertedTextStyle.setFontSize(BODY_LINK_FONT_SIZE);
        textRange.appendText(CHAR_NEW_LINE);
        });
        textRange.appendText(CHAR_NEW_LINE);
        // add warnings
        sessionShapeObject.warnings?.forEach( (warning) => {
        textRange.appendText(CHAR_TAB);
        const insertedText = textRange.appendText(warning);
        const insertedTextStyle = insertedText.getTextStyle();
        insertedTextStyle.setFontFamily(BODY_FONT_FAMILY);
        insertedTextStyle.setFontSize(BODY_FONT_SIZE);
        insertedTextStyle.setForegroundColor(BODY_WARNING_CUSTOM_COLOR);
        textRange.appendText(CHAR_NEW_LINE);
        });
        textRange.appendText(CHAR_NEW_LINE);
    });
}

function addBodyToSlide_(slide, session, sheetValues) {
    // create body text shape on slide
    const shape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, BODY_LEFT, BODY_TOP, BODY_WIDTH, BODY_HEIGHT);
    shape.setContentAlignment(SlidesApp.ContentAlignment.TOP);
    const sessionTextObjects:any[] = [];
    if (session.sessionNumber == 1) {
        const sessionObjects = createGatewaySessionObject(session, sheetValues);
        sessionObjects.forEach( (item) => sessionTextObjects.push(item));
    } else {
        const sessionObjects = createOtherSessionObjects(session, sheetValues);
        sessionObjects.forEach( (item) => sessionTextObjects.push(item));
    }
    populateSessionShapeText(shape, sessionTextObjects);
}

function replaceDocsLinksAndWarnings(inputObject){
    const obj = inputObject;
    const presentation = SlidesApp.getActivePresentation();
    // let slides = presentation.getSlides();
    // Set the slide deck as the active presentation
    let msgs = [];

    var layouts = presentation.getLayouts();
    let layoutToUse = layouts.find( (layout) => layout.getLayoutName() == LAYOUT_TO_USE_ID) || layouts[0];

    const sheetValues = getReferenceSheetValues();

    // work the sessions
    obj.createSessions.forEach( (session) => {
        let slide = presentation.appendSlide(layoutToUse);
        slide.selectAsCurrentPage();
        const preppedSession = cleanAndPrepareSessionObject(session);
        // Make the Header on the new page
        const sessiontTitle = `${HEADER_PREFIX}${session.sessionNumber}`;
        addHeaderToSlide_(slide, sessiontTitle);

        // Make the body on the new page
        addBodyToSlide_(slide, preppedSession, sheetValues);

    })

    // work the logistics slide
    let slide = presentation.appendSlide(layoutToUse);
    slide.selectAsCurrentPage();
    addHeaderToSlide_(slide, LOGISTICS_TITLE_TEXT);
    const shape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, BODY_LEFT, BODY_TOP, BODY_WIDTH, BODY_HEIGHT);
    shape.setContentAlignment(SlidesApp.ContentAlignment.TOP);
    populateLogisticsSlideBody(shape, LOGISTICS_PAGE_OBJECT, obj?.isMndaSigned || false);


    if(msgs.length > 0){
        SlidesApp.getUi().alert(msgs.join("\n"));
    }
}

function selectSessionShapes(propertyKey) {
    const presentation = SlidesApp.getActivePresentation();
    const documentProperties = PropertiesService.getDocumentProperties();
    const sessionSlideId = documentProperties.getProperty(SESSION_PLAN_PROPERTY_SLIDE_ID) || presentation.getSlides()[0].getObjectId();
    const slide = presentation.getSlideById(sessionSlideId);
    if (slide) {
        slide.selectAsCurrentPage();
        const shapeIdsJsonString = documentProperties.getProperty(propertyKey) || "[]";
        const shapeIds = JSON.parse(shapeIdsJsonString);
        shapeIds.forEach( (shapeId, index) => {
        const pageElement = slide.getPageElementById(shapeId);
        const shape = pageElement.asShape();
        if (index == 0) {
            shape.select()
        } else {
            shape.select(false);
        }
        });
    } else {
        SlidesApp.getUi().alert(`Stored Slide ID [${sessionSlideId}] no longer exists, please run the "Create Session Slide" command to generate a new one`);
    }
}

function selectSessionTaskShapes() {
    selectSessionShapes(SESSION_PLAN_PROPERTY_TASK_SHAPES_ID);
}

function selectSessionCircleShapes() {
    selectSessionShapes(SESSION_PLAN_PROPERTY_CIRCLE_SHAPES_ID);
}

function selectSessionDateShapes() {
    selectSessionShapes(SESSION_PLAN_PROPERTY_DATE_SHAPES_ID);
}

function saveContentsToNewPresentation(fileName: string, inputObject) {
    const obj = inputObject;
    const presentation = SlidesApp.getActivePresentation()
    const templateSlides = presentation.getSlides();

    const data = Drive.Files.copy({ parents: [{ id: POC_PLAN_SHARED_FOLDER_ID }], fileName }, POC_PLAN_BLANK_TEMPLATE_WITH_LAYOUT, {
        supportsAllDrives: true,
        fields: 'title,embedLink,id,selfLink',
    });
    console.log('File Copied', data.title, data.embedLink, data.id);
    let newDeck = SlidesApp.openById(data.id);
    newDeck.setName(fileName);
    newDeck.saveAndClose();
    newDeck = SlidesApp.openById(data.id);
    const slides = newDeck.getSlides();
    console.log('Number of slides created : ', slides.length);
    const layouts = newDeck.getLayouts();
    console.log('Number of layouts : ', layouts.length)
    layouts.forEach( (layout) => {
        const layoutName = layout.getLayoutName();
        console.log("Layout Name : ", layoutName);
    });
    const layoutToUse = layouts.find( (layout) => layout.getLayoutName() == LAYOUT_TO_USE_ID) || layouts[0];
    console.log('Layout to use : ', layoutToUse);

    // Insert slides from template
    let index = 0;
    templateSlides.forEach( (slide) => {
        var newSlide = newDeck.insertSlide(index, layoutToUse);
        var elements = slide.getPageElements();
        elements.forEach(function(element) {
        newSlide.insertPageElement(element);
        });
        index++;
    });

    const akeylessContacts = obj?.akeylessContacts || [];
    const currentUserEmail = getEmail();
    const filteredAkeylessContacts = akeylessContacts.filter( (email) => email?.toLowerCase() !== currentUserEmail?.toLowerCase());
    filteredAkeylessContacts.forEach( (email) => {
        const permissionData = Drive.Permissions.insert({
            'value': email,
            'type': 'user',
            'role': 'writer'
        }, data.id, {
            'sendNotificationEmails': false,
            'supportsAllDrives': true
        });
        console.log(`Write permission created for email : ${email} for Google Drive ID : ${permissionData.id}`);
    });

    const htmlMessage = `Edit permissions have been granted to email addresses:<br><br>${filteredAkeylessContacts.join('<br>')}<br><br><a href="${newDeck.getUrl()}" target="_blank">Click here to open the new presentation</a>`;
    const title = "Link to Presentation";
    htmlDialog(title, htmlMessage);
}

function removeAllSlides() {
    var presentation = SlidesApp.getActivePresentation();
    var slides = presentation.getSlides();
    slides.forEach( (slide) => {
        slide.remove();
    });
    SlidesApp.getActivePresentation().saveAndClose();
}

function copyLogoToAllSlides() {
    var presentation = SlidesApp.getActivePresentation();
    var slides = presentation.getSlides();
    var counter = 0;
    var slideCount = slides.length - 1 || 0;
    var images = slides[0].getImages();
    var logoImage = images[0];
    slides.forEach(slide => {
        if (counter == 0){
        console.log('First slide done');
        } else {
        slide.refreshSlide();
        slide.insertImage(logoImage);
        slide.refreshSlide();
        console.log(`Slide counter ${counter} out of ${slideCount} complete`);
        }
        counter++;
    });
}

function removeLogosFromSlides() {
    var presentation = SlidesApp.getActivePresentation();
    var slides = presentation.getSlides();
    var counter = 1;
    slides.forEach(slide => {
        var imageCounter = 1;
        slide.getImages().forEach(img => {
        img.remove();
        console.log(`Removing image # ${imageCounter} from slide # ${counter}`)
        imageCounter++;
        });
        console.log(`Done with Slide # ${counter}`)
        counter++;
    });
}

const standardColorObject = {
    black:"#000000",
    dark_grey_4:"#434343",
    dark_grey_3:"#666666",
    dark_grey_2:"#999999",
    dark_grey_1:"#b7b7b7",
    grey:"#cccccc",
    light_grey_1:"#d9d9d9",
    light_grey_2:"#efefef",
    light_grey_3:"#f3f3f3",
    white:"#ffffff",
    red_berry:"#980000",
    red:"#ff0000",
    orange:"#ff9900",
    yellow:"#ffff00",
    green:"#00ff00",
    cyan:"#00ffff",
    cornflower_blue:"#4a86e8",
    blue:"#0000ff",
    purple:"#9900ff",
    magenta:"#ff00ff",
    light_red_berry_3:"#e6b8af",
    light_red_3:"#f4cccc",
    light_orange_3:"#fce5cd",
    light_yellow_3:"#fff2cc",
    light_green_3:"#d9ead3",
    light_cyan_3:"#d0e0e3",
    light_cornflower_blue_3:"#c9daf8",
    light_blue_3:"#cfe2f3",
    light_purple_3:"#d9d2e9",
    light_magenta_3:"#ead1dc",
    light_red_berry_2:"#dd7e6b",
    light_red_2:"#ea9999",
    light_orange_2:"#f9cb9c",
    light_yellow_2:"#ffe599",
    light_green_2:"#b6d7a8",
    light_cyan_2:"#a2c4c9",
    light_cornflower_blue_2:"#a4c2f4",
    light_blue_2:"#9fc5e8",
    light_purple_2:"#b4a7d6",
    light_magenta_2:"#d5a6bd",
    light_red_berry_1:"#cc4125",
    light_red_1:"#e06666",
    light_orange_1:"#f6b26b",
    light_yellow_1:"#ffd966",
    light_green_1:"#93c47d",
    light_cyan_1:"#76a5af",
    light_cornflower_blue_1:"#6d9eeb",
    light_blue_1:"#6fa8dc",
    light_purple_1:"#8e7cc3",
    light_magenta_1:"#c27ba0",
    dark_red_berry_1:"#a61c00",
    dark_red_1:"#cc0000",
    dark_orange_1:"#e69138",
    dark_yellow_1:"#f1c232",
    dark_green_1:"#6aa84f",
    dark_cyan_1:"#45818e",
    dark_cornflower_blue_1:"#3c78d8",
    dark_blue_1:"#3d85c6",
    dark_purple_1:"#674ea7",
    dark_magenta_1:"#a64d79",
    dark_red_berry_2:"#85200c",
    dark_red_2:"#990000",
    dark_orange_2:"#b45f06",
    dark_yellow_2:"#bf9000",
    dark_green_2:"#38761d",
    dark_cyan_2:"#134f5c",
    dark_cornflower_blue_2:"#1155cc",
    dark_blue_2:"#0b5394",
    dark_purple_2:"#351c75",
    dark_magenta_2:"#741b47",
    dark_red_berry_3:"#5b0f00",
    dark_red_3:"#660000",
    dark_orange_3:"#783f04",
    dark_yellow_3:"#7f6000",
    dark_green_3:"#274e13",
    dark_cyan_3:"#0c343d",
    dark_cornflower_blue_3:"#1c4587",
    dark_blue_3:"#073763",
    dark_purple_3:"#20124d",
    dark_magenta_3:"#4c1130"
};