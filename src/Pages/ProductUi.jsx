

import { Button } from "react-bootstrap";
import { productMainClass, productSpanClass, roundClass } from "../lib/Classes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
const ProductUi = () => {
    let { id } = useParams()
    const [movieItem, setMovieItem] = useState([])
    console.log(id);
    const [movies] = useOutletContext()
    debugger
    useEffect(() => {
        const mainItem = movies?.find((item) => item?.id === parseInt(id));
        console.log(mainItem);
        setMovieItem(mainItem)
        debugger
    }, [id, movies]);



    return (
        <>
            <div className={productMainClass}>
                <div className="flex flex-col gap-y-5  items-start justify-center">
                    <img
                        src="../images/boat_logo.png"
                        alt="logo"
                        className="sm:w-56 w-[6rem]"
                    />
                    <span className={productSpanClass}>{movieItem?.original_title}</span>


                    <span className="uppercase font-semibold text-red-900">
                        Price: $ {movieItem?.popularity}
                    </span>
                    <p className="w-[300px] sm:text-1xl md:text-xl text-left">
                        {movieItem?.overview}</p>
                    <Button className='text-white mt-[10px] p-[6px] gap-[8px] w-[100px] h-[36px] rounded-md bg-red-600 flex items-center justify-start'>
                        {/* <img
                            className='h-[20px] w-[20px]'
                            src="../images/boat_logo.png"
                            alt="logo"
                        /> */}

                        <p className='text-white pl-[8px] text-[13px] font-bold leading-[15px]'>Add to cart</p>
                    </Button>
                </div>
                <div className={roundClass}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieItem?.poster_path}`} alt="logo" />
                </div>

            </div>
            {/* <div className={photoClass}>
        {Photos.map((item) => (
          <img src={item.img} alt="" className="sm:w-56 w-[8rem]" />
        ))}
      </div> */}
        </>
    );
};

export default ProductUi;
