const Product = require('../models/product');

exports.create = async (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const { productName, productType, originalPrice, offerRate, displayedPrice,productDescription } = req.body;

    // new package
    const product = new Product({
        productName,
        productType, 
        originalPrice, 
        offerRate, 
        displayedPrice,
        productDescription, 
    })

    // save booking details in the database
    await product
        .save()
        .then(() => {
            res.status(201).send({message : "product Plased Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while add the product"
            });
        });
}

exports.findAll = async (req,res) => {
    let product

    try {
        product = await Product.find()
        res.send(product)
    } catch (err) {
        res.status(500).send({ message : err.message || "Error Occurred while retrieving product details" })
    }
}

exports.update = async (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    await Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update product details with id = ${id}. Maybe product details not found!`})
            }else{
                res.status(201).send({message : "product details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating product details"})
        })
}

exports.delete = async (req,res) => {
    const id = req.params.id;

    await Product.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot  delete Product with id = ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Product deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting Product with id = ${id}`});
        })
}