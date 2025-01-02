document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-menu');
    const mainMenu = document.querySelector('.main-menu');
  
    toggleButton.addEventListener('click', function () {
      mainMenu.classList.toggle('show');
    });
  });