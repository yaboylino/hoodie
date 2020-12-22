const { Schema } = require("mongoose")

const orderSchema = new Schema({
  // voornaam: { type: String, required: true },
  // achternaam: { type: String, required: true },
  // stad: { type: String, required: true },
  // postcode: { type: String, required: true },
  // telefoon: { type: String },
  // land: { type: String, required: true },
  // email: { type: String, required: true },
  // total: { type: String, required: true },
  // quantity: { type: String, required: true },
  order: { type: String, required: true },
  order_id: { type: String, required: true }
})

module.exports = orderSchema
