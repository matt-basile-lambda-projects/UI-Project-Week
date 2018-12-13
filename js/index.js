// JS goes here
const hamburger = document.querySelector('.hb-btn');
const nav = document.querySelector('nav');


hamburger.addEventListener('click', ()=>{
    if(nav.classList.contains('show-nav')){
        TweenMax.from(nav, 2, {className: "+=show-nav" });
        TweenMax.to(nav, 2, {className: "+=hidden", opacity: 0,
        onComplete: () => nav.classList.remove('show-nav') });
        
        hamburger.src="img/nav-hamburger.png";
    } else{
        TweenMax.from(nav, 1, {className: "-=hidden" });
        TweenMax.to(nav, 1, {className: "+=show-nav", opacity:1 });
        hamburger.src="img/nav-hamburger-close.png";
        
    }
});

// Tween Max - TweenMax.to(target, duration, {vars: Property we're animating. Can adjust ease properties here})
// TweenFrom - Tween this target from whatever you define.
// Special Properties: Delay, Ease, 
// TweenMax.staggerFrom - Add a stagger amount to end of code which will stagger the animation.
// Fire a function - onComplete: function will occur. 