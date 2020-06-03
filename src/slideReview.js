const slideReview = () => {
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  

  const showSlide = (val) => {
    const slides = document.querySelectorAll('.story');
    if(val > slides.length) {
      currSlide = 1;
    }
    if(val < 1) {
      currSlide = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    slides[currSlide-1].style.display = 'block';
    
  }
  
  let currSlide = 1;

  showSlide(currSlide);

  const changeSlide = (val) => {
    showSlide(currSlide += val);
  }

  prev.addEventListener('click', (e) => {
    e.preventDefault();
    changeSlide(-1);
  });

  next.addEventListener('click', (e) => {
    e.preventDefault();
    changeSlide(1);
  });
}
export default slideReview;