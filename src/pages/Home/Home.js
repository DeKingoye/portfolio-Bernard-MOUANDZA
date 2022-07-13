import './Home.scss';
import React, { useState, useEffect } from "react";

function Home() {
  const textArr = ["Bernard Yann Ordian Mouandza", "Développeur web junior", "En recherche D'alternance"];
  const maxTextIndex = textArr.length; 
  const sPerChar = 0.15; 
  const sBetweenWord = 1.5;
  const textIndex = 0; 

  useEffect(()=>{
    typing(textIndex, textArr[textIndex]); 
  }, [])



  function typing(textIndex, text) {
    var span = document.querySelector(".txt-rotate");
    var charIndex = 0; 
    var maxCharIndex = text.length - 1; 
    
    if(span){
      var typeInterval = setInterval(function () {
          span.innerHTML += text[charIndex]; 
          if (charIndex === maxCharIndex) {
              clearInterval(typeInterval);
              setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 
              
          } else {
              charIndex += 1; 
          }
      }, sPerChar * 1000); 

    }
  }

  function deleting(textIndex, text) {
    var span = document.querySelector(".txt-rotate");
    var minCharIndex = 0; 
    var charIndex = text.length - 1; 

    if(span){
      var typeInterval = setInterval(function () {
          span.innerHTML = text.substr(0, charIndex); 
          if (charIndex === minCharIndex) {
              clearInterval(typeInterval);
              textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
              setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
          } else {
              charIndex -= 1; 
          }
      }, sPerChar * 1000); 

    }
  }

  return (
    <section className='home'>
      <h1 className="title">
        <span>Hello, je suis </span>
        <span className="txt-rotate"></span>      
      </h1>
    </section>
  );
}

export default Home;
