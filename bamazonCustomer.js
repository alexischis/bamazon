const mysql = require('promise-mysql');
const conf = require('./config.js');
const Purchase = require('./Purchase.js');
// const DB = require('./DB');


async function run() {
    const connection = await mysql.createConnection(conf);
    await readProducts(connection);
    const purchase = new Purchase(connection);
    // const db = new DB(connection);
    await purchase.getSpecsFromUser();
    connection.end();
  }
  
  run();
  
  async function readProducts(connection) {
    console.log('Displaying all items for sale...\n');
    const res = await connection.query('SELECT * FROM products');
    console.log(res);
  }

//   async function interact(db) {
//     console.log('Updated stock...\n');
//     const res = await connection.query('SELECT * FROM products');
//     console.log(res);
//   }