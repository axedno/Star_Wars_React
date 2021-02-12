import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import style from "../css_modules/fargalaxy.module.css";
import {base_url} from "../utils/Constants";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opening_crawl: ''
        }
    }

    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl')
        if (opening_crawl) {
            this.setState({
                opening_crawl
            })
        } else {
            const episode = Math.floor((Math.random() * 6) + 1);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        opening_crawl: data.opening_crawl
                    });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }


    render() {
        return (
            <main className='clearfix'>
                <Hero/>
                <DreamTeam/>
                <p className={`${style.farGalaxy} text-justify`}>{this.state.opening_crawl}</p>
            </main>
        );
    }
}

export default Home;