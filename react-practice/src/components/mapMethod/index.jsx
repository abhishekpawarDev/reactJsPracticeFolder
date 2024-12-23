import React from "react";
import NetflixSeries from '../../api/NetfilixSeries.json'
import MapData from "./mapData";
const MovieCard = () =>{
    return(
        <>
        {
            NetflixSeries.map((movies)=>{
                return(<MapData data = {movies} key={movies.id}/>)
            })
        }
        </>
    )
}

export default MovieCard;