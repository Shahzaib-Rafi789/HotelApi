const express = require('express');
const router = express.Router();
const {connection} =require('../database/sql');


router.get('/' , (req, response)=>{
    connection.query( 'SELECT R.Id, R.No, (Select Value From LookUp Where Id = R.Type) as Type, R.Price, R.ImageUrl, R.Description, R.AvaliabilityStatus, E.Name, E.Contact FROM Room R Join Employee E On E.Id = R.ServantId' , (err,res)=>{
        if (err) throw err;
        else {
            response.send (res)
        }
    })
});

module.exports = router;