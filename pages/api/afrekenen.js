const { createMollieClient } = require("@mollie/api-client")
import { Order } from "../../utils/db"
import Cors from "cors"
import initMiddleware from "../../lib/init-middleware"

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"]
  })
)

export default async (req, res) => {
  const factuurnummer = await Order.count((error, data) => {
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
  })
  const mollieClient = createMollieClient({ apiKey: "test_rqn3c34qCVft6HmujerBTE9DvM3drW" })
  await cors(req, res)

  try {
    const payment = await mollieClient.payments
      .create({
        amount: {
          currency: "EUR",
          value: "44.00" // You must send the correct number of decimals, thus we enforce the use of strings
        },
        description: "Big Ass Hoodie",
        redirectUrl: `https://hoodie.vercel.app/api/webhook/?order=${parseInt(factuurnummer) + 1}`,
        webhookUrl: `https://hoodie.vercel.app/api/webhook/?order=${parseInt(factuurnummer) + 1}`,
        metadata: {
          order_id: parseInt(factuurnummer) + 1
        }
      })
      .then(payment => {
        const order = new Order({
          order: payment.id,
          order_id: parseInt(factuurnummer) + 1
        })
        order.save()
        res.send(payment)
      })
      .catch(error => {
        console.log(error)
      })
  } catch (error) {
    console.warn(error)
  }
}
