const express = require('express');
const router = express.Router();
const {connection} =require('../database/sql');


router.get('/' , (req, response)=>{
    const Id = req.query.id;
    connection.query( `SELECT Id,Name, Email, Contact, ImageUrl, Cnic, Salary, (SELECT VALUE FROM LookUp where Id = E.Type) as Type FROM Employee E` , (err,res)=>{
        if (err) throw err;
        else {
            response.send (res)
        }
    })
});

module.exports = router;