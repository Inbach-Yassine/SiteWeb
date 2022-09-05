let Menu = document.querySelector('#menu-bar');
let Navbar = document.querySelector('.nav-bar');

Menu.onclick = () =>{
    Menu.classList.toggle('fa-times');
    Navbar.classList.toggle('active');
}
