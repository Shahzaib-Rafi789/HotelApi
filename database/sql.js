const mysql = require('mysql') ;
const connection= mysql.createConnection({
    host: 'bsgzeyd5seo8h0gwb4dq-mysql.services.clever-cloud.com',
    user: 'u38j3phugupxmxvs',
    password: 'zAHIdCxRrStETFxXy1nT',
    database: 'bsgzeyd5seo8h0gwb4dq',
    port: '3306',
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected') ;
});
module.exports={connection};