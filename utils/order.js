const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  postal: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  order: { type: String, required: true },
  order_id: { type: String, required: true },
  total: { type: String, required: true },
  quantity: { type: String, required: true }
})

module.exports = orderSchema
