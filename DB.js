// class DB {
//     constructor(connection) {
//       this.connection = connection
//     }

// getProductByID(itemID) {
//     await item.getSpecsFromUser(name, getQuantityFromUser);
//     return this.connection.query(
//         'SELECT item_id, stock_quantity FROM products',
//         {
//           item_id: itemID,
//         }
//     );
//   }

//   updateProductQuantity(quantity) {
//     await item.getSpecsFromUser(name, getQuantityFromUser); 
//     return this.connection.query(
//         'UPDATE products SET ? WHERE ?',
//         [
//           {
//             stock_quantity: quantity,
//           },
//           {
//             item_id: itemID,
//           },
//         ]);
//   }
// }

// module.exports = DB;
