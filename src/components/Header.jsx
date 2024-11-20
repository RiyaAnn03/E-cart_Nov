import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
 const dispatch= useDispatch()
  const userWishlist =useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white font-bold'>
      <Link className='text-2x1' to={'/'}><i className='fa-solid fa-truck-fast me-1'> </i>Daily Cart</Link>
      <ul className='flex-1 text-right'>
        { insideHome &&
          <li className='list-none inline-block px-5'><input style={{width:'300px'}} onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='rounded p-1 text-black' type="text" placeholder='Search Products Here!' /></li>
        }
        <li className='list-none inline-block px-5' > <Link to={'/wishlist'}><i className="fa-solid fa-heart text-red-600"></i>Wishlist <span className='bg-black text-white rounded p-1'>{userWishlist?.length}</span></Link></li>
        <li className='list-none inline-block px-5' > <Link to={'/cart'}><i className='fa-solid fa-cart-plus text-green-600'></i>Cart <span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link></li>

      </ul>
    </nav>
  )
}

export default Header