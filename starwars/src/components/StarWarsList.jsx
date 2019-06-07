import React from 'react';
import Characters from './Characters';
import './StarWars.css';

class StarWarsList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='character-list'>
                <div className='char'>
                    <h1>Star Wars Characters</h1>
                        {list.map(element => {
                            return <Characters
                                    key={element.url}
                                    name={element.name}
                                    gender={element.gender}
                                    height={element.height}
                                    mass={element.mass}
                                    eyeColor={element.eye_color}
                                    hairColor={element.hair_color}
                                    skinColor={element.skin_color}
                                    url={element.url}
                
                                />
                        })}
                </div>

            </div>
        )
    };
}

export default StarWarsList;