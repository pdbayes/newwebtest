function doGet() {
  return HtmlService.createHtmlOutputFromFile('form.html')
      .setTitle('Guest Registration Form')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitToSheet(formData) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  const row = [];
  headers.forEach(header => {
    row.push(formData[header] || '');
  });
  
  sheet.appendRow(row);
}