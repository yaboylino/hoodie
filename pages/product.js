import Link from "next/link"
import Footer from "../components/Footer"
import Head from "next/head"

const product = () => {
  return (
    <>
      <Head>
        <title>Big Ass Hoodie - Product Page</title>
      </Head>
      <nav className="flex flex-wrap items-center justify-between px-12 h-32 -mb-32 relative">
        <ul className="order-last md:order-first flex-1 flex justify-center md:justify-start list-reset">
          <li>
            <a href="#" className="text-sm text-grey-darker uppercase no-underline hover:text-black">
              Home
            </a>
          </li>
          <li className="ml-8">
            <a href="#" className="text-sm text-grey-darker uppercase no-underline hover:text-black">
              About
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

      <div className="xl:container h-screen mx-auto">
        <div className="h-screen w-full px-6 md:px-12 pb-6 pt-32 flex flex-wrap justify-between">
          <div className="bg-gray-lighter md:h-full w-full md:flex-1 bg-cover bg-center bg-no-repeat vh50 backpic"></div>

          <div className="bg-orange-100 text-orange-900 md:h-full w-full md:flex-1 flex flex-col justify-center md:items-center mt-10">
            <div className="px-8 md:px-16">
              <h1 className="md:text-3xl text-2xl h1-title mb-6">Big Ass Hoodie - One Size Fits All</h1>
              <p className="mb-6">
                <span className="font-bold">€39.99</span>
              </p>
              <p className="mb-6 leading-normal text-sm md:text-base">Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst.</p>
              <p className="mb-6 leading-normal text-sm md:text-base">Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst.</p>
              <p className="mb-6 leading-normal text-sm md:text-base">Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst.</p>
              <a href="#" className="rounded hover:bg-black hover:text-white block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <footer className="bg-black md:static absolute bottom-200 w-screen text-white text-center text-sm py-12">
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
