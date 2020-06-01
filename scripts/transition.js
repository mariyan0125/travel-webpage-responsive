import { gsap } from "gsap";


const Transition = () =>{
  const slider = document.querySelector('.slider');
  const logo = document.querySelector('.logo');
  const hero = document.querySelector('.hero');
  
  
  let tl = gsap.timeline({defaults: {ease: "power2.inOut", duration: 1}});

  tl.fromTo(hero, {height: "0", opacity:0}, {height: "70vh", opacity:1})
  .fromTo(hero, {width:"100%"}, {width:"70%"})
  .fromTo(slider, {duration: 1.2, x:"-100%"}, {x:"0%"}, "-=1")
  .from(logo, {duration: 0.7, x: 30, opacity:0},  "-=0.5")
  .from('.hero__text--1', {duration: 0.8, y: 100, opacity: 0},"-=0.7" )
  .from('.hero__text--2', {duration: 0.8, y: 100, opacity: 0},"-=0.5" )
  .from('.hero__text--3', {duration: 0.8, y: 100, opacity: 0},"-=0.2" );
}


export default Transition;