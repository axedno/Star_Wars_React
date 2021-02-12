import React from 'react';
import Home from "./Home";
import Contact from "./Contact";
import StarWars from "./StarWars";
import AboutMe from "./AboutMe";
import {aboutMePage, contactPage, starWarsPage,} from "../utils/Constants";



const Main = ({page}) => {
      switch (page){
          case aboutMePage:
              return (
                  <AboutMe/>
                  );

        case contactPage:
              return (
                <Contact/>
                );
        case starWarsPage:
              return (
                <StarWars/>
                );
          default:
              return (
              <Home/>
          );
      }
};
export default Main;