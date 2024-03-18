import React from 'react'
import ReviewCart from '../Components/Cart/ReviewCart'
import Checkout from '../Components/Cart/Checkout'
import { cartMain, mainHrClass } from '../lib/Classes'

const OrderSummary = () => {
    return (
        <>
            <div className={`${cartMain} justify-center mt-[75px]`}>
                <ReviewCart />
                <hr className={mainHrClass} />
                <Checkout />
            </div>
        </>
    )
}

export default OrderSummary