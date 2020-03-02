import React from 'react';
import Hero from './components/Hero'
import './App.css';
import Home from './container/Home';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactUS from './container/ContactUS';
import Post from './container/Post';
function App() {
  return (
    <Router>

        <div className="App">
        <Header/>
        <Hero/>

        <Route path ="/" exact component={Home} />
        <Route path ="/contact-us" component={ContactUS}/>
        <Route path="/post/:postId" component={Post}/>


        </div>
    </Router>
    
  );
}

export default App;
