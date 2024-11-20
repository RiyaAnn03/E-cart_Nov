import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux/slices/productSlice'
const Home = () => {
 const dispatch= useDispatch()
  const {allProducts,loading,errorMsg} =useSelector(state=>state.productReducer)
  console.log(allProducts,loading,errorMsg);
  
 useEffect(()=>{
  dispatch(fetchProduct())

 },[])
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
          allProducts?.map(product=>(
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
</>
}
 
 </div>
 

      
    </>
  )
}

export default Home
