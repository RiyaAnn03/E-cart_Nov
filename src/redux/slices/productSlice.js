import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// action return promise
 export const fetchProduct=createAsyncThunk("products/fetchProduct",async ()=>{
   const result= await axios.get("https://dummyjson.com/products")
  //  console.log(result.data.products);
sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
  return result.data.products
 })
const productSlice= createSlice({
    name:'products',
    initialState:{
        allProducts: [],
        dummyAllProducts:[],
        loading:false,
        errorMsg:""
    },reducers:{
      searchProduct:(state,actionByHeader)=>{
     state.allProducts=   state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))

      }

    },
    extraReducers:(builder)=>{
      builder.addCase(fetchProduct.fulfilled,(state,apiResult)=>{
        state.allProducts =apiResult.payload
        state.dummyAllProducts =apiResult.payload

        state.loading=false
        state.errorMsg=""
      })
      builder.addCase(fetchProduct.pending,(state)=>{
        state.allProducts =[]
        state.dummyAllProducts =[]

        state.loading=true
        state.errorMsg=""
      })
      builder.addCase(fetchProduct.rejected,(state)=>{
        state.allProducts =[]
        state.dummyAllProducts =[]

        state.loading=false
        state.errorMsg="API call failed"
      })
    }
})
export const {searchProduct}=productSlice.actions
export default productSlice.reducer

