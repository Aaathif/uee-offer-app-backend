const mongoose = require('mongoose')

const driverScheme = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    userEmail: {
        type: String,
    },
    fullName: {
        type: String,
    },
    mobileNo: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    nicNo: {
        type: String,
    },
    address: {
        type: String,
    },
    emergencyContact: {
        type: String,
    },
    gender: {
        type: String,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('drive' , driverScheme);

