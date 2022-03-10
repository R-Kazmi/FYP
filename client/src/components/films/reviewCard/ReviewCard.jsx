import React from 'react';
import './ReviewCard.scss';
import { FaStar, FaCommentAlt, FaHeart } from 'react-icons/fa'

const ReviewCard = () => {
    return (
        <div id='reviewCardContainer'>
            <div id='reviewCardTop'>
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                <div id='reviewCardTopDetails'>
                    <div id='reviewCardTopDetailsAccount'>
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                        <a href="">Alor</a>
                    </div>
                    <a href="">The Dark Knight</a>
                    <div id='reviewCardTopDetailsReview'>
                        <i><FaStar size={16} color='green' /></i>
                        <i><FaCommentAlt size={14} color='#678' /> <span>4</span></i>


                    </div>
                </div>
            </div>
            <div id='reviewCardReview'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt maxime iste totam commodi tenetur excepturi, culpa quidem reiciendis dolorum libero eos nesciunt aut distinctio veritatis optio! In, aut iste.</p>
            </div>
            <div id='reviewCardReviewLikes'>
                <a href=""><span><FaHeart /></span> Like Review</a>
                <a href="">136 Likes</a>
            </div>

            <hr />
        </div>

    );
};
export default ReviewCard;



