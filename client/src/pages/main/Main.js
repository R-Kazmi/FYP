import React from 'react';
import './main.scss'
import { AiOutlineHome, AiOutlineLink } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'
import { BiDotsHorizontalRounded, BiNews } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'


const Main = () => {
    return (
        <div className='container' id='container'>
            <div className="row">
                <div className='col-4 child1'>
                    <div className='d-flex align-items-center shadow-lg bg-body rounded ' id='profile'>
                        <div id='p-image'>
                            <img alt='' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <div id='p-info'>
                            <h5>Roohullah kazmi</h5>
                            <h6>@Smrk</h6>
                        </div>
                    </div>
                    <div className='shadow-lg bg-body rounded' id='menu-div'>
                        <div id="menu-items">
                            <a className='d-flex align-items-center' id="menu-item">
                                <i><AiOutlineHome /></i>
                                <h6>Home</h6>
                            </a>

                            <a className='d-flex align-items-center' id="menu-item">
                                <i><BsPeople /></i>
                                <h6>People</h6>
                            </a>
                            <a className='d-flex align-items-center' id="menu-item">
                                <i><MdOutlinePhotoSizeSelectActual /></i>
                                <h6>Photos</h6>
                            </a>
                            <a className='d-flex align-items-center' id="menu-item">
                                <i><BiNews /></i>
                                <h6>News Feed</h6>
                            </a>
                            <a className='d-flex align-items-center' id="menu-item">
                                <i><CgProfile /></i>
                                <h6>Profile</h6>
                            </a>
                            <a className='d-flex align-items-center' id="menu-item">
                                <i><FiSettings /></i>
                                <h6>Settings</h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-8 child2'>
                    <div className='d-flex justify-content-between' id="stories">
                        <div className='rounded-3 shadow-sm' id="story">
                            <img className='shadow-lg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <h6>Roohullah kazmi</h6>
                        </div>
                        <div className='rounded-3 shadow-sm' id="story">
                            <img className='shadow-lg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <h6>Roohullah kazmi</h6>
                        </div>
                        <div className='rounded-3 shadow-sm' id="story">
                            <img className='shadow-lg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <h6>Roohullah kazmi</h6>
                        </div>
                        <div className='rounded-3 shadow-sm' id="story">
                            <img className='shadow-lg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <h6>Roohullah kazmi</h6>
                        </div>
                        <div className='rounded-3 shadow-sm' id="story">
                            <img className='shadow-lg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <h6>Roohullah kazmi</h6>
                        </div>

                    </div>
                    <div className='shadow rounded d-flex align-items-center justify-content-between' id="post">
                        <img className='rounded' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <input type="text" placeholder="What's up" />
                        <button className='btn btn-primary'><span><AiOutlineLink /></span> Post it!</button>
                    </div>
                    <div className='shadow rounded-3' id="feed">
                        <div className='d-flex align-items-center justify-content-between' id="feed-post">
                            <img className='rounded' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <div>
                                <h6>Roohullah kazmi</h6>
                                <p>6 minutes ago</p>
                            </div>
                            <i className='rounded'><BiDotsHorizontalRounded size={20}/></i>
                        </div>
                        <div id='feed-post-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quia, dicta perspiciatis adipisci possimus accusantium ab veniam obcaecati, quidem, non tempore!</p>
                            <p>#endregion</p>
                        </div>
                    </div>
                    <div className='shadow rounded-3' id="feed">
                        <div className='d-flex align-items-center justify-content-between' id="feed-post">
                            <img className='rounded' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <div>
                                <h6>Roohullah kazmi</h6>
                                <p>6 minutes ago</p>
                            </div>
                            <i className='rounded'><BiDotsHorizontalRounded size={20} /></i>
                        </div>
                        <div id='feed-post-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quia, dicta perspiciatis adipisci possimus accusantium ab veniam obcaecati, quidem, non tempore!</p>
                            <p>#endregion</p>
                        </div>
                    </div>
                    <div className='shadow rounded-3' id="feed">
                        <div className='d-flex align-items-center justify-content-between' id="feed-post">
                            <img className='rounded' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <div>
                                <h6>Roohullah kazmi</h6>
                                <p>6 minutes ago</p>
                            </div>
                            <i className='rounded'><BiDotsHorizontalRounded size={20} /></i>
                        </div>
                        <div id='feed-post-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quia, dicta perspiciatis adipisci possimus accusantium ab veniam obcaecati, quidem, non tempore!</p>
                            <p>#endregion</p>
                        </div>
                    </div>
                    <div className='shadow rounded-3' id="feed">
                        <div className='d-flex align-items-center justify-content-between' id="feed-post">
                            <img className='rounded' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <div>
                                <h6>Roohullah kazmi</h6>
                                <p>6 minutes ago</p>
                            </div>
                            <i className='rounded'><BiDotsHorizontalRounded size={20} /></i>
                        </div>
                        <div id='feed-post-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quia, dicta perspiciatis adipisci possimus accusantium ab veniam obcaecati, quidem, non tempore!</p>
                            <p>#endregion</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;
