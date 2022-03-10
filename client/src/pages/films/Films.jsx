import React from 'react';
import './Films.scss'
import FilmCard from '../../components/films/film-card/Film-Card'
import FilmCard2 from '../../components/films/film-card/Film-Card2';
import ReviewCard from '../../components/films/reviewCard/ReviewCard';
import requests from './Requests'
import FilmRow from '../../components/films/filmRow/FilmRow';

const Films = () => {


  return (
    <div id='MpoCG'>
      <div id="top-text">
        <h4>Welcome back here is what youre friends are watching</h4>
      </div>

      <FilmRow title="Movies Trending Today" fetchUrl={requests.fetchTrendingMovies} istv={false}/>
      <FilmRow title="Shows Trending Today " fetchUrl={requests.fetchTrendingShows} istv={true}/>


      <section id='mTHIg'>
        <div id="list-title">
          <h6>Latest News</h6>
          <h6>More</h6>
        </div>
        <hr />

        <div id="grid">
          <div id='mTHIg-img'>
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          </div>
          <div id="span-col-2">
            <a>Lorem Ipsum</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas aperiam reprehenderit fugit rem ab debitis corrupti officiis voluptates eum, id distinctio nam harum sunt omnis, aspernatur mollitia qui atque. <a>Read More</a></p>
          </div>
        </div>
      </section>

      <section id='Wbwml'>
        <div id="list-title">
          <h6>Popular Reviews with Friends</h6>
          <h6>More</h6>
        </div>
        <hr />

        <div id='PYji'>
          <div ><ReviewCard /></div>
          <div><ReviewCard /></div>
          <div><ReviewCard /></div>
          <div><ReviewCard /></div>
        </div>
      </section>

    </div>
  );
};

export default Films;
