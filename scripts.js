// BARS
document.getElementById('menu-btn').addEventListener('click', function(){
    document.getElementById('nav-menu').classList.toggle('show')
})

// LINKS
document.getElementById('titulovich').addEventListener('click', function(){
    document.getElementById('a-links').classList.toggle('mostrate');
});

document.getElementById('titulovich2').addEventListener('click', function(){
    document.getElementById('a-links2').classList.toggle('mostrate');
});

document.getElementById('titulovich3').addEventListener('click', function(){
    document.getElementById('a-links3').classList.toggle('mostrate');
});

document.getElementById('titulovich4').addEventListener('click', function(){
    document.getElementById('a-links4').classList.toggle('mostrate');
});

// SCROLLREVEAL
ScrollReveal().reveal('.nav-picante');
ScrollReveal().reveal('.promocion', { delay: 500 });
ScrollReveal().reveal('.titulo', { delay: 500 });
ScrollReveal().reveal('.cards', { delay: 500 });
ScrollReveal().reveal('.titulos', { delay: 500 });
ScrollReveal().reveal('.redes-sociales', { delay: 500 });
ScrollReveal().reveal('.container', { delay: 500 });