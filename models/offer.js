const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    offerTitle:{
        type: String,
        required: true
    },
    offerCategory:{
        type: String,
        required: true
    },
    offerRate:{
        type: String,
        required: true,
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    offerDescription:{
        type: String,
        required: true
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('Offer', offerSchema);
