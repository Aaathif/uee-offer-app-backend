const Offer= require('../models/offer.js');

exports.create = async (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const { offerTitle, offerCategory, offerRate, startDate, endDate, offerDescription} = req.body;

    // new package
    const offer = new Offer({
        offerTitle, 
        offerCategory, 
        offerRate, 
        startDate, 
        endDate, 
        offerDescription
    })
    
    // save booking details in the database
    await offer
        .save()
        .then(() => {
            res.status(201).send({message : "Offer Added Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while Adding the Offer"
            });
        });
}

exports.findAll = async (req,res) => {
    let offer

    try {
        offer = await Offer.find()
        res.send(offer)
    } catch (err) {
        res.status(500).send({ message : err.message || "Error Occurred while retrieving booking details" })
    }
}

exports.update = async (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    await Offer.findByIdAndUpdate(id, req.body, { useFindAndModify: true})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update Offer details with id = ${id}. Maybe booking details not found!`})
            }else{
                res.status(201).send({message : "Offer details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating Offer details"})
        })
}

exports.delete = async (req,res) => {
    const id = req.params.id;

    await Offer.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot delete Offer with id = ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Offer deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting Offer with id = ${id}`});
        })
}