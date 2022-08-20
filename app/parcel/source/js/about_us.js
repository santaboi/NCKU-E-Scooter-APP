AOS.init();  // AOS initiation

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 300, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$('.aos-init').removeClass('aos-animate'); // remove ALL classes which triggers animation in document

new fullpage('#fullpage', {
    //.............................................
    //....Your other options....
    //..............................................
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
    onLeave: function(){
        jQuery('.section [data-aos]').removeClass("aos-animate");
    },
    onSlideLeave: function(){
        jQuery('.slide [data-aos]').removeClass("aos-animate");
    },
    afterSlideLoad: function(){
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
    },
    afterLoad: function(){
        jQuery('.section.active [data-aos]').addClass("aos-animate");
       //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
    }
});

$(document).on('click', '#home', function(){
  fullpage_api.moveTo('page1');
});

$(document).on('click', '#about_us', function(){
  fullpage_api.moveTo('page2');
});

$(document).on('click', '#about_scooter', function(){
  fullpage_api.moveTo('page3');
});

$(document).on('click', '#avatar', function(){
  fullpage_api.moveTo('page4');
});

$(document).on('click', '#booking', function(){
  fullpage_api.moveTo('page5');
});

$(document).on('click', '#leaderboard', function(){
  fullpage_api.moveTo('page6');
});

$(document).on('click', '#location', function(){
  fullpage_api.moveTo('page7');
});

$(document).on('click', '#statistical', function(){
  fullpage_api.moveTo('page8');
});

$(document).on('click', '#bonus', function(){
  fullpage_api.moveTo('page9');
});

$('.ui.dropdown')
  .dropdown();
