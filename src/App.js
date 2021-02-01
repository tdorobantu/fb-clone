import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js"
import Widgets from './Widgets';
import Login from "./Login";
import { useStateValue } from './.StateProvider';

function App() {

  const [{ user}, dispatch] = useStateValue();
  
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (<Login/>) : (
      <>
      <Header/>

      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>  

      </div>
        </>
      )}
    </div>
  );
}

export default App;
