import express from 'express'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// mysql :https://luffy.ee.ncku.edu.tw/phpmyadmin/sql.php?server=1&db=wp2022_group10&table=todos&pos=0&token=f1afe11097edc74e3bff4ed943bd0621
// reference : https://www.mysqltutorial.org/mysql-nodejs/connect/
// json : https://www.mysqltutorial.org/mysql-json/#:~:text=MySQL%20stores%20JSON%20documents%20in,index%2C%20which%20is%20very%20fast.
//const config = require('./config')
//const mysql = require('mysql')
import { mysql } from 'mysql'

//建立一個可以連線的object
const connection = mysql.createConnection(config.mysql)
const pool = mysql.createPool(config.mysql)
var sql_user_table = "User_data"
var sql_app_table = "User_data"




pool.getConnection(function (err, connection, sql_user_table, sql_app_table) {
    if (err) {
        console.log('fail to connect:', err)
        process.exit()
        connection.release(); //return resource back to sql
    }
    else{
        console.log('Connected to the MySQL server.');
        //把mysql指令存成string
        /*
        let createUserTable = `CREATE TABLE IF NOT EXISTS todos(
                          id int primary key auto_increment,
                          title varchar(255)not null,
                          completed tinyint(1) not null default 0
                      )`;
        */
        //let create_personal_table = `CREATE TABLE IF NOT EXISTS ${sql_user_table} (
        //                        User_id VARCHAR(5) , 
        //                        User_name VARCHAR(30) , 
        //                        class_table json , 
        //                        chracter_info json, 
        //                        mission_table json,
//
//
        //)`
        //let create_app_table = `CREATE TABLE IF NOT EXISTS${sql_app_table} (
        //                        User_id VARCHAR(5) , 
        //                        User_name VARCHAR(30) , 
        //                        class_table json , 
        //                        chracter_info json, 
        //                        mission_table json,
        //                        
//
        //)`
        //connection.query(create_personal_table, function (err, results, fields) {
        //    if (err) {
        //        console.log(err.message);
        //    }
        //    else{
        //        console.log(results);
        //    }
        //});
    }
});


/*
connection.connect(err => {
    if (err) {
        console.log('fail to connect:', err)
        process.exit()
    }
    console.log('Connected to the MySQL server.');
})
*/