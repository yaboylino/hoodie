import Link from "next/link"

export default function Nav() {
  return (
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
          <Link href="/product">
            <a className="text-sm font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-300 hover:text-black rounded rounded">Buy Now</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
