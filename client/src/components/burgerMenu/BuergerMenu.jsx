import React, { useState } from 'react';
import './BurgerMenu.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const BuergerMenu = ({ pageLinks }) => {




    const onclick1 = () => {
        var x = document.getElementById('yoUWd')
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    return (
        <div id='d191q'>
            <div onClick={onclick1} id='fP18B'>

                <i ><FaBars color='#EEEEEE' size={20} /></i>


            </div>
            <div id='yoUWd'>
                <i ><AiOutlineClose color='#AABBCC' size={30} onClick={onclick1} /></i>
                <ul>
                    {
                        pageLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            )
                        })
                    }

                    <li><a href="/journal">Journal</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/chatRegister">Signup</a></li>
                    <li><a href="/chat">Chat</a></li>
                </ul>
            </div>
        </div>
    );
};

export default BuergerMenu;
