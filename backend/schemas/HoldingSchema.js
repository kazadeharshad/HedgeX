const {Schema} = require ('mongoose');

const HoldingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    owner : String,
    inst_key: String,
    instrument_key:String,
});
module.exports = {HoldingSchema};