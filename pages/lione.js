import React from "react"
import { Order } from "../utils/db"

const lione = () => {
  console.log(Order.find({order_id: 12345}))
  return (
    <div>
      <h1>Lione</h1>
    </div>
  )
}

export default lione
