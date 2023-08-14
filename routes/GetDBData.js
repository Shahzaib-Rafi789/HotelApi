const express = require('express');
const router = express.Router();
const {connection} =require('../database/sql');


router.get('/' , (req, response)=>{
    connection.query( 'SELECT (SELECT count(*) from Room) as Total, (SELECT count(*) from Room Where AvaliabilityStatus = 0) as Occupied, (SELECT count(*) from Room Where AvaliabilityStatus = 1) as Free' , (err,res)=>{
        if (err) throw err;
        else {
            response.send (res)
        }
    })
});

module.exports = router;