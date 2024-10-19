const connectToDatabase = require('../config/db');

// Controller for creating data (POST)
const createData = async (req, res) => {
  const { title, description } = req.body;
  
  try {
    const { client, database } = await connectToDatabase();
    const collection = database.collection('data');
    
    // Insert data into the collection
    const result = await collection.insertOne({ title, description });
    
    res.status(201).json({ message: 'Data created', id: result.insertedId });
    client.close();  // Close connection
  } catch (err) {
    res.status(500).json({ error: 'Failed to create data', details: err.message });
  }
};

// Controller for fetching all data (GET)
const getData = async (req, res) => {
  try {
    const { client, database } = await connectToDatabase();
    const collection = database.collection('data');
    
    // Fetch all data
    const data = await collection.find({}).toArray();
    
    res.status(200).json(data);
    client.close();  // Close connection
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve data', details: err.message });
  }
};

// Controller for deleting data by ID (DELETE)
const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const { client, database } = await connectToDatabase();
    const collection = database.collection('data');
    
    // Delete document by ID
    const result = await collection.deleteOne({ _id: new require('mongodb').ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No data found with this ID' });
    }
    
    res.status(200).json({ message: 'Data deleted' });
    client.close();  // Close connection
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete data', details: err.message });
  }
};

module.exports = { createData, getData, deleteData };
