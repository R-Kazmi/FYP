import React, { useEffect, useState } from 'react'
import './FilmRow.scss'
import FilmCard from '../film-card/Film-Card'
import axios from '../../../pages/films/axios'

const FilmRow = (props) => {

  const { title, fetchUrl, istv } = props
  const [movies, setMovies] = useState([])

  const base_url = "https://image.tmdb.org/t/p/original"

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results.slice(0, 6));
      return request;
    }

    fetchData();

  }, [fetchUrl]);

  return (
    <section id="new-from-friends">
      <div id="list-title">
        <h6>{title}</h6>
        <h6>More</h6>
      </div>
      <hr />
      <div id="film-row">
        {movies.length &&

          movies.map((movie) => {
            return (
              <FilmCard key={movie.id} img={`${base_url}${movie.poster_path}`} id={movie.id} istv={istv}/>
            )
          })

        }
      </div>
    </section>
  )
}

export default FilmRow