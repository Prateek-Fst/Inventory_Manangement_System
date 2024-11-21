const express = require("express");
const router = express.Router();
const Product = require("./")

router.post("/insertproduct",async (req,res)=>{
    const {productName, productPrice,productBarCode}= req.body;
    try{
        const pre = await products.findOne({productBarCode:productBarCode});
        if(pre){
            res.status(422).json("Product already exist")
        }
        else{
            const addProduct = new Product({productName,productPrice,productBarCode})
            await addProduct.save();
            res.status(201).json(addProduct);
        }
    }
    catch(err){
        res.status(500).json({"Internal server error ":err})
        console.log(err)
    }

});
router.get("/products",async(req,res)=>{
    try {
        const getProducts = await Product.find({});
        res.status(200).json({"success":true,"data":getProducts})
        
    } catch (error) {
        res.status(500).json({"Internal server error ":err})
        
    }
})
router.get("/products/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await Product.findById({id});
        if(!product){
            res.status(404).json("Not found")

        }
        else{
            res.status(200).json({"success":true,"data":product})

        }
        
    } catch (error) {
        res.status(500).json({"Internal server error ":err})
        
    }
})
router.put("/updateproducts/:id",async(req,res)=>{
    const {productName, productPrice,productBarCode}= req.body;
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id,{productName, productPrice,productBarCode},{new:true});
            res.status(201).json("Updated Successfully "+ product)
        
    } catch (error) {
        res.status(500).json({"Internal server error ":err})
        
    }
})

router.delete("/deleteproducts/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
            res.status(201).json("Deleted Successfully"+ product)
        
    } catch (error) {
        res.status(500).json({"Internal server error ":err})
        
    }
})
module.exports = router;