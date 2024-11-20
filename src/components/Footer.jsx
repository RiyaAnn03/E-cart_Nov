import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className=" h-[200px]  bg-violet-800 container w-full  text-white " >
  <div className="flex justify-between ">
    {/* intro */}
    <div className="w-[400px] mt-5 ms-2">
      <h5 className="flex items-center text-lg font-semibold">
        <i className="fa-solid fa-truck-fast me-1"></i> Daily Cart
      </h5>
      <p>Designed and built with all the love in the world by Riya with the help of our contributors</p>
      <p>Code licensed MIT, docs CC BY 3.0.</p>
      <p>Currently v5.3.3.0</p>
    </div>

    {/* links */}
    <div className="flex flex-col mt-5 ">
      <h5 className="text-lg font-semibold">Links</h5>
      <Link to="/" className="text-white no-underline hover:underline">
        Landing Page
      </Link>
      <Link to="/home" className="text-white no-underline hover:underline">
        Home Page
      </Link>
      <Link to="/history" className="text-white no-underline hover:underline">
         Watch History Page
      </Link>
    </div>

    {/* guides */}
    <div className="flex flex-col mt-5">
      <h5 className="text-lg font-semibold">Guides</h5>
      <a href="https://react.dev/" target="_blank" className="text-white no-underline hover:underline">
        React
      </a>
      <a href="https://www.npmjs.com/package/react-router" target="_blank" className="text-white no-underline hover:underline">
        React Router
      </a>
      <a href="https://react-bootstrap.github.io/" target="_blank" className="text-white no-underline hover:underline">
        React Bootstrap
      </a>
    </div>

    {/* contact */}
    <div className="flex flex-col mt-5 me-2">
      <h5 className="text-lg font-semibold">Contact</h5>
      <div className="flex">
        <input
          placeholder="Enter your email here"
          type="text"
          className="form-control mr-2 rounded-md p-2 border border-gray-300"
        />
          <i className="fa-solid fa-arrow-right"></i>
      </div>
      <div className="flex justify-between mt-3 space-x-2">
        <a href="#" target="_blank" className="text-white hover:text-gray-400">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" target="_blank" className="text-white hover:text-gray-400">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" target="_blank" className="text-white hover:text-gray-400">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" target="_blank" className="text-white hover:text-gray-400">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="#" target="_blank" className="text-white hover:text-gray-400">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        
      </div>
    </div>
  </div>
  <p className="text-center mt-3">Copyright &copy; July 2024 Batch, E-cart, Built with React</p>
</div>

    </>
  )
}

export default Footer
