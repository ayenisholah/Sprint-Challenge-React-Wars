import React from 'react';
import Characters from './Characters';

import './StarWars.css';


function StarWarsList (props) {
    console.log(props)
        return (
            <div className='character-list'>
                <div className='char'>
                <h1>Star Wars Characters</h1>
                    {props.starwarsChars.map(element => 
                        <Characters
                            key={element.url}
                            name={element.name}
                            gender={element.gender}
                            height={element.height}
                            mass={element.mass}
                            url={element.url}
                        />
                        )}
                 </div>
            </div>
    )
}

export default StarWarsList;