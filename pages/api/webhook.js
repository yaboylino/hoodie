const { createMollieClient } = require("@mollie/api-client")
import { Order } from "../../utils/db"

export default async (req, res) => {
  const order = await Order.findOne({ order_id: req.query.order }).then(results => {
    const data = results.order
    return data
  })

  const mollieClient = createMollieClient({ apiKey: "test_rqn3c34qCVft6HmujerBTE9DvM3drW" })
  try {
    const payment = await mollieClient.payments.get(order)

    // Check if payment is paid
    const isPaid = payment.isPaid()

    if (isPaid) {
      res.redirect("https://hoodie.vercel.app/betaald")
    } else {
      res.redirect("https://hoodie.vercel.app/verlopen")
    }
  } catch (error) {
    console.warn(error)
  }
}
