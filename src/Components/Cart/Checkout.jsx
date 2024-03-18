import React from 'react'
import { applyButtonClass, centerDiv, checkoutButtonClass, inputClass } from '../../lib/Classes'



const Checkout = () => {
    return (
        <>
            <div>
                <p className="font-medium">Order Summary</p>
                <div className="flex items-center gap-x-64 mt-[4.5rem]">
                    <div className="flex items-center gap-x-3">
                        <p>Items</p>
                        <span>5</span>
                    </div>
                    <div>
                        <p>₹54900</p>
                    </div>
                </div>
                <div className="mt-10 flex flex-col">
                    <label className={`${centerDiv}`}>Shipping Address</label>
                    <input
                        type="text"
                        placeholder="standard delivery - ₹54900"
                        className={inputClass}

                    />                 
                    <hr className="w-full h-[0.1rem] bg-gray-500 mt-5" />
                    <div className="flex items-center justify-between mt-3">
                        <p>Total Cost</p>
                        <p>₹54900</p>
                    </div>
                    <button className={checkoutButtonClass}>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Checkout