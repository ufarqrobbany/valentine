import React, {useState} from "react";

import useDocumentTitle from "../useDocumentTitle";

import "./pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";

import {useScrollLock} from "../useScrollLock";

function Pages(props) {
  const [no, setNo] = useState(false);
  const [yes, setYes] = useState(false);
  const [yesA, setYesA] = useState(false);
  const [yesB, setYesB] = useState(false);

  const [fill, setFill] = useState(0);
  const [page2, setPage2] = useState(false);
  const [envelope, setEnvelope] = useState(false);

  const { lockScroll, unlockScroll } = useScrollLock();

  useDocumentTitle(`${props.title}`);

  function clickButton(id) {
    lockScroll();
    var button = document.getElementById(id);
    button.classList.add("onclick");
    setTimeout(function() {
      button.classList.remove("onclick");
    }, 190);
  }

  function hidePopup(id) {
    var button = document.getElementById(id);
    button.classList.add("hide");
    setTimeout(function() {
      button.classList.remove("hide");
    }, 190);
  }

  return (
    <div className="container">

      <div className={`section ${yes === true && `yes`}`}>
        <div className="gif">
          <img src={require('../assets/images/cat.gif')} alt="gif" />
        </div>
          <div className="message message-no">Will you be my Valentine?</div>
        <div className="buttons">
          <button className="bt-primary" id="yes-button" onClick={() => {setTimeout(function() {setYes(true);}, 200); setTimeout(function() {setYesA(true);}, 700); setTimeout(function() {setYesB(true);}, 2000); clickButton("yes-button")}}>Yes</button>
          <button className="bt-secondary" id="no-button" onClick={() => { setTimeout(function() {setNo(true);}, 200); clickButton("no-button")}}>No</button>
        </div>
      </div>

      <div className={`${yesA === true ? `section section-show` : `section-s`}`}>
        <div className="gif">
          <img src={require('../assets/images/mochi.gif')} className="mochi" style={{position: 'relative'}} alt="gif" />
        </div>
          <div className="message message-yes">Thank You!!!</div>
        <div className="buttons">
        </div>
      </div>

      <div id="pop" className={`pop-up ${no === true && `show`}`}>
        <div className="pop-up-container">
          <div className="pop-up-info">
            <div className="pop-up-title">
              Error
            </div>
            <div className="pop-up-message">
              Oops, something went wrong. Please try again later.
            </div>
          </div>
          <button className="pop-up-button bt-primary" id="pop-up-button" onClick={() => {setTimeout(function() {setNo(false);}, 200); hidePopup("pop"); clickButton("pop-up-button")}}>
            OK
          </button>
        </div>
      </div>

      <div id="pop-envelope" className={`pop-up ${envelope === true && `show`}`}>
        <div className="pop-up-container">
          <div className="pop-up-info">
            <div className="pop-up-title">
              Love Message
            </div>
            <div className="pop-up-message">
            In the quiet embrace of starlit skies, where the moon whispers secrets of everlasting love, I find myself immersed in the warmth of your presence. Your laughter, a melody that orchestrates joy in my heart, and your gaze, a beacon guiding me through the labyrinth of life. As we navigate the tapestry of time together, each moment becomes a precious gem, a testament to the beautiful bond we share. In the garden of my soul, you are the blooming rose, painting hues of passion and tenderness. Happy Valentine's Day, my love, for you are the poetry written on the pages of my heart ♡.
            </div>
          </div>
          <button className="pop-up-button bt-primary" id="pop-up-button" onClick={() => {setTimeout(function() {setEnvelope(false);}, 200); hidePopup("pop-envelope"); clickButton("pop-up-button")}}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      </div>

      {
        (yes === true) && (
          <div className="heart-container">
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `1em`, left: `4vw`, animationDelay: `1.2s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `2em`, left: `25vw`, animationDelay: `1.5s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `3em`, left: `33vw`, animationDelay: `1.8s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `4em`, left: `43vw`, animationDelay: `2.5s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `5em`, left: `25vw`, animationDelay: `2s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `6em`, left: `56vw`, animationDelay: `1.4s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `1em`, left: `73vw`, animationDelay: `3s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `4em`, left: `10vw`, animationDelay: `1.6s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `7em`, left: `21vw`, animationDelay: `2.4s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `2em`, left: `32vw`, animationDelay: `2.8s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `4em`, left: `46vw`, animationDelay: `1.2s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `7em`, left: `5vw`, animationDelay: `1.5s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `1em`, left: `63vw`, animationDelay: `2.4s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `2em`, left: `7vw`, animationDelay: `2.7s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `6em`, left: `18vw`, animationDelay: `1.6s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `3em`, left: `22vw`, animationDelay: `2.2s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `2em`, left: `32vw`, animationDelay: `1.4s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `6em`, left: `41vw`, animationDelay: `1.2s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `4em`, left: `69vw`, animationDelay: `1.8s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `5em`, left: `45vw`, animationDelay: `2.6s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `7em`, left: `35vw`, animationDelay: `3s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `3em`, left: `57vw`, animationDelay: `1.8s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `2em`, left: `25vw`, animationDelay: `2.2s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `5em`, left: `74vw`, animationDelay: `1.6s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `6em`, left: `12vw`, animationDelay: `2.8s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `7em`, left: `60vw`, animationDelay: `2.1s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `2em`, left: `45vw`, animationDelay: `1.9s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `5em`, left: `17vw`, animationDelay: `2s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `3em`, left: `10vw`, animationDelay: `1.3s`}} />
            <FontAwesomeIcon icon={faHeart} className="icon" style={{fontSize: `6em`, left: `80vw`, animationDelay: `1.5s`}} />
          </div>
        )
      }
      
      <div class="hero_area">
          <svg class={`waves ${yesB === true && `upp`}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
              <defs>
                  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g class="parallax">
                  <use xlinkHref="#gentle-wave" x="48" y="0" fill="#DFABB4" />
                  <use xlinkHref="#gentle-wave" x="48" y="6" fill="#CD707A" />
                  <use xlinkHref="#gentle-wave" x="48" y="12" fill="#CC3344" />
              </g>
          </svg>
      </div>

      {
        (yesB === true) && (
          <div className="bg-red">
            <div className={`page-1 ${fill === 90 && `hide`}`}>
              <div className="heart-fill" onClick={() => {(fill < 90) && setFill(fill + 10)}}>
                {/* <div className="heart-empty"></div> */}
                <img src={require('../assets/images/heart.png')} className="heart-empty" alt="heart" />
                <div className="heart-percent" style={{height: `${fill}%`}}></div>
              </div>

              <div className="text-tap">
                TAP THE HEART
              </div>
            </div>

            <div style={{display: 'none'}}>
              {
                (fill === 90) && (
                  setTimeout(function() {
                    setPage2(true);
                  }, 1400)
                )
              }
            </div>

            {
              (page2 === true) && (
                  <div className="page-2">
                    <div className="text">
                      <img src={require('../assets/images/happy-text.png')} alt="happy-text"/>
                    </div>
                    <button className="envelope" id="envelope" onClick={() => {clickButton("envelope"); setEnvelope(true)}}>
                      <img src={require('../assets/images/envelope_1.png')} alt="envelope"/>
                    </button>
                  </div>
              )
            }
          </div>
        )
      }      
    </div>
  );
}

export default Pages;