const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schema and model
const userSchema = new mongoose.Schema({
  username: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// API routes
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.post('/api/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

app.put('/api/users/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});