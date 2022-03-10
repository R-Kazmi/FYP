import React from 'react'
import './ReviewCard2.scss'
import { AiFillStar } from 'react-icons/ai'
import {FaCommentAlt, FaHeart} from 'react-icons/fa'

const ReviewCard2 = () => {
  return (
    <div className='flex mb-4' id='bamp2'>
      <div className=''>
        <img className='h-10 w-10 object-cover rounded-full' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='review' />  
      </div>
      <div className='flex flex-col ml-4' id='bamp2-2'>
          <div className='flex'>
            <a className='text-zinc-300 text-sm ml-0.5' href="">Review by Russman</a>
            <i className='ml-0.5'><AiFillStar color='green'/></i>
            <i className='ml-0.5'><FaCommentAlt color='#678'/></i>
          </div>
          <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam error quasi laboriosam eligendi. Earum, inventore. Facere, est! Voluptas molestias, impedit et veniam laborum hic vero, ut quidem aspernatur, aliquam cumque?</p>
          <div className='flex'>
              <p className='flex items-center text-xs my-1'>Like Review <span className='mx-2'><FaHeart/></span> 32 Likes</p>
          </div>
          <hr className='mt-1'/>
      </div>
    </div>
  )
}

export default ReviewCard2