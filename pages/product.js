import Link from "next/link"
import Footer from "../components/Footer"
import Head from "next/head"
import { useReducer, useState } from "react"

function reducer(state, action) {
  switch (action.type) {
    case "img1":
      state = {
        img1: true,
        img2: false,
        img3: false
      }
      console.log(state)
      return state
    case "img2":
      state = {
        img1: false,
        img2: true,
        img3: false
      }
      console.log(state)
      return state
    case "img3":
      state = {
        img1: false,
        img2: false,
        img3: true
      }
      console.log(state)
      return state
  }
  d
}

const product = () => {
  const [state, dispatch] = useReducer(reducer, { img1: true, img2: false, img3: false })

  function img1() {
    dispatch({ type: "img1" })
  }
  function img2() {
    dispatch({ type: "img2" })
  }
  function img3() {
    dispatch({ type: "img3" })
  }

  return (
    <>
      <Head>
        <title>Big Ass Hoodie - Product Page</title>
      </Head>
      <div className="flex flex-col space-between">
        <nav className="bg-white shadow">
          <div className="max-w-7xl py-6 mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex  justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <Link href="/">
                  <div className="flex-shrink-0 flex items-center">
                    <img className="block lg:hidden w-16" src="./logo.png" alt="Workflow" />
                    <img className="hidden lg:block w-16" src="./logo.png" alt="Workflow" />
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/">
                    <a className="border-transparent text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-bold">HOME</a>
                  </Link>
                  <Link href="/product">
                    <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-bold">HOODIE</a>
                  </Link>
                  <Link href="/contact">
                    <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-bold">CONTACT</a>
                  </Link>
                </div>
                <div>
                  <div className="ml-8 hidden md:inline-flex h-full items-center">
                    <Link href="/checkout">
                      <a className="text-sm font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-300 hover:text-black rounded">Checkout</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative"></div>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto w-screen">
          <div className="vh80 w-full px-6 md:px-12 pb-12 pt-32 md:flex flex-column justify-between">
            <div className="bg-gray-lighter md:flex md:h-full w-full md:flex-1 bg-cover  bg-center bg-no-repeat vh50">
              <div className="w-full md:pr-1">
                <img className={`${state.img1 ? "" : "hidden"}`} src="./img/hoodieback.jpg" />
                <img className={`${state.img2 ? "" : "hidden"}`} src="./img/hoodiefrontback.jpg" />
                <img className={`${state.img3 ? "" : "hidden"}`} src="./img/hoodie2.png" />
              </div>

              <div className="md:w-1/3 flex md:block h-2/3 justify-between md:item-stretch md:mt-0 mt-2">
                <img onClick={img1} className={`${state.img1 ? "opacity-100" : "opacity-25"} mr-2 md:mr-0 md:mb-2 gallery h-1/3 gallery-1`} src="./img/hoodieback.jpg" />
                <img onClick={img2} className={`${state.img2 ? "opacity-100" : "opacity-25"} mr-2 md:mr-0 md:mb-2 gallery h-1/3 gallery-2`} src="./img/hoodiefrontback.jpg" />
                <img onClick={img3} className={`${state.img3 ? "opacity-100" : "opacity-25"} mr-2 md:mr-0 md:mb-2 gallery h-1/3 gallery-3`} src="./img/hoodie2.png" />
              </div>
            </div>

            <div className="bg-orange-100 text-orange-900 md:h-full w-full md:flex-1 flex justify-center md:mt-20">
              <div className="px-8 md:px-16">
                <h1 className="text-lg md:text-3xl h1-title mb-6">Big Ass Hoodie</h1>
                <p className="mb-6">
                  <span className="font-bold">€35</span>
                </p>
                <p className="mb-6 leading-normal text-sm md:text-base">
                  Lorem ipsum dolor sit amet, ne nec tation nonumy salutatus. Ne malis audire mnesarchum qui. Et praesent mnesarchum appellantur usu. Eu hinc ullum percipitur eos.{" "}
                  <a href="#more" className="text-black text-sm">
                    Read More
                  </a>
                </p>
                <a href="/checkout" className="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-black text-white text-center text-sm py-12 md:mt-40">
          <p>
            Copyright &copy; 2021 Big Ass Hoodies.{" "}
            <a className="underline" style={{ textDecorationColor: "white" }} href="https://www.weblord.dev">
              Made by WebLord
            </a>{" "}
          </p>
        </footer>
      </div>
    </>
  )
}

export default product
