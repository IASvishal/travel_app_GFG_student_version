const express = require('express');


const category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
    .post(async(req, res) => {
    try{
        const categoriesInDB = await category.insertMany(categories.data);
        res.json(categoriesInDB)
    }catch(err){
                console.log(err);
                res.json({message: "Could not add categories data to DB"})
        }
    })

module.exports = router;