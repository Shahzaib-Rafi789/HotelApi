const express = require('express');
const router = express.Router();
const {connection} =require('../database/sql');

router.post( '/' , (req, res) => {
    console.log('Started Running');
    title = req.body.title;
    code = req.body.code;

    const data = {
        title:title,
        code:code
    };

    connection.query( 'INSERT into Blog SET ? ' , data, (err,res)=>{
        if (err) console.log(err);
        else{
            console. log("Data stored");
            // res.redirect('http://localhost:3000' );
        }
    })
});

// router.get('/getBlog' , (req, response)=>{
//     connection.query( 'SELECT * from blog' , (err,res)=>{
//         if (err) throw err;
//         else {
//             response.send (res)
//         }
//     })
// });

module.exports = router;