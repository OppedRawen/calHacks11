const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Import the router (we'll create it next)
const dataRouter = require('./routes/dataRoutes');
app.use('/api/data', dataRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
