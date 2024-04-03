// Import Express.
const express = require(`express`);

// Create Express app.
const app = express();

// Add middleware for parsing JSON inRequestuests.
app.use(express.json());

// This will act as a database of sorts, storing people in memory.
let people = { };

// Let's add some people.
people[1] = { first_name: `James`, last_name: `Kirk`, age: 32 };
people[2] = { first_name: `Leonard`, last_name: `McCoy`, age: 38 };
people[3] = { first_name: `Montgomery`, last_name: `Scott`, age: 43 };

// Variable used to create a unique key when a new person is added.
let nextKey = 4;

// Create a new person.
app.post(`/people`, (inRequest, inResponse) => {
  const { first_name, last_name, age } = inRequest.body;
  const key = nextKey;
  nextKey = nextKey + 1;
  people[key] = { key, first_name, last_name, age };
  inResponse.status(201).send(people[key]);
});

// Get all people.
app.get(`/people`, (inRequest, inResponse) => {
  inResponse.status(200).json(Object.values(people));
});

// Get a single person by key.
app.get(`/people/:key`, (inRequest, inResponse) => {
  const key = inRequest.params.key;
  inResponse.status(200).json(people[key]);
});

// Update a person.
app.put(`/people/:key`, (inRequest, inResponse) => {
  const key = inRequest.params.key;
  const { first_name, last_name, age } = inRequest.body;
  people[key] = { key, first_name, last_name, age };
  inResponse.status(200).send(people[key]);
});

// Delete a person.
app.delete(`/people/:key`, (inRequest, inResponse) => {
  const key = inRequest.params.key;
  delete people[key];
  inResponse.status(200).send(key);
});

// Start the API.
app.listen(8080, () => {
  console.log(`API is up and running on port 8080`);
});
