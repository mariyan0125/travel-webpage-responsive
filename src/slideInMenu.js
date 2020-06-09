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
  
  navigation.addEventListener('click', openNav);
}

export default slideInMenu;