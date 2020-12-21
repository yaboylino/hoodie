import Navbar from "../components/Navbar"
import InstagramEmbed from "react-instagram-embed"
import Footer from "../components/Footer"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import Layout from "../components/Layout"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Big Ass Hoodie - Home Page</title>
      </Head>
      <Navbar />
      <div className="lg:container lg:mx-auto mt-10">
        <div class="w-full flex flex-wrap md:h-screen pt-32">
          <div class="pt-6 md:pt-0 w-full md:flex-1 md:order-last">
            <img src="./img/hoodie.jpg" class="w-full relative h-full z-10 object-cover" />
          </div>
          <div class="w-full p-6 pb-12 md:p-12 md:w-5/12 flex justify-center items-center relative">
            <div class="w-full relative text-center py-12 px-12 md:p-0 md:text-right">
              <motion.h1 initial={{ translateX: -500 }} animate={{ translateX: 0 }} class="text-4xl mb-4 w-full h1-title">
                Big Ass Hoodie
              </motion.h1>
              <motion.h2 initial={{ translateX: -500 }} animate={{ translateX: 0 }} transition={{ delay: 0.25 }} class="text-2xl mb-4 font-semibold">
                Faketekst
              </motion.h2>
              <motion.p initial={{ translateX: -500 }} animate={{ translateX: 0 }} transition={{ delay: 0.5 }} class="leading-loose tracking-wide text-gray-700">
                Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.
              </motion.p>
              <div class="w-full py-12 bg-white">
                <div class="container max-w-4xl mx-auto flex flex-wrap">
                  <div class="w-full flex flex-wrap">
                    <motion.div initial={{ translateX: -500 }} animate={{ translateX: 0 }} transition={{ delay: 0.75 }} class=" w-1/2 p-2">
                      <img src="./img/hoodie.jpg" class="w-full h-48 object-cover" />
                    </motion.div>
                    <motion.div initial={{ translateX: 500 }} animate={{ translateX: 0 }} transition={{ delay: 1 }} class=" w-1/2 p-2 z-0">
                      <img src="./img/hoodie.jpg" class="w-full h-48 object-cover" />
                    </motion.div>
                    <motion.div initial={{ translateX: -500 }} animate={{ translateX: 0 }} transition={{ delay: 1.25 }} class=" w-1/2 p-2">
                      <img src="./img/hoodie.jpg" class="w-full h-48 object-cover" />
                    </motion.div>
                    <motion.div initial={{ translateX: 500 }} animate={{ translateX: 0 }} transition={{ delay: 1.5 }} class=" w-1/2 p-2">
                      <img src="./img/hoodie.jpg" class="w-full h-48 object-cover" />
                    </motion.div>
                  </div>
                </div>
              </div>
              <motion.div initial={{ translateX: -500 }} animate={{ translateX: 0 }} transition={{ delay: 2 }} className="w-full md:pr-2 mt-10">
                <Link className="w-full flex justify-center" href="/product">
                  <a className="text-sm font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-300 hover:text-black rounded">View Hoodie</a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full -mt-6 pt-32 pb-24 px-12 text-center bg-black text-white">
        <h2 className="text-4xl mb-6">FOLLOW US ON INSTAGRAM @BIGASSHOODIES</h2>
        <InstagramEmbed url="https://www.instagram.com/bigasshoodies" clientAccessToken="IGQVJXWkFvdzhVdF9oY2xRY0VyM1prSXpXOVlJcUoyR2pBdW55amFvaDh4THNaNXdlaElEODNXQkF0aEF5MHdHaWFjZAzhjQ3k3dHEtTHY3TGE1NmFZAOEdMeXFoZAC1BUUlvTFpVWG84T1IzNUV6eWdGeQZDZD" maxWidth={320} hideCaption={false} containerTagName="div" protocol="" injectScript onLoading={() => {}} onSuccess={() => {}} onAfterRender={() => {}} onFailure={() => {}} />
      </div>

      <div className="py-24 px-12">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-4 flex flex-wrap mb-12 md:mb-0">
            <div className="p-2 w-1/2">
              <img src="./img/hoodie.jpg" className="w-full h-64 object-cover" />
            </div>
            <div className="p-2 w-1/2">
              <img src="./img/hoodie.jpg" className="w-full h-64 object-cover" />
            </div>
            <div className="p-2 w-full">
              <img src="./img/hoodie.jpg" className="w-full h-64 object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <h2 className="text-4xl mb-10 h2-title">Big Ass Hoodies</h2>
            <div className="max-w-lg">
              <p className="mb-6 text-gray-700">Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.</p>
              <p className="mb-6 text-gray-700">Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.</p>
              <div className="w-full mt-10">
                <Link className="w-full flex justify-center" href="/product">
                  <a className="text-sm font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-300 hover:text-black rounded rounded">View Hoodie</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
