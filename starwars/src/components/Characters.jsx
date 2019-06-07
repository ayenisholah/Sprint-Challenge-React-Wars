import React from 'react';

import './StarWars.css';

// class Characters extends React.Component {
//     constructor(){
//         super();
//     }

function Characters (props) {
    return  (
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
                <p>Skin Color: {props.skin_color}</p>
            </div>

        </div>
    );
};



export default Characters;