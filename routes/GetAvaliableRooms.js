const express = require('express');
const router = express.Router();
const {connection} =require('../database/sql');


router.get('/' , (req, response)=>{
    connection.query( 'SELECT Id, No, (Select Value From LookUp Where Id = R.Type) as Type, Price, ImageUrl FROM Room R WHERE AvaliabilityStatus = x\'01\'' , (err,res)=>{
        if (err) throw err;
        else {
            response.send (res)
        }
    })
});

module.exports = router;