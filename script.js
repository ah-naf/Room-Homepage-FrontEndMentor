// FOR CAROUSEL

const change = [{
    mobile: '../images/mobile-image-hero-1.jpg',
    dekstop: '../images/desktop-image-hero-1.jpg',
    header: 'Discover innovative ways to decorate',
    description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
}, {
    mobile: '../images/mobile-image-hero-2.jpg',
    dekstop: '../images/desktop-image-hero-2.jpg',
    header: 'We are available all across the globe',
    description: " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re inmost major cities throughout the country.Find the branch nearest you using our store locator.Any questions ? Don 't hesitate to contact us today."
}, {
    mobile: '../images/mobile-image-hero-3.jpg',
    dekstop: '../images/desktop-image-hero-3.jpg',
    header: 'Manufactured with the best materials',
    description: 'Our modern furniture store provide a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers wantfor their home and office.'
}];

let curWidth = $(window).width();
let index = 0;
const left = $('#angle-left');
const right = $('#angle-right');
const container = $('.col-1');
let interval = 0;

// FOR NAVBAR
const hamburger = $('.hamburger');
const navbar = $('.navbar');
const bg = $('.bg');
const header_row = $('.header-row');

$(document).ready(() => {
    // RESET TO INITITAL STATE

    function resetAll() {
        hamburger.attr('src', 'images/icon-hamburger.svg');
        navbar.removeClass('navbar-show');
        bg.removeClass('bg-show');
        header_row.removeClass('header-row-change');
        hamburger.removeClass('hamburger-fixed');
    }

    // HAMBURGER OPTION

    hamburger.on('click', event => {
        if (navbar.hasClass('navbar-show')) {
            resetAll();
        } else {
            hamburger.attr('src', 'images/icon-close.svg');
            hamburger.addClass('hamburger-fixed');
            navbar.addClass('navbar-show');
            bg.addClass('bg-show');
            header_row.addClass('header-row-change');
            $(document).click(event => {
                console.log(event.target);
                if ($(event.target).hasClass('bg-show')) {
                    resetAll();
                }
            });
        }
    });

    carousel();
});


// Picture after random time without clicking

setInterval(() => {
    if (interval !== 0) {
        clearInterval(interval);
    }
    if (curWidth > 1165) {
        interval = setInterval(function() {
            forward('desktop');
        }, 3000);
    } else {
        interval = setInterval(function() {
            forward('mobile');
        }, 3000);
    }
}, 3500);



function carousel() {

    if (curWidth > 1165) {
        right.click(() => {
            clearInterval(interval);
            forward('desktop');
        });
        left.click(() => {
            clearInterval(interval);
            backforward('desktop');
        });

    } else {
        right.click(() => {
            clearInterval(interval);
            forward('mobile');
        });
        left.click(() => {
            clearInterval(interval);
            backforward('mobile');
        });
    }
}

function forward(device) {

    switch (device) {
        case 'mobile':
            index = (index + 1) % 3;
            container.css('background-image', 'url(' + change[index].mobile + ')');
            break;
        default:
            index = (index + 1) % 3;
            container.css('background-image', 'url(' + change[index].dekstop + ')');
            break;
    }
    $('#header').text(change[index].header);
    $('#description').text(change[index].description);
}

function backforward(device) {
    switch (device) {
        case 'mobile':
            index = ((index - 1) + 3) % 3;
            container.css('background-image', 'url(' + change[index].mobile + ')');
            break;
        default:
            index = ((index - 1) + 3) % 3;
            container.css('background-image', 'url(' + change[index].dekstop + ')');
            break;
    }

}