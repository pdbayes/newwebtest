function doGet() {
  return HtmlService.createHtmlOutputFromFile('form.html')
      .setTitle('Guest Registration Form')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitToSheet(formData) {
  var sheet = SpreadsheetApp.openById('1mrlq6ZHxDhl1VwTy3Y3450PqdyVh9BAQ4wpgas1hH3U').getSheetByName('Registrations');
  var timestamp = new Date();

  // Main guest fields
  var row = [
    timestamp,
    formData.main_name || "",
    formData.arrival_date || "",
    formData.departure_date || "",
    formData.main_nationality || "",
    formData.main_passport || "",
    formData.main_next_destination || "",
    formData.num_additional_guests || ""
  ];

  // Add additional guests (let's support up to 3 for this example)
  var maxGuests = 5;
  for (var i = 1; i <= maxGuests; i++) {
    row.push(formData[`guest_${i}_name`] || "");
    row.push(""); // Arrival
    row.push(""); // Departure
    row.push(formData[`guest_${i}_nationality`] || "");
    row.push(formData[`guest_${i}_passport`] || "");
    row.push(""); // Number of additional guests
    row.push(formData[`guest_${i}_next_destination`] || "");
  }

  sheet.appendRow(row);
  return "success";
}