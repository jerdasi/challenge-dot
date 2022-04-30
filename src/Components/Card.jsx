import React from 'react';
import propTypes from 'prop-types';

export default function Card({
  id, rating, title, year, rank,
}) {
  return (
    <div className="items h-[50vh] border border-black rounded-lg" key={id}>
      <div className="relative h-[85%] relative">
        <img src="assets/img/cinema.jpg" alt="img-item" className="w-full h-full object-cover rounded-t-lg" />
        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
          <div className="w-full h-full flex justify-between">
            <h1>
              Rating
              {rating}
              /10.0
            </h1>
            <h1>
              Ranking
              {rank}
            </h1>
          </div>
        </div>
      </div>

      <div className="h-[15%] bg-white overflow-hidden rounded-b-lg flex items-center justify-center flex px-2">
        <h1 className="w-3/4">
          {title}
          -
          {year}
        </h1>
        <div className="w-1/4">
          <button type="button" className="w-full bg-green-500 hover:bg-green-700 text-white rounded-md">Show</button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  rank: propTypes.number.isRequired,
};
