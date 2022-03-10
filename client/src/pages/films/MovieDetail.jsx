import React, { useEffect, useState } from 'react'
import './MovieDetail.scss'
import { useParams } from 'react-router-dom'
import axios from './axios'
import { AiOutlineEye, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { CgStopwatch } from 'react-icons/cg'
import ReviewCard2 from '../../components/films/reviewCard/ReviewCard2'

const MovieDetail = () => {

    const { movieId } = useParams();
    const base_url = "https://image.tmdb.org/t/p/original"

    const [movie, setMovie] = useState({})
    const [credits, setCredits] = useState()
    const [tabbed, setTabbed] = useState("cast")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/movie/${movieId}?api_key=2750142d8e261787e7239ae8d1758d35&language=en-US`);
            const request2 = await axios.get(`/movie/${movieId}/credits?api_key=2750142d8e261787e7239ae8d1758d35&language=en-US`);
            setMovie(request.data);
            setCredits(request2.data);
        }
        fetchData();
    }, [movieId]);

    return (
        <div id='PJIeo'>
            {movie &&
                <>
                    <div id='backdrop-div' className='flex items-center justify-center'>
                        <img className='opacity-25 object-cover' src={`${base_url}${movie.backdrop_path}`} alt="" />
                    </div>

                    <div className='flex justify-center items-center flex-col' id='movie-detail-container'>
                        <div id='movie-detail-container-flex1' className='flex relative bottom-24'>
                            <div className='relative left-8' id='movie-detail-container-flex1-div1'>
                                <img className='sticky top-5 rounded-lg' src={`${base_url}${movie.poster_path}`} alt="" />
                            </div>
                            <div id='movie-detail-container-flex1-div2' className='flex flex-col ml-4 relative left-8'>
                                <div className='flex items-center'>

                                    <h1 className='text-3xl text-white ml-2'>{movie.original_title}</h1>
                                    <h3 className='text-base'>{movie?.release_date?.slice(0, 4)}</h3>
                                    <p className='text-sm'>Directed By</p>
                                    {
                                        credits?.crew?.map((crewMember) => {
                                            if (crewMember.job === 'Director') {
                                                return <h3 className=''>{crewMember.name}</h3>
                                            } else {
                                                return null
                                            }
                                        })
                                    }
                                </div>
                                <div className='mt-4' id='movie-detail-container-flex1-div2-tagline'>
                                    <p className='text-sm'>{movie?.tagline}</p>
                                </div>
                                <div className='mt-4 mr-8
                                ' id='movie-detail-container-flex1-div2-overview'>
                                    <p>{movie.overview}</p>
                                </div>
                                <div className='flex flex-col mt-4 ml-1' id='movie-detail-container-flex1-div2-cast'>
                                    <div className='flex mt-2' id='movie-detail-container-flex1-div2-cast-div1'>
                                        <p onClick={() => setTabbed("cast")} className='cursor-pointer'>Cast</p>
                                        <p onClick={() => setTabbed("crew")} className='cursor-pointer'>Crew</p>
                                        <p onClick={() => setTabbed("details")} className='cursor-pointer'>Details</p>
                                        <p onClick={() => setTabbed("genres")} className='cursor-pointer'>Genre</p>
                                    </div>
                                    <hr />
                                    <div className='flex flex-wrap mt-2'>
                                        {
                                            tabbed === "cast" ?
                                                credits?.cast?.map((castMember) => {
                                                    return (
                                                        <a className='px-1 py-0.5 rounded mx-0.5 my-1' href="#"><span className='text-xs font-bold'>{castMember.name}</span></a>
                                                    )
                                                })
                                                : tabbed === "crew" ?
                                                    credits?.crew?.map((crewMember) => {
                                                        return (
                                                            <a className='px-1 py-0.5 rounded mx-0.5 my-1' href="#"><span className='text-xs font-bold'>{crewMember.name}</span></a>
                                                        )
                                                    }) : tabbed === "details" ?
                                                        <div className='flex flex-col' id='cast-details'>
                                                            <div className='flex mb-2'>
                                                                <p className='mr-2'>Studios</p>
                                                                <div className='flex flex-wrap'>
                                                                    {
                                                                        movie?.production_companies?.map((company) => {
                                                                            return <a className='text-xs rounded text-slate-400 m-0.5 flex items-center py-0.5 px-1'><span>{company.name}</span></a>
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className='flex mb-2'>
                                                                <p className='mr-2'>Countries</p>
                                                                <div className='flex flex-wrap'>
                                                                    {
                                                                        movie?.production_countries?.map((country) => {
                                                                            return <a className='text-xs rounded text-slate-400 m-0.5 flex items-center py-0.5 px-1'><span>{country.name}</span></a>
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className='flex mb-2'>
                                                                <p className='mr-2'>Languages</p>
                                                                <div className='flex flex-wrap'>
                                                                    {
                                                                        movie?.spoken_languages?.map((language) => {
                                                                            return <a className='text-xs rounded text-slate-400 m-0.5 flex items-center py-0.5 px-1'><span>{language.name}</span></a>
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : tabbed === "genres" ?
                                                            movie?.genres?.map((genre) => {
                                                                return (
                                                                    <a className='px-1 py-0.5 rounded mx-0.5 my-1' href="#"><span className='text-xs font-bold'>{genre.name}</span></a>
                                                                )
                                                            }) : null
                                        }
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col rounded-md ml-2 relative top-14 h-64' id='movie-detail-container-flex1-div3'>
                                <div className='flex m-2'>
                                    <div className='flex flex-col items-center ml-2 p-1'>
                                        <i><AiOutlineEye size={40} color='#BBCCDD' /></i>
                                        <p className='text-xs'>Watch</p>
                                    </div>
                                    <div className='flex flex-col items-center ml-2 p-1'>
                                        <i><AiOutlineHeart size={40} color='#BBCCDD' /></i>
                                        <p className='text-xs'>Like</p>
                                    </div>
                                    <div className='flex flex-col items-center ml-2 p-1'>
                                        <i><CgStopwatch size={40} color='#BBCCDD' /></i>
                                        <p className='text-xs'>Watchlist</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex flex-col items-center m-2'>
                                    <p className='text-xs mt-1'>Rate</p>
                                    <div className='mt-1'>
                                        <i className='flex'>
                                            <AiFillStar color='#2c3440' size={25} />
                                            <AiFillStar color='#2c3440' size={25} />
                                            <AiFillStar color='#2c3440' size={25} />
                                            <AiFillStar color='#2c3440' size={25} />
                                            <AiFillStar color='#2c3440' size={25} />
                                        </i>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex items-center justify-center mt-1 mb-1'>
                                    <a href="#">Review or Log</a>
                                </div>
                                <hr />
                                <div className='flex items-center justify-center mt-1 mb-1'>
                                    <a href="#">Add to lists</a>
                                </div>
                                <hr />
                                <div className='flex items-center justify-center mt-1 mb-1'>
                                    <a href="#">Share</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col relative left-36' id='movie-review'>
                            <p>Reviews from friends</p>
                            <hr className='mb-3' />
                            <ReviewCard2/>
                            <ReviewCard2/>
                            <ReviewCard2/>
                        </div>
                    </div>

                </>
            }
        </div>
    )
}

export default MovieDetail