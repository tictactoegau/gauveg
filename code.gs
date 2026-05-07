/************************************************************
 * GauVeg Contact Form Backend - Google Apps Script
 * ----------------------------------------------------------
 * Receives JSON from website
 * Saves to Google Sheet
 * Sends email notification
 * Replace YOUR_EMAIL@example.com with your real email address.
 ************************************************************/

const SHEET_NAME = "ContactSubmissions";
const NOTIFICATION_EMAIL = "YOUR_EMAIL@example.com";

function doGet() {
  return ContentService
    .createTextOutput("GauVeg contact form backend is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSheet_(ss, SHEET_NAME);
    const payload = JSON.parse(e.postData.contents || "{}");

    sheet.appendRow([
      new Date(),
      payload.submittedAt || "",
      payload.source || "",
      payload.name || "",
      payload.email || "",
      payload.message || "",
      payload.pageUrl || "",
      payload.referrer || "",
      payload.browser || "",
      payload.deviceType || "",
      payload.screenSize || "",
      payload.language || "",
      payload.timezone || "",
      payload.ipAddress || "",
      payload.userAgent || ""
    ]);

    const emailSubject = "New GauVeg Contact Form Submission";
    const emailBody =
      "A new GauVeg contact form submission was received.\\n\\n" +
      "Name: " + (payload.name || "") + "\\n" +
      "Email: " + (payload.email || "") + "\\n" +
      "Message: " + (payload.message || "") + "\\n\\n" +
      "Source: " + (payload.source || "") + "\\n" +
      "Page URL: " + (payload.pageUrl || "") + "\\n" +
      "Referrer: " + (payload.referrer || "") + "\\n" +
      "Browser: " + (payload.browser || "") + "\\n" +
      "Device Type: " + (payload.deviceType || "") + "\\n" +
      "Screen Size: " + (payload.screenSize || "") + "\\n" +
      "Language: " + (payload.language || "") + "\\n" +
      "Timezone: " + (payload.timezone || "") + "\\n" +
      "IP Address: " + (payload.ipAddress || "") + "\\n" +
      "User Agent: " + (payload.userAgent || "") + "\\n";

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: emailSubject,
      body: emailBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet_(spreadsheet, sheetName) {
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow([
      "Recorded At",
      "Submitted At Client",
      "Source",
      "Name",
      "Email",
      "Message",
      "Page URL",
      "Referrer",
      "Browser",
      "Device Type",
      "Screen Size",
      "Language",
      "Timezone",
      "IP Address",
      "User Agent"
    ]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}
