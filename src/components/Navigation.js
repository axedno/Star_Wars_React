import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage, UserContext} from "../utils/Constants";

const Navigation = () => {
    return (
        <UserContext.Consumer>{
            value => <nav className="fixed-top ml-4 mt-2">
                <ul className="nav">
                    <li onClick={() => value.changePage(homePage)} className="nav-item btn btn-danger mx-1 border border-white">Home</li>
                    <li onClick={() => value.changePage(aboutMePage)} className="nav-item btn btn-danger mx-1 border border-white">About me</li>
                    <li onClick={() => value.changePage(starWarsPage)}  className="nav-item btn btn-danger mx-1 border border-white">Star Wars</li>
                    <li onClick={() => value.changePage(contactPage)} className="nav-item btn btn-danger mx-1 border border-white">Contact</li>
                </ul>
            </nav>
        }
        </UserContext.Consumer>

    );
};

export default Navigation;