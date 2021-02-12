import React from 'react';
import hero from "../Images/main.jpg";
import style from '../css_modules/hero.module.css'


const Hero = () => {
    return (
        <section className="float-left w-25 row mt-1 mb-0 mr-3 mn-1">
            <img className={`w-100 ${style.hero}`} src={hero} alt="Luke Skywalker"/>
        </section>
    );
};

export default Hero;