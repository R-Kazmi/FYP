import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Film-Card.scss';

const FilmCard = (props) => {

    const { img, id, istv } = props

    const navigate = useNavigate();

    const onClick2 = () => {
        if (istv) {
            navigate(`/tv-detail/${id}`)
        } else {
            navigate(`/movie-detail/${id}`);
        }
    }

    return (
        <div id='JXx6G'>
            <div id='card-poster' onClick={onClick2}>
                <img src={img} alt="jk" />
            </div>
            {/* <div id='card-profile'>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <h6>Roohullah kazmi</h6>
            </div> */}
        </div>
    );
};

export default FilmCard;
