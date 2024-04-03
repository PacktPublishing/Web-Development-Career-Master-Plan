const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (inRequest, inResponse) => {
  inResponse.sendFile(`${__dirname}/index.html`);
});

app.get("/styles.css", (inRequest, inResponse) => {
  inResponse.sendFile(`${__dirname}/styles.css`);
});

app.post("/register", (inRequest, inResponse) => {
  console.log("Data sent from client", inRequest.body);
  const responseObj = {
    title: inRequest.body.title,
    first_name: inRequest.body.first_name,
    last_name: inRequest.body.last_name,
    age: inRequest.body.age,
    email: inRequest.body.email
  };
  inResponse.send(responseObj);
});

app.listen(80, () => {
  console.log("Server listening on port 80");
});
