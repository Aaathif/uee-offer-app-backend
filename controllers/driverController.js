const Driver = require('../models/driver.js');

exports.create = async (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }
    const { userName, userEmail, fullName, mobileNo, dateOfBirth, nicNo, address, emergencyContact, gender } = req.body;

    // new package
    const driver = new Driver({
        userName, 
        userEmail, 
        fullName, 
        mobileNo, 
        dateOfBirth, 
        nicNo, 
        address, 
        emergencyContact,
        gender
    })

    // save booking details in the database
    await driver
        .save()
        .then(() => {
            res.status(201).send({message : "Driver details added Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while adding driver details"
            });
        });
}


exports.findAll = async (req,res) => {
    let driver

    try {
        driver = await Driver.find()
        res.send(driver)
    } catch (err) {
        res.status(500).send({ message : err.message || "Error Occurred while retrieving driver details" })
    }
}

exports.update = async (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    await Driver.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update driver details with id = ${id}. Maybe booking details not found!`})
            }else{
                res.status(201).send({message : "Driver details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating driver details"})
        })
}


exports.delete = async (req,res) => {
    const id = req.params.id;

    await Driver.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot delete driver with id = ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Driver details deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting driver with id = ${id}`});
        })
}