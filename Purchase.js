const inquirer = require('inquirer');

class Purchase {
  constructor(connection) {
    this.connection = connection
  }

  async getSpecsFromUser() {
    const name = await inquirer.prompt(
        {
            name: 'answer',
            message: 'Please enter the ID of the product you would like to buy.',
            type: 'number',
            default: '5',
        }
    );
    const getQuantityFromUser = await inquirer.prompt(
        {
          name: 'answer',
          message: 'How many would you like to buy?',
          type: 'number',
          default: '1'
        }
    );
    this.makePurchase(getQuantityFromUser, name);
  }

  async makePurchase(getQuantityFromUser, name){
    console.log(`Order complete! Thank you for purchasing Quantity: "${getQuantityFromUser.answer}" of ID: "${name.answer}".`);
  }

}

module.exports = Purchase;