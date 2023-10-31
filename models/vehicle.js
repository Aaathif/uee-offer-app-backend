const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleMake:{
        type: String,
    },
    vehicleModel: {
        type: String,
    },
    vehicleYear: {
        type: String,
    },
    vehicleRegistrationNumber: {
        type: String,
    },
    vehiclePlateNumber: {
        type: String,
    },
    vehicleInsurance: {
        type: String,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
