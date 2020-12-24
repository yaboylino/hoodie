const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  order: { type: String, required: true },
  order_id: { type: String, required: true },
})

module.exports = orderSchema
