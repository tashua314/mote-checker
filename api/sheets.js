import { google } from 'googleapis';

const client = new google.auth.JWT({
  email: process.env.CLIENT_EMAIL,
  key: process.env.PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

client.authorize((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connected to Google Sheets API!');
  }
});

async function writeToSheet(req, res, _next) {
  const sheets = google.sheets({ version: 'v4', auth: client });
  try {
    const [dateTime, checker, checkee, gaikenP, comuP, hairyoP] = req.body.values;

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.YOUR_SPREADSHEET_ID,
      range: 'シート1!A:D',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[dateTime, checker, checkee, gaikenP, comuP, hairyoP]],
      },
    });

    res.statusCode = 200;
    res.end('Success!');
  } catch (error) {
    console.error('Failed to write to sheet:', error);
    res.statusCode = 500;
    res.end('Failed to write to sheet.');
  }
}

export default writeToSheet;
