import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

const App = () => {
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
 });
  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <div  className="w-full h-screen">
      <Navbar />
      <img
        src="/rotate.gif"
        alt=""
        className="w-[70px]  fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
