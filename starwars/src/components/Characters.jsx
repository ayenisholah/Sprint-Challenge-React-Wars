import React from 'react';

import './StarWars.css';

class Characters extends React.Component {
    constructor() {
        super();
    }

    render() {
        return  (
            <div className='characters'>
                <div className='character-name'>
                    <h2>Name: {this.props.name}</h2>
                </div>
                <div className='character-details'>
                    <p>Gender: {this.props.gender}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Mass: {this.props.mass}</p>
                    <p>Eye Color: {this.props.eye_color}</p>
                    <p>Hair Color: {this.props.hair_color}</p>
                    {/* <p>Skin Color: {this.stateprops.skin_color}</p> */}
                </div>
    
            </div>
        );
    }
}


export default Characters;