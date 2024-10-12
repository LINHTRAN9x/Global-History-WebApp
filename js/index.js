
document.querySelector('.ea180rp0').onclick = function() {
  var menu = document.getElementById('menu__header');
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

window.addEventListener('scroll', function() {
  var ul = document.querySelector('.css-17j7fe1');
  var scrollHeight = document.documentElement.scrollHeight;
  var halfPage = scrollHeight / 2;
  
  if (window.scrollY > halfPage) {
      ul.classList.add('sticky');
    
  } else {
      ul.classList.remove('sticky');
  }
});






