import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../utils/status"

const initalState = {
    Products:[],
    productsStatus : STATUS.IDLE,
    productDetail : [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk('getproducts', async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
})
export const getCategoryProducts = createAsyncThunk('getcategory', async(category)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category${category}`)
    const data = await response.json()
    return data
})

export const getProducts = createAsyncThunk('getproducts', async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) =>{
            state.productsStatus = STATUS.LOADING
        })
        .addCase(getProducts.fulfilled, (state, action) =>{
            state.productsStatus = STATUS.SUCCES
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) =>{
            state.productsStatus = STATUS.FAIL
        })
        .addCase(getDetailProduct.rejected, (state, action) =>{
            state.productsStatus = STATUS.FAIL
        })
        .addCase(getDetailProduct.rejected, (state, action) =>{
            state.productsStatus = STATUS.FAIL
        })
        .addCase(getDetailProduct.rejected, (state, action) =>{
            state.productsStatus = STATUS.FAIL
        })
        .addCase(getCategoryProducts.pending, (state, action) =>{
            state.productsStatus = STATUS.LOADING
        })
        .addCase(getCategoryProducts.fulfilled, (state, action) =>{
            state.productsStatus = STATUS.SUCCES
            state.products = action.payload
        })
        .addCase(getCategoryProducts.rejected, (state, action) =>{
            state.productsStatus = STATUS.FAIL
        })

    }
})

export default productSlice.reducer;