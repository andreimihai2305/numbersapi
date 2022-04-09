import React from 'react';
import './SideBar.css';

const SideBar = ({onClick}) => {
    return (
        <div >
            <ul className='sidebar'>
                <li className='item' id="math" onClick={onClick}>Math</li>
                <li className='item' id="trivia" onClick={onClick}>Trivia</li>
                <li className='item' id="year" onClick={onClick}>Year</li>
            </ul>
        </div>
    );
}

export default SideBar;

