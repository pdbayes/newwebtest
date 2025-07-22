# Guest Registration App

This project is a Google Apps Script web application that provides a guest registration form. The form allows users to register guests with dynamic fields based on their nationality and the number of additional guests.

## Project Structure

- **Code.gs**: Contains the server-side Google Apps Script code for handling form submissions and processing data.
- **form.html**: Contains the HTML and JavaScript for the guest registration form, including dynamic fields and submission handling.
- **README.md**: This documentation file.

## Features

- Dynamic fields for additional guests based on user input.
- Conditional fields that appear based on the nationality of the main guest.
- Form submission handling with success and error messages.

## Deployment Instructions

1. Open Google Apps Script by navigating to [Google Apps Script](https://script.google.com).
2. Create a new project and replace the default `Code.gs` content with the provided server-side code.
3. Create a new HTML file named `form.html` and paste the provided HTML code for the guest registration form.
4. Save your project.
5. Deploy the web app:
   - Click on the "Deploy" button in the top right corner.
   - Select "New deployment".
   - Choose "Web app".
   - Set the access permissions as needed (e.g., "Anyone" or "Anyone with the link").
   - Click "Deploy" and authorize the necessary permissions.

## Usage

- Access the web app URL provided after deployment.
- Fill out the guest registration form, ensuring all required fields are completed.
- Submit the form to register the guest(s).
- A confirmation message will be displayed upon successful submission, or an error message if the submission fails.

## License

This project is open-source and available for modification and distribution under the MIT License.