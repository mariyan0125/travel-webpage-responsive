const slideInMenu = () =>{
  const navIcon = document.querySelector('.navigation__icon');
  const navigation = document.querySelector('.navigation__list');
  const navItems = document.querySelectorAll('.navigation__item');
 
  
  const openNav = () =>{
    navigation.classList.toggle('nav-active');
    navItems.forEach((item, index) =>{
      if(item.style.animation) {

        item.style.animation = ''
      } else {
      item.style.animation = `fadeIn 0.5s ease forwards ${index/7 + 0.4}s`;
      }
      
    });
    navIcon.classList.toggle('toggle');

  }
  navIcon.addEventListener('click', openNav);
  
  navigation.addEventListener('click', () => {
    navigation.classList.toggle('nav-active');
    navIcon.classList.toggle('toggle');
  });
}





// import { gsap } from "gsap";

// const slideInMenu = () =>{
//   const burger = document.querySelector('.navigation__burger');
//   const navigation = document.querySelector('.navigation__list');
//   const navItems = document.querySelectorAll('.navigation__item');
  
//   // const links = () =>{
//   //   gsap.utils.toArray(".navigation__item").forEach((item, i) => {
//   //     gsap.to(item, {opacity: 1, duration: 0.5, stagger: 1, delay: i * 1});
//   //   });
//   // }
//   // const slideLinks = () =>{
//   //   navItems.forEach((link, index) => {
//   //     if(link.style.animation) {
//   //       link.style.animation = ''
//   //     } else {
//   //     link.style.animation = `fadeIn 1s ease forwards ${index/3 + 1}s`;
//   //     }
//   //   });
//   // }

//   let tl = gsap.timeline({paused:true, reversed:true});
//   tl.to(navigation, {duration: 0.7, x: "0", ease:"power2.inOut"});
    
//   const slideIn = () => {
//     tl.reversed() ? tl.play() : tl.reverse();
//   }


//   burger.addEventListener('click', slideIn);
// }

export default slideInMenu;