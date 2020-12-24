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
  const orderlist = req.body.body
  console.log(orderlist)

  try {
    const payment = await mollieClient.payments
      .create({
        amount: {
          currency: "EUR",
          value: String(orderlist.total.toFixed(2)) // You must send the correct number of decimals, thus we enforce the use of strings
        },
        description: `${orderlist.quantity} x BIG ASS HOODIE`,
        redirectUrl: `https://hoodie.vercel.app/api/webhook/?order=${parseInt(factuurnummer) + 1}`,
        webhookUrl: `https://hoodie.vercel.app/api/webhook/?order=${parseInt(factuurnummer) + 1}`,
        metadata: {
          order_id: parseInt(factuurnummer) + 1
        }
      })
      .then(payment => {
        const order = new Order({
          firstname: orderlist.voornaam,
          lastname: orderlist.achternaam,
          address: orderlist.adres,
          postal: orderlist.postcode,
          city: orderlist.stad,
          country: orderlist.land,
          telephone: orderlist.telefoon,
          email: orderlist.email,
          order: payment.id,
          order_id: parseInt(factuurnummer) + 1,
          total: orderlist.total,
          quantity: orderlist.quantity
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
