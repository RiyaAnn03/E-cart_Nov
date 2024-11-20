import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux/slices/productSlice'
const Home = () => {
 const dispatch= useDispatch()
  const {allProducts,loading,errorMsg} =useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,errorMsg);
  const [currentPage,setCurrentPage]=useState(1)
  const productsPerPage=8
  const totalPages=Math.ceil(allProducts?.length/productsPerPage)
  const currentPageProductLastIndex=currentPage*productsPerPage
  const currentPageProductFirstIndex=currentPageProductLastIndex-productsPerPage
  const visibleAllProducts=allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)
  
 useEffect(()=>{
  dispatch(fetchProduct())

 },[])
 const navigateToNextPage=()=>{
  if(currentPage!=totalPages){
    setCurrentPage(currentPage+1)
  }
 }
 const navigateToPrevPage=()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
 }

  return (
    <>
    <Header insideHome={true}/>

 <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
  {loading?
  <div className="flex justify-content-center items-center my-5 text-lg">
 <img width={'70px'} height={'70px'} src="https://media3.giphy.com/media/uIJBFZoOaifHf52MER/200w.gif?cid=6c09b95228fquiaaai1iguxswuiwkikrnpa1lwawt7np1ism&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
  Loading..
  </div>
  
    :
<>
  
      <div className="grid grid-cols-4 gap-4">
        {
          allProducts?.length>0 ?
          visibleAllProducts?.map(product=>(
            <div key={product?.id} className="rounded border p-2 shadow">
              <img  width={'100%'} height={'200px'}  src={product?.thumbnail} alt="" />
              <div className="text-center">
                <h3 className='text-x1 font-bold'>{product?.title}</h3>
                <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>More view..</Link>
              </div>
            </div>
          ))
          
            
            :
            <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
              Pround not found!
            </div>
  }
        </div>

               <div className="text-2xl text-center font-bold mt-20">
                <span onClick={navigateToPrevPage} className="cursor-pointer"><i className="fa-solid fa-backward me-5"></i></span>
                <span>{currentPage} of {totalPages}</span>
                <span onClick={navigateToNextPage} className="cursor-pointer"><i className="fa-solid fa-forward ms-5"></i></span>

               </div>

        
</>
}
 
 </div>
 

      
    </>
  )
}

export default Home
