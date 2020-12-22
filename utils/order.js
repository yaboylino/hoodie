const { Schema } = require("mongoose")

const orderSchema = new Schema({
  order: { type: String, required: true },
  order_id: { type: String, required: true }
})

module.exports = orderSchema