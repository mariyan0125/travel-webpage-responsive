const animatedContentBox = () =>{
  const animatedItems = () => {
    const windowPosition = document.documentElement.clientHeight / 2;
    const itemBox = document.querySelectorAll('.about-section__content-box');
    const itemLeft  =  document.querySelector('.about-section__text--item-left');
    const itemRight  =  document.querySelector('.about-section__text--item-right');
    const boxes =  Array.from(itemBox);
   
    const boxPositionLeft =  boxes[0].getBoundingClientRect().top;
    const boxPositionRight =  boxes[1].getBoundingClientRect().top;
    
    if(boxPositionLeft < windowPosition) {
        itemLeft.style.animation = `fadeInUp .7s ease-in-out forwards`;
    }
    if(boxPositionRight < windowPosition) {
        itemRight.style.animation = `fadeInUp .7s ease-in-out forwards`;
    }
    
  }
    window.addEventListener('scroll', animatedItems);

 }
export default animatedContentBox;