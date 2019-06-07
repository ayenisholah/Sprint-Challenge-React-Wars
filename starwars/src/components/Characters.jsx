import React from 'react';
import './StarWars.css';

function Characters(props) {
    return (
        <div className='characters'>
            <div className='character-name'>
                <h2>Name: {props.name}</h2>
            </div>
            <div className='character-details'>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Eye Color: {props.eye_color}</p>
                <p>Hair Color: {props.hair_color}</p>
            </div>
        </div>

    )
}

export default Characters;