import React from 'react';
import './TrickList.css';

const TrickList = ({ tricks }) => {

    let tricksForRender = tricks.map(trick => {
        return (
        <div className='trick' key={trick.id}>
            <p>{trick.stance} {trick.name}</p>
            <p>Obstacle: {trick.obstacle}</p>
            <p>Link to Tutorial:</p>
            <a href={trick.tutorial}>{trick.tutorial}</a>
        </div>
    )})

    return(
        <div className='trick-container'>
            {tricksForRender}
        </div>
    )
}

export default TrickList;