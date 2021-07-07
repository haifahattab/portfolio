document.addEventListener("DOMContentLoaded", function() {

    //Scroll Reveal 
    window.sr = ScrollReveal();
    sr.reveal('.img-logo', {
        duration: 2000,
        origin: 'top',
        distance: '300px',
    });
    sr.reveal('.btn-contact', {
        duration: 2000,
        origin: 'left',
        distance: '200px',
        scale: 0.85
    });
    sr.reveal('.fee-details', {
        duration: 1500,
        origin: 'top',
        distance: '100px',
        viewFactor: 0.6
    });
    sr.reveal('.img-portfolio', {
        duration: 1500,
        origin: 'bottom',
        distance: '100px',
        viewFactor: 0.7
    });

    sr.reveal('.icon-tiles__tile', {
        duration: 1000,
        origin: 'bottom',
        distance: '200px',
        viewFactor: 0.3
    });
    sr.reveal('.icon-tiles__two', {
        duration: 1000,
        delay: 300,
        origin: 'bottom',
        distance: '200px',
        viewFactor: 0.3
    });
    sr.reveal('.icon-tiles__three', {
        duration: 1000,
        delay: 600,
        origin: 'bottom',
        distance: '200px',
        viewFactor: 0.3
    });
    sr.reveal('.icon-tiles__four', {
        duration: 1000,
        delay: 900,
        origin: 'bottom',
        distance: '200px',
        viewFactor: 0.3
    });

});