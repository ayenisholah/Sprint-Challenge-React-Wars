import React from 'react';
import './StarWars.css';

function Characters(props) {

    return (
        <div className='characters'>
            <div className='character-name'>
                <h2>Name: {props.name}</h2>
            </div>
            <div className='character-details'>
                <p><strong>Birth Year: </strong>{props.birthYear}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Mass: </strong>{props.mass}</p>
                <p><strong>Eye Color: </strong>{props.eyeColor}</p>
                <p><strong>Hair Color: </strong>{props.hairColor}</p>
            </div>
        </div>

    )
}

export default Characters;