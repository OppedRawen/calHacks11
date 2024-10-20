const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, required: true, unique: true },
    desiredJobRole: { type: String, required: true },
    
})

module.exports = mongoose.model('User', UserSchema);