import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function Movies50() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://imdb-scraper.p.rapidapi.com/top250', {
      headers: {
        'X-RapidAPI-Host': 'imdb-scraper.p.rapidapi.com',
        'X-RapidAPI-Key': '73bcf680f0msh406e672cab2e62bp1b4f6djsnfc58762d7c0d',
      },
    })
      .then((res) => {
        setMovies([...res.data.movies]);
        console.log(res.data.movies);
      });
  }, []);
  return (
    <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left p-8">
      {movies.slice(0, 50).map((item) => (
        <Card id={item.movieId} rating={item.Rating} title={item.Title} year={item.Year} rank={item.rank} />
      ))}
    </div>
  );
}
