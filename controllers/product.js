const Product = require('../models/Product')

exports.addProduct = async(req,res) => {
    const {title,inProduct,outProduct,image} = req.body;
    const user_id = req.user.id;
    const product = new Product({
        title,
        inProduct,
        outProduct,
        image,
        user_id,
    })
    try{
        var response = await product.save()
        res.status(201).json(response);
    }
    catch(error){
        res.status(500).jso(error);
    }
}