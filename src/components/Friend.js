import React from 'react';
import style from '../css_modules/friend.module.css';

const Friend = ({picture, number}) => {
    let styles = 'col-4 p-1';
    if(number === 7) {
        styles += style.bottomRight;
    }
    if(number === 9) {
        styles += style.bottomLeft;
    }
    return (
        <img className={styles} src={picture} alt="friend"/>
    );
};

export default Friend;