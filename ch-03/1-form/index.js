const express = require("express");
const app = express();

app.use(express.urlencoded());

app.get("/", (inRequest, inResponse) => {
  inResponse.sendFile(`${__dirname}/index.html`);
});

app.get("/styles.css", (inRequest, inResponse) => {
  inResponse.sendFile(`${__dirname}/styles.css`);
});

app.post("/register", (inRequest, inResponse) => {
  inResponse.send(`
  <html>
    <head>
      <title>User Registration - SUCCESS</title>
      <style>
        th { background-color: #e0e0e0; }
        tr { border: 1px solid #a0a0a0; }
        td { border: 1px solid #a0a0a0; }
      </style>
    </head>
    <body>
      <h2>Thank you for registering! Here is the information we got:</h2>
      <table style="border:4px solid black;">
        <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email Address</th>
        </tr>
        <tr>
          <td>${inRequest.body.title}</td>
          <td>${inRequest.body.first_name}</td>
          <td>${inRequest.body.last_name}</td>
          <td>${inRequest.body.age}</td>
          <td>${inRequest.body.email}</td>
        </tr>
    </body>
  </html>
  `);
});

app.listen(80, () => {
  console.log("Server listening on port 80");
});
