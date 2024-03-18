import React, { useEffect, useState } from 'react'
import ProductUi from './ProductUi'
import Customer from './Customer'
import { Outlet, useParams } from 'react-router-dom'



const Home = () => {
    let { id } = useParams()
    console.log(id);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWM3Zjc2ZmRiNWJkMWRkNjMyZjc0NjEyMDEwODRjZSIsInN1YiI6IjY1ZjMwYzM0YzQ5MDQ4MDE2MzE5ZTU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9kykYHiD_xmGcVlgyXrewYjc74xtUB6MjN4dcgKg5D0'
                    }
                };
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
                const data = await response.json();
                console.log(data.results);
                setMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
    }, []);
    return (
        <>
            <div className="flex flex-col items-between justify-between pt-[50px] pl-10 pr-10 mt-[75px]">
                {
                    (id === undefined) && <Customer setMovies={setMovies} movies={movies} />
                }
                {/* <Register /> */}
                {/* <ProductUi /> */}
            </div>

            <Outlet context={[movies]} />
        </>


    )
}

export default Home