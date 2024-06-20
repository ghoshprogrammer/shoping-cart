
import { createSlice } from '@reduxjs/toolkit'
import productData from '../productData'

export const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        cart: [],
        item: productData,
        totalPrice: 0,
        totalQuantity: 0,
    },
    reducers: {

        addToCart: (state, action) => {
            const fIndex = state.cart.findIndex((item) => (item.id === action.payload.id))
            if (fIndex >= 0) {
                console.log(fIndex)
                state.cart[fIndex].quantity += 1
            }
            else {
                state.cart.push(action.payload)
            }


        },
        increment: (state, action) => {
            state.cart.filter((item) => {
                if (item.id == action.payload) {
                    return item.quantity += 1
                }
                else {
                    return state
                }
            })

        },

        decrement: (state, action) => {
            state.cart.filter((item) => {
                if (item.id == action.payload) {
                    if (item.quantity <= 1) {
                        return state
                    }
                    else {
                        return item.quantity -= 1
                    }
                }
            })
        },

        deleteFun: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem
                const itemTotal = price * quantity
                cartTotal.totalPrice += itemTotal

                cartTotal.totalQuantity += quantity
                return cartTotal
            }, { totalPrice: 0, totalQuantity: 0 })
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        }

    }
})
export const { addToCart, increment, decrement, deleteFun, getCartTotal } = cartSlice.actions

export default cartSlice.reducer