'use strict';

const Mailgun = require('mailgun-js')
const API_KEY = require('./API_KEY.json').API_KEY

const domain = 'sandbox632ead4fa79a4b6eae48d26cbc3f8582.mailgun.org'
const from_who = 'Chiammo <chiammo@sandbox632ead4fa79a4b6eae48d26cbc3f8582.mailgun.org>'

// Your first function handler
module.exports.send = (event, context, cb) => {
  const mailgun = new Mailgun({ apiKey: API_KEY, domain })

  const body = event.body
  const styles = {
    table: 'border: 1px solid black;border-collapse: collapse;'
  }
  let table = ''
  body.books.forEach(b => {
    table = table + `
    <tr>
      <td style="${styles.table}">${b.title}</td>
      <td style="${styles.table}">${b.author}</td>
      <td style="${styles.table}">${b.isbn}</td>
      <td style="${styles.table}">${b.note}</td>
    </tr>
    `
  })

  const contentHtml = `
  <h4>Dear ${body.name}:</h4>

  <p>Thank you for submitting request to Chiammo!</p>

  <p>We will send you an email once we find all your books.</p>

  <p>Your request ID: <strong>${body.id}</strong></p>

  <table style="${styles.table}">
    <caption>Requested Books</caption>
    <tr>
      <th style="${styles.table}">Title</th>
      <th style="${styles.table}">Author</th>
      <th style="${styles.table}">ISBN</th>
      <th style="${styles.table}">Note</th>
    </tr>
    ${table}
  </table>

  <br />
  <p><strong>Chiammo</strong></p>
  `

  const data = {
    //Specify email data
    from: from_who,
    //The email to contact
    to: body.email,
    //Subject and text data  
    subject: 'Thank you for your request!',
    html: contentHtml
  }

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    //If there is an error, render the error page
    if (err) {
      console.log("got an error: ", err);
      cb('got error', err)
    }
    //Else we can greet and leave
    else {
      console.log(body);
      cb(null, body)
    }
  });
};

// You can add more handlers here, and reference them in serverless.yml
