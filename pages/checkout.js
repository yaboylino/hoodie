import React, { useState } from "react"
import CountryList from "../components/CountryList"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useRouter } from "next/router"
import fetch from "node-fetch"

const checkout = () => {
  const router = useRouter()
  let [shipping, setShipping] = useState(5)
  let [shippingText, setShippingText] = useState("DPD Shipping")
  const price = 35.0
  const [quantity, setQuantity] = useState(1)
  const total = price * quantity
  const [totalCost] = useState(total + shipping)

  function increment() {
    setQuantity(quantity + 1)
    if (total => 50) {
      setShippingText("Free shipping")
      setShipping(0)
    }
  }

  function decrement() {
    if (quantity === 0) {
      return
    } else {
      setQuantity(quantity - 1)
      if (total < 50.0) {
        setShippingText("DPD Shipping")
        setShipping(5.0)
      }
    }
  }

  function shippingCost() {
    if (total => 50) {
      shipping = 0
      shippingText = "Free shipping"
      return shipping
    } else {
      return shipping, shippingText
    }
  }

  const [gegevens, setGegevens] = useState({
    voornaam: "",
    achternaam: "",
    bedrijfsnaam: "",
    adres: "",
    stad: "",
    provincie: "",
    postcode: "",
    telefoon: "",
    land: "",
    email: "",
    total: totalCost,
    quantity
  })

  const handleSubmit = e => {
    console.log(gegevens)
    e.preventDefault()
    axios
      .post("http://hoodie.vercel.app/api/afrekenen/", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: gegevens
      })
      .then(response => {
        console.log(response)
        if (response.data._links.checkout.href) {
          router.push(response.data._links.checkout.href)
        }
      })
  }

  return (
    <Layout>
      <Navbar />
      <div className="container vh90 mx-auto mt-52">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img className="h-24" src="./img/hoodieback.jpg" alt="" />
                </div>
                <div className="flex justify-between items-center ml-4 flex-grow">
                  <span className="font-bold text-sm">Big Ass Hoodie</span>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg onClick={decrement} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input onChange={e => setGegevens({ ...gegevens, quantity: e.target.value })} className="mx-2 border text-center w-8" type="text" value={quantity} />

                <svg onClick={increment} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">€{price}</span>
              <span className="text-center w-1/5 font-semibold text-sm">€{total}</span>
            </div>
            <form onSubmit={handleSubmit} method="POST">
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                    <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input type="text" value={gegevens.voornaam} onChange={e => setGegevens({ ...gegevens, voornaam: e.target.value })} required name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input type="text" value={gegevens.achternaam} onChange={e => setGegevens({ ...gegevens, achternaam: e.target.value })} required name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input type="text" value={gegevens.email} onChange={e => setGegevens({ ...gegevens, email: e.target.value })} required name="email_address" id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                          Street address
                        </label>
                        <input type="text" value={gegevens.adres} onChange={e => setGegevens({ ...gegevens, adres: e.target.value })} required name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input type="text" value={gegevens.telefoon} onChange={e => setGegevens({ ...gegevens, telefoon: e.target.value })} required name="phone" id="phone" autoComplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                        <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
                          ZIP / Postal
                        </label>
                        <input type="text" value={gegevens.postcode} onChange={e => setGegevens({ ...gegevens, postcode: e.target.value })} required name="postal_code" id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-4 lg:col-span-4">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input type="text" value={gegevens.stad} onChange={e => setGegevens({ ...gegevens, stad: e.target.value })} required name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-26">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <input type="text" value={gegevens.land} onChange={e => setGegevens({ ...gegevens, land: e.target.value })} required name="country" id="country" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {quantity}</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>
                  {shippingText} - €{shipping}
                </option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>€{totalCost}</span>
              </div>
              <button onClick={handleSubmit} className="bg-black font-semibold hover:bg-gray-400 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default checkout
