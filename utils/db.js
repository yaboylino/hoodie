const { createConnection } = require("mongoose")

// schemas
const orderSchema = require("./order")

// connect to given URL
const db = createConnection("mongodb+srv://bigasshoodie:rrK0nTnNVSZCXgQ1@cluster0.vhdot.mongodb.net/bigasshoodies?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
exports.db = db

// handle DB errors
db.on("error", error => {
  console.error("MongoDB connection error:", error)
  // exit immediately on error
  process.exit(1)
})

// connection ready
exports.connected = new Promise(resolve => db.once("open", resolve, console.log("DB connected")))

// models
exports.Order = db.model("Order", orderSchema)
