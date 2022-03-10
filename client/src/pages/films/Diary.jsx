import React from 'react'
import './Diary.scss'
import { FaHeart, FaStar } from 'react-icons/fa'
import { AiOutlineRedo, AiOutlineAlignLeft } from 'react-icons/ai' 
import { BsThreeDots} from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi'

const Diary = () => {
    return (
        <div className='flex justify-center h-screen' id='M3K8s'>
            <table className='table-auto flex flex-col w-9/12 mt-5'>
                <thead className='flex flex-col'>
                    <tr className='flex justify-between items-center'>
                        <th>Month</th>
                        <th>Day</th>
                        <th className='mr-24'>Film</th>
                        <th>Released</th>
                        <th>Rating</th>
                        <th>Like</th>
                        <th>Rewatch</th>
                        <th>Review</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody className='flex flex-col mt-3'>
                    <tr className='flex justify-between items-center font-bold mb-3'>
                        <td>June</td>
                        <td>3rd</td>
                        <td className='flex items-center'>
                            <img className='h-14 w-10 rounded object-cover' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                            <p className='ml-1'>Dont Look up</p>
                        </td>
                        <td>2021</td>
                        <td className='flex'>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                        </td>
                        <td>
                            <i><FaHeart/></i>
                        </td>
                        <td>
                            <i><AiOutlineRedo size={20}/></i>
                        </td>
                        <td>
                            <i><AiOutlineAlignLeft size={20}/></i>
                        </td>
                        <td className='flex'>
                            <i className='mr-1'><BiPencil size={20} color='green'/></i>
                            <i><BsThreeDots size={20} color='green'/></i>
                        </td>
                    </tr>
                    <tr className='flex justify-between items-center font-bold mb-3'>
                        <td>June</td>
                        <td>3rd</td>
                        <td className='flex items-center'>
                            <img className='h-14 w-10 rounded object-cover' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                            <p className='ml-1'>Dont Look up</p>
                        </td>
                        <td>2021</td>
                        <td className='flex'>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                        </td>
                        <td>
                            <i><FaHeart/></i>
                        </td>
                        <td>
                            <i><AiOutlineRedo size={20}/></i>
                        </td>
                        <td>
                            <i><AiOutlineAlignLeft size={20}/></i>
                        </td>
                        <td className='flex'>
                            <i className='mr-1'><BiPencil size={20} color='green'/></i>
                            <i><BsThreeDots size={20} color='green'/></i>
                        </td>
                    </tr>
                    <tr className='flex justify-between items-center font-bold mb-3'>
                        <td>June</td>
                        <td>3rd</td>
                        <td className='flex items-center'>
                            <img className='h-14 w-10 rounded object-cover' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                            <p className='ml-1'>Dont Look up</p>
                        </td>
                        <td>2021</td>
                        <td className='flex'>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                        </td>
                        <td>
                            <i><FaHeart/></i>
                        </td>
                        <td>
                            <i><AiOutlineRedo size={20}/></i>
                        </td>
                        <td>
                            <i><AiOutlineAlignLeft size={20}/></i>
                        </td>
                        <td className='flex'>
                            <i className='mr-1'><BiPencil size={20} color='green'/></i>
                            <i><BsThreeDots size={20} color='green'/></i>
                        </td>
                    </tr>
                    <tr className='flex justify-between items-center font-bold mb-3'>
                        <td>June</td>
                        <td>3rd</td>
                        <td className='flex items-center'>
                            <img className='h-14 w-10 rounded object-cover' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                            <p className='ml-1'>Dont Look up</p>
                        </td>
                        <td>2021</td>
                        <td className='flex'>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                        </td>
                        <td>
                            <i><FaHeart/></i>
                        </td>
                        <td>
                            <i><AiOutlineRedo size={20}/></i>
                        </td>
                        <td>
                            <i><AiOutlineAlignLeft size={20}/></i>
                        </td>
                        <td className='flex'>
                            <i className='mr-1'><BiPencil size={20} color='green'/></i>
                            <i><BsThreeDots size={20} color='green'/></i>
                        </td>
                    </tr>
                    <tr className='flex justify-between items-center font-bold mb-3'>
                        <td>June</td>
                        <td>3rd</td>
                        <td className='flex items-center'>
                            <img className='h-14 w-10 rounded object-cover' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                            <p className='ml-1'>Dont Look up</p>
                        </td>
                        <td>2021</td>
                        <td className='flex'>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                        </td>
                        <td>
                            <i><FaHeart/></i>
                        </td>
                        <td>
                            <i><AiOutlineRedo size={20}/></i>
                        </td>
                        <td>
                            <i><AiOutlineAlignLeft size={20}/></i>
                        </td>
                        <td className='flex'>
                            <i className='mr-1'><BiPencil size={20} color='green'/></i>
                            <i><BsThreeDots size={20} color='green'/></i>
                        </td>
                    </tr>
                </tbody>
                <img src="" alt="" />
                
            </table>
        </div>
    )
}
export default Diary