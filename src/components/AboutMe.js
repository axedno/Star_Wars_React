import React from 'react';
import {base_url} from "../utils/Constants";


class AboutMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            height: '',
            mass: '',
            hair_color: '',
            skin_color: '',
            eye_color: '',
            birth_year: '',
            gender: ''
        }
    }

    componentDidMount() {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const a = Date.now()
                    this.setState({
                        name: data.name,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color,
                        birth_year: data.birth_year,
                        gender: data.gender
                    });
                    localStorage.setItem('name', data.name);
                    localStorage.setItem('height', data.height);
                    localStorage.setItem('mass', data.mass);
                    localStorage.setItem('hair', data.hair_color);
                    localStorage.setItem('skin_color', data.skin_color);
                    localStorage.setItem('eye_color', data.eye_color);
                    localStorage.setItem('birth_year', data.birth_year);
                    localStorage.setItem('gender', data.gender);
                    localStorage.setItem('data', a)
                });
        }

    render() {
        const h =  localStorage.getItem('data');
        const k = Date.now();
        if(k - h > 2592000000 ) {
            localStorage.clear();
            return (
                <div>
                    <p>Name: {this.state.name}</p>
                    <p>Height: {this.state.height}</p>
                    <p>Mass: {this.state.mass}</p>
                    <p>Hair: {this.state.hair_color}</p>
                    <p>Skin color: {this.state.skin_color}</p>
                    <p>Eye color: {this.state.eye_color}</p>
                    <p>Birth_year: {this.state.birth_year}</p>
                    <p>Gender: {this.state.gender}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Name: {localStorage.getItem('name')}</p>
                    <p>Height: {localStorage.getItem('height')}</p>
                    <p>Mass: {localStorage.getItem('mass')}</p>
                    <p>Hair: {localStorage.getItem('hair')}</p>
                    <p>Skin color: {localStorage.getItem('skin_color')}</p>
                    <p>Eye color: {localStorage.getItem('eye_color')}</p>
                    <p>Birth_year: {localStorage.getItem('birth_year')}</p>
                    <p>Gender: {localStorage.getItem('gender')}</p>
                </div>
            );
        }
    }
};

export default AboutMe;