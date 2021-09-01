import React from 'react';
import './App.css';
import ContactPage from './ContactPage';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import NavBar from './NavBar';

const App = () => {
  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
}

const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
}

return (
        <>
        <NavBar/>
  {/* Properties of FullPage.js
  For more info: readme file https://github.com/alvarotrigo/fullPage.js/#fullpagejs */}
  <ReactFullpage
    scrollOverflow={false}
    sectionsColor={["F3F3F3"]}
    verticalCentered={true}
    onLeave={onLeave}
    afterLoad={afterLoad}
    navigation={true}
    render={({ state, fullpageApi }) => {
      return (
        <div id="fullpage-wrapper">
          <div className="section">
            <ContactPage/>
          </div>
        </div>
      );
    }}
  />
  </>
    );
  }

export default App;