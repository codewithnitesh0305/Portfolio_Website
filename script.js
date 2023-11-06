// Menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    //Sticky Navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // Swiper 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    

    // Remove menu icon navbar when click navbar link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-img img, .services-container , .portfolio-box , .contact form ,.skill-box', { origin: 'right' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'right' });
ScrollReveal().reveal('.home-content h3, .home-content p , .about-content', { origin: 'right' });

// Email working
// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "niteshkumar91316@gmail.com",
//         Password : "153AC4078B6F1F14783E06C8C5B525D2EDE1",
//         To : 'niteshkumar91316@gmail,com',
//         From : document.getElementById("user_email").value,
//         Subject : "contect form enquery",
//         Body : "And this is the body"
//         // Body : "Name"+document.getElementById("user_name").value
//         //         +"<br> Email: "+ document.getElementById("user_email").value
//         //         +"<br> Subject: "+ document.getElementById("subject").value
//         //         +"<br> Message: "+ document.getElementById("user_message").value
       
//     }).then(
//       message => alert(message)
//     );
// }


