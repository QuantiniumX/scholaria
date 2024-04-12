"use strict"

function toggleBodyScroll() {
    document.body.classList.toggle('hidden-scroll');

}
document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('-translate-x-full');
    document.querySelector('#blur-background').classList.remove('hidden');
    document.querySelector('.navbar').classList.add('block');
    document.querySelector('.navbar').classList.remove('hidden');
    toggleBodyScroll();
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('.navbar').classList.add('-translate-x-full');
    document.querySelector('#blur-background').classList.add('hidden');
    document.querySelector('.navbar').classList.add('hidden');
});
