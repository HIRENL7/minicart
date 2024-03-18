import { useState, useEffect, useDebugValue } from 'react';
import { Button, Card, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import useDebounce from '../hooks/useDebounce';
import { applyButtonClass } from '../lib/Classes';
import { useNavigate } from "react-router-dom";
const Customer = ({ movies, setMovies }) => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    // useDebounce() 
    function ascendingOrderFilter(a, b) {
        console.log(a, b, "atoz");
        const titleA = a.title.charAt(0).toUpperCase();
        const titleB = b.title.charAt(0).toUpperCase();
        if (titleA < titleB) {
            return -1;
        } else if (titleA > titleB) {
            return 1;
        } else {
            return 0;
        }
    }

    function descendingOrderFilter(a, b) {
        console.log(a, b, "ztoa");
        const firstLetterA = a.title.charAt(0).toUpperCase();
        const firstLetterB = b.title.charAt(0).toUpperCase();
        if (firstLetterA < firstLetterB) {
            return 1;
        } else if (firstLetterA > firstLetterB) {
            return -1;
        } else {
            return 0;
        }

    }

    const onToggleClickZtoA = () => {
        const sortedMovies = [...movies].sort(descendingOrderFilter);
        console.log(sortedMovies);
        setMovies(sortedMovies);
    };
    const onToggleClickAtoZ = () => {
        const sortedMoviesAtoZ = [...movies].sort(ascendingOrderFilter);
        setMovies(sortedMoviesAtoZ);
    };


    const filteredReviews = movies?.filter((item) => {
        if (searchText === "" || searchText.trim() === "") {
            return true; // Show all reviews if the search term is empty
        } else {
            const searchTermLower = searchText.toLowerCase();
            const title = `${item.title}`.toLowerCase();
            return (
                title.includes(searchTermLower)

            );
        }
    });
    console.log(filteredReviews);
    return (
        <>

            <div className='flex justify-center items-between flex-col'>
                <div className='flex justify-start items-center'>
                    <p className='font-bold text-2xl pr-[10px]'>Search Products</p>
                    <div className='relative group'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className='absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4'>
                            <circle cx="8.03713" cy="8.11061" r="6.76271" stroke="#004B95" strokeWidth="2" />
                            <path d="M14.7998 14.8735L20.2744 20.0261" stroke="#004B95" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <input type='text' onChange={(e) => setSearchText(e.target.value)} className='bg-transparent opacity-1 lg:w-[525px] sm:w-[325px] border  rounded-lg text-sm text-black px-4 py-2  ' placeholder='What do you want to watch?  ' />
                    </div>
                </div>
                <Row className='flex flex-col justify-center items-start gap-2'>
                    <Col lg={12}>
                        <h5 className={`${applyButtonClass}  bg-blue-950 rounded-[10px] `}>FILTERS</h5>
                    </Col>
                    <Col xl={12} lg={12} md={12} className='flex flex-col items-start gap-1' >
                        {/* <h6 className={`${applyButtonClass} bg-blue-950 rounded-[10px] w-[200px] `}>Filter By Name</h6> */}
                        <div className='flex gap-4 justify-center items-start'>
                            <button
                                className={`${applyButtonClass} bg-blue-600 `}
                                onClick={() => onToggleClickAtoZ()}
                            >
                                A-Z
                            </button>
                            <button
                                className={`${applyButtonClass} bg-blue-600 `}
                                onClick={() => onToggleClickZtoA()}
                            >
                                Z-A
                            </button>
                        </div>
                    </Col>
                </Row>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-4xl leading-[46.87px]'>Featured Products</p>
                    <div className='flex justify-between items-center'>
                        <p>See More</p>
                        <img src='images/Chevronright.png' alt='logo' />
                    </div>
                </div>
                <Container className='h-[200px]'>
                    <Row className='flex gap-2' xxl={12} xl={6} lg={6}>
                        {<Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}

                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {filteredReviews?.map((movie, index) => (

                                <>
                                    {console.log(movie)}
                                    <SwiperSlide>
                                        <Col key={index} xxl={3} xl={3} lg={3} sm={1}>
                                            <Card className='py-[22px] pr-[22px] mb-[30px] w-full' onClick={() => navigate(`/${movie.id}`)} >
                                                <Card.Img className='absolute right-[30px] top-[30px]' variant="top" src={'images/Favorite.png'} />
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                                <Card.Body className='flex justify-center items-start flex-col'>
                                                    <Card.Text className='mt-[8px] text-[#9CA3AF] leading-[15.62px] text-[12px] font-bold'>
                                                        USA - {movie.release_date.slice(0, 4)}
                                                    </Card.Text>
                                                    <Card.Title className='mt-[8px] text-[#111827] leading-[23.44px] text-[18px] font-bold'>{movie.title}</Card.Title>
                                                    <div className='flex justify-start gap-6 items-center'>
                                                        <div className='flex  items-center pt-[10px]'>
                                                            <Card.Img variant="top" src={`images/imdb.png`} />
                                                            <p className='pl-[10px]'>{movie.vote_average}</p>
                                                        </div>
                                                        <div className='flex  items-center pt-[10px]'>
                                                            <Card.Img variant="top" src={`images/tomato.png`} />
                                                            <p className=' pl-[10px]'>{movie.popularity} %</p>
                                                        </div>
                                                    </div>
                                                    <Card.Text className='mt-[8px] text-[#9CA3AF] leading-[15.62px] text-[12px] font-bold'>
                                                        Action, Drama, History
                                                    </Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </SwiperSlide>

                                </>
                            ))}
                        </Swiper>}

                    </Row>


                </Container>
            </div>
        </>
    )
}

export default Customer