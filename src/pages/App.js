import './App.scss';
import React, { useState, useEffect, Component } from "react";
import {Route, Routes as Switch, useHistory, useLocation, Navigate } from "react-router-dom";
import Home from './Home/Home'; 
import Skills from './Skills/Skills'; 
import Projects from './Projects/Projects'; 
import Notfound from './Notfound/Notfound';
import About from './About/About';
import Navbar from './../components/Navbar/Navbar';
import Cursor from './../components/Cursor/Cursor';
import Direction from './../components/Direction/Direction';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import {Url} from "./../Routes";

const menu=[
  {
      to: Url.Home.path, 
      name: 'Accueil'
  }, 
  {
      to: Url.About.path, 
      name: 'A propos'
  }, 
  {
      to: Url.Skills.path, 
      name: 'Compétences'
  }, 
  {
      to: Url.Projects.path, 
      name: 'Projets'
  }, 
];

const Page = ({ component: Component, ...rest })=>{
  return (
    <div className='route'>
      <Navbar menu={menu} />
      <Component {...rest} />
      <Direction menu={menu} />
    </div>
  )
}

export default ()=>{
  const location = useLocation();
  const locationKey = location.pathname;
  const timeout = { enter: 300, exit: 300 }
  return(
    <>
      <Cursor />
      <div className='route__container'>
        <TransitionGroup>
          <CSSTransition 
              timeout={timeout} 
              key={locationKey}
              classNames={{
                appear: 'slide-appear', 
                appearActive: 'slide-appear-active', 
                enter: 'slide__enter',
                enterActive: 'slide__enter--active',
                exit: 'slide__out',
                exitActive: 'slide__out--active'
              }}>
            <Switch location={location}>
              <Route exact path={Url.About.path} element={<Page component={About}/>}/>
              <Route exact path={Url.Home.path} element={<Page component={Home}/>}/>
              <Route exact path={Url.Skills.path} element={<Page component={Skills}/>}/>
              <Route exact path={Url.Projects.path} element={<Page component={Projects}/>}/>
              <Route exact path={Url.Notfound.path} element={<Page component={Notfound}/>}/>
              <Route path={Url.Notfound.path} element={<Page component={Notfound}/>}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  )
}
