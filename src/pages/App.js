import './App.scss';
import React, { useState, useEffect, Component } from "react";
import {Route, Routes as Switch, useHistory, useLocation, Navigate } from "react-router-dom";
import Home from './Home/Home'; 
import Skills from './Skills/Skills'; 
import Projects from './Projects/Projects'; 
import Notfound from './Notfound/Notfound';
import About from './About/About';
import { Routes } from '../routes';
import Navbar from '../components/Navbar/Navbar';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

const Page = ({ component: Component, ...rest })=>{
  return (
    <div className='route'>
      <Navbar/>
      <Component {...rest} />
    </div>
  )
}

export default ()=>{
  const location = useLocation();
  const locationKey = location.pathname;
  const timeout = { enter: 500, exit: 500 }
  return(
    <div className='route-container'>
      <TransitionGroup>
        <CSSTransition 
            timeout={timeout} 
            key={locationKey}
            classNames={{
              appear: 'slide-appear', 
              appearActive: 'slide-appear-active', 
              enter: 'slide-enter',
              enterActive: 'slide-enter-active',
              exit: 'slide-out',
              exitActive: 'slide-out-active'
            }}>
          <Switch location={location}>
            <Route exact path={Routes.About.path} element={<Page component={About}/>}/>
            <Route exact path={Routes.Home.path} element={<Page component={Home}/>}/>
            <Route exact path={Routes.Skills.path} element={<Page component={Skills}/>}/>
            <Route exact path={Routes.Projects.path} element={<Page component={Projects}/>}/>
            <Route exact path={Routes.Notfound.path} element={<Page component={Notfound}/>}/>
            <Route path={Routes.Notfound.path} element={<Page component={Notfound}/>}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      
    </div>
      
    
  
   
  )
}
