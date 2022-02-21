const Product = require('../models/Product')

exports.addProduct = async (req, res) => {
    const { title, inProduct, outProduct, image } = req.body;
    const user_id = req.user.id;
    const product = new Product({
        title,
        inProduct,
        outProduct,
        image,
        user_id,
    })
    try {
        var response = await product.save()
        res.status(201).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.fetchProducts = async (req, res) => {
    try {
        const product = await Product.find();
        if (!product) {
            return res.status(404).json({
                error: 'No Product Found'
            })
        }
        res.status(200).json(product);
    }
    catch (err) {
        res.status(404).json(err);
    }
}

exports.getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                error: 'No Product Found'
            })
        }
        res.status(200).json(product)
    }
    catch (err) {
        res.status(404).json(err);
    }
}

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, inproduct, outproduct, imageUrl } = req.body
    try {
        const response = await Product.findByIdAndUpdate(id, {
            title: title,
            inProduct: inproduct,
            outProduct: outproduct,
            image: imageUrl

        }, { new: true });
        res.status(201).json(response);
    }
    catch (err) {
        res.status(404).json(err);
    }
}

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        var response = await Product.findByIdAndDelete(id);
        if( response ){
            res.status(201).json({
                msg: "Product Deleted Successfully"
            });
        }
        res.status(400).json(response);
        
    }
    catch (err) {
        res.status(404).json(err);
    }
}