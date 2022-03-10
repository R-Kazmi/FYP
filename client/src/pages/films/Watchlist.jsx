import React from 'react'
import './Watchlist.scss'
import { RiArrowDownSLine} from 'react-icons/ri'
import {BsFillEyeFill} from 'react-icons/bs'
import FilmCard3 from '../../components/films/film-card/FilmCard3'

const Watchlist = () => {
    return (
        <div className='h-screen flex justify-center' id='ZDmFT'>
            <div className='flex flex-col mt-5' id='ZDmFT-div1'>
                <p className='text-zinc-400 mb-1'>You want to see 95 films</p>
                <div className='flex justify-end border-y-2 border-slate-600 py-1 text-zinc-400 text-sm'>
                    <div className='flex ml-3 items-center'>
                        <p>Decade</p>
                        <i><RiArrowDownSLine/></i>
                    </div>
                    <div className='flex ml-3 items-center'>
                        <p>Genre</p>
                        <i><RiArrowDownSLine/></i>
                    </div>
                    <div className='flex ml-3 items-center'>
                        <p>Service</p>
                        <i><RiArrowDownSLine/></i>
                    </div>
                    <div className='flex ml-3 items-center'> 
                        <p>Sort By</p>
                        <i><RiArrowDownSLine/></i>
                    </div>
                    <div className='flex ml-3 items-center'>
                        <i><BsFillEyeFill/></i>
                        <i><RiArrowDownSLine/></i>
                    </div>
                </div>
                <div className='mt-3 justify-between flex flex-wrap'>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                    <FilmCard3/>
                </div>
            </div>
            <div className='text-zinc-400 w-60 ml-10 mt-5' id='ZDmFT-div2'>
                <section className='flex flex-col items-center justify-evenly rounded h-40 mt-5'>
                    <p className='text-sm capitalize'>Make this list Private</p>
                    <hr />
                    <p className='capitalize text-sm '>import films to watchlist</p>
                    <hr />
                    <p className='capitalize text-sm '>export watchlist</p>
                    <hr />
                    <p className='capitalize text-sm '>clear watchlist</p>
                </section>

                <div className='mt-5'>
                    <p className='text-sm tracking-wide'>ADD A FILM</p>
                    <hr className='my-1'/>
                    <input className='w-full mt-1 bg-zinc-600 rounded py-1 px-2' type="text" placeholder='Search films...'/>
                </div>
            </div>
        </div>
    )
}

export default Watchlist