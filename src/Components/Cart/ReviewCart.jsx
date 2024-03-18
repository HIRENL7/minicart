import React from 'react'
import { cartTableData, cartTableTitle } from '../../lib/Array';
// import { cartTableData, cartTableTitle } from "../../../lib/constants";

const ReviewCart = () => {
    return (
        <div className='sm:mt-[25px]'>
            <table className="table-auto">
                <thead className="text-gray-500">
                    <tr>
                        {cartTableTitle.map((item) => (
                            <Tabletitle key={item.key} item={item} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cartTableData.map((item) => (
                        <Tabledata key={item.key} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewCart;

function Tabletitle({ item }) {
    return <td className="px-10 pb-10 ">{item.title}</td>;
}
function Tabledata({ item }) {
    return (
        <tr className="text-center">
            <td>
                <div className="flex items-center gap-x-3">
                    <div>
                        <img src="/images/buds.png" className=' h-[70px]' alt="logo" />
                    </div>
                    <div className="flex flex-col items-start">
                        <p>{item.title}</p>
                        <span className="text-gray-500 text-xs">{item.title_span}</span>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center gap-x-5 justify-center">
                    <button>-</button>
                    <p className="bg-[#FFA412] w-8 h-6 rounded-md">1</p>
                    <button>+</button>
                </div>
            </td>
            <td>{item.price}</td>
            <td>{item.total}</td>
        </tr>
    );
}
