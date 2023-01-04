const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const mongoose = require('mongoose'); 

chai.use(chaiHttp);
mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true});
// conntect to mongoDB
const Schema = mongoose.Schema;
const stockSchema = new Schema({
  symbol: {type: String, required: true}, 
  likes: {type: [String], default: []}
}); 
// create Schema 
const model = mongoose.model('Stock', stockSchema);
//create model 

//tests to put inside suite 
// Viewing one stock: GET request to /api/stock-prices/
// Viewing one stock and liking it: GET request to /api/stock-prices/
// Viewing the same stock and liking it again: GET request to /api/stock-prices/
// Viewing two stocks: GET request to /api/stock-prices/
// Viewing two stocks and liking them: GET request to /api/stock-prices/


suite('Functional Tests', async function() {
})



