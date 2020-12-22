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
      <nav className="container w-screen mx-auto flex flex-wrap items-center justify-between px-12 h-32 -mb-32 relative">
        <ul className="order-last md:order-first flex-1 flex justify-center md:justify-start list-reset">
          <li>
            <a href="#" className="text-sm text-grey-darker uppercase no-underline hover:text-black">
              Home
            </a>
          </li>
          <li className="ml-8">
            <a href="#" className="text-sm text-grey-darker uppercase no-underline hover:text-black">
              Contact
            </a>
          </li>
        </ul>

        <div className="w-full md:w-auto flex justify-center">
          <Link href="/">
            <a className="block text-center text-black text-lg no-underline">
              <img src="./logo.png" alt="logo" width="50px" />
            </a>
          </Link>
        </div>

        <ul className="flex-1 flex justify-center md:justify-end list-reset">
          <li className="ml-8 hidden md:inline">
            <Link href="/checkout">
              <a className="text-sm font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-300 hover:text-black rounded">Checkout</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto w-screen">
        <div class="vh80 w-full px-6 md:px-12 pb-12 pt-32 flex flex-wrap justify-between">
          <div className="bg-gray-lighter md:flex md:h-full w-full md:flex-1 bg-cover  bg-center bg-no-repeat vh50">
            <div className="w-full md:pr-1">
              <img className={`${state.img1 ? "" : "hidden"}`} src="./img/hoodieback.jpg" />
              <img className={`${state.img2 ? "" : "hidden"}`} src="./img/hoodiefrontback.jpg" />
              <img className={`${state.img3 ? "" : "hidden"}`} src="./img/hoodie2.png" />
            </div>

            <div className="w-1/3 md:w-1/3 flex md:block justify-between md:mt-0 mt-2">
              <img onClick={img1} className={`${state.img1 ? "opacity-100" : "opacity-25"} mr-1 gallery gallery-1`} src="./img/hoodieback.jpg" height="33.3%" />
              <img onClick={img2} className={`${state.img2 ? "opacity-100" : "opacity-25"} mr-1 gallery gallery-2`} src="./img/hoodiefrontback.jpg" height="33.3%" />
              <img onClick={img3} className={`${state.img3 ? "opacity-100" : "opacity-25"} mr-1 gallery gallery-3`} src="./img/hoodie2.png" height="33.3%" />
            </div>
          </div>

          <div class="bg-orange-100 text-orange-900 md:h-full w-full md:flex-1 flex justify-center mt-20">
            <div class="px-8 md:px-16">
              <h1 class="text-lg md:text-3xl h1-title mb-6">Big Ass Hoodie</h1>
              <p class="mb-6">
                <span class="font-bold">€35</span>
              </p>
              <p class="mb-6 leading-normal text-sm md:text-base">
                Lorem ipsum dolor sit amet, ne nec tation nonumy salutatus. Ne malis audire mnesarchum qui. Et praesent mnesarchum appellantur usu. Eu hinc ullum percipitur eos.{" "}
                <a href="#more" class="text-black text-sm">
                  Read More
                </a>
              </p>
              <a href="/checkout" class="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white text-center text-sm py-12 mt-40">
        <p>
          Copyright &copy; 2021 Big Ass Hoodies.{" "}
          <a className="underline" style={{ textDecorationColor: "white" }} href="https://www.weblord.dev">
            Made by WebLord
          </a>{" "}
        </p>
      </footer>
    </>
  )
}

export default product
