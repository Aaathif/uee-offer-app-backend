const Vehicle = require('../models/vehicle.js');

exports.create = async (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }
    const { 
        vehicleMake, 
        vehicleModel, 
        vehicleYear, 
        vehicleRegistrationNumber, 
        vehiclePlateNumber, 
        vehicleInsurance } = req.body;

    // new package
    const vehicle = new Vehicle({
        vehicleMake,
        vehicleModel,
        vehicleYear,
        vehicleRegistrationNumber,
        vehiclePlateNumber,
        vehicleInsurance,
    })

    // save vehicle details in the database
    await vehicle
        .save()
        .then(() => {
            res.status(201).send({ message: "Vehicle details added Successfully" })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while adding vehicle details"
            });
        });
}

exports.findAll = async (req,res) => {
    let vehicle

    try {
        vehicle = await Vehicle.find()
        res.send(vehicle)
    } catch (err) {
        res.status(500).send({ message : err.message || "Error Occurred while retrieving vehicle details" })
    }
}


exports.update = async (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    await Vehicle.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update vehicle details with id = ${id}. Maybe vehicle details not found!`})
            }else{
                res.status(201).send({message : "Vehicle details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating vehicle details"})
        })
}

exports.delete = async (req,res) => {
    const id = req.params.id;

    await Vehicle.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot delete vehicle with id = ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Vehicle deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting vehicle with id = ${id}`});
        })
}