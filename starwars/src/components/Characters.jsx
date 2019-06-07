import React from 'react';
import './StarWars.css';

class Characters extends React.Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <div className='characters'>
                <div className='character-name'>
                    <h2>Name</h2>
                </div>
                <div className='character-details'>
                    <p>Gender: </p>
                    <p>Height: </p>
                    <p>Mass: </p>
                    <p>Eye Color: </p>
                    <p>Hair Color: </p>
                    <p>Skin Color: </p>
                </div>

            </div>
        );
    };
};

export default Characters