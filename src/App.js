import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {homePage, UserContext} from "./utils/Constants";

 class App extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             activePage: homePage
         }
     }
     changeActivePage = page => {
         this.setState({activePage: page});
     }

  render() {
        return (
            <div className="container-fluid">
                <UserContext.Provider value={{
                      activePage: this.state.activePage,
                      changePage: this.changeActivePage
                       }}>
                    <Header/>
                    <Main page={this.state.activePage}/>
                    <Footer/>
                </UserContext.Provider>
            </div>
        );
    }

}

export default App;
