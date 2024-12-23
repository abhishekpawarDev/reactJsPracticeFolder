import React from "react";

const MapData = ({data}) =>{
    const {name , rating , cast , genre , watch_url , id} = data;
    return(
        <div key={id}>
                    <h1>{name}</h1>
                    <h3>{rating}</h3>
                    <p>{cast}</p>
                    <p>{genre}</p>
                    <a href={watch_url}>
                        <button>Watch Now</button>
                    </a>
                </div>
    )
}


export default MapData;