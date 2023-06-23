import React from 'react'

const  MovieScreen= ({movieList, watchList, page, setPage}) => {
    
let moiveDisplay = movieList.map((movie) => {
    return <h2>{movie.original_title}</h2>
})

  return (
    <div className='page'>
        <h1>Taylor's movie theatre</h1>
        <h3>Add a movie to your watch list</h3>
        <div className="moive-container">
            {moiveDisplay}
        </div>
    </div>
  )
}

export default MovieScreen