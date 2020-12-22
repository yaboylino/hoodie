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
  const mollieClient = createMollieClient({ apiKey: "test_rqn3c34qCVft6HmujerBTE9DvM3drW" })
  await cors(req, res)
  try {
    const payment = await mollieClient.payments
      .create({
        amount: {
          currency: "EUR",
          value: "499.00" // You must send the correct number of decimals, thus we enforce the use of strings
        },
        description: "My first payment",
        redirectUrl: "https://hoodie.vercel.app/api/webhook/?order=12345",
        webhookUrl: "https://hoodie.vercel.app/api/webhook/?order=12345",
        metadata: {
          order_id: "12345"
        }
      })
      .then(payment => {
        console.log(payment)
        const order = new Order({
          order: payment.id,
          order_id: "12345"
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
