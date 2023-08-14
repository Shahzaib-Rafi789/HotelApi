const express = require('express');
const router = express.Router();
const {connection} =require('../database/sql');


router.get('/' , (req, response)=>{
    const Id = req.query.id;
    connection.query( `SELECT Id, No, (Select Value From LookUp Where Id = R.Type) as Type, Price, ImageUrl, Description FROM Room R WHERE Id = ${Id}` , (err,res)=>{
        if (err) throw err;
        else {
            response.send (res)
        }
    })
});

module.exports = router;