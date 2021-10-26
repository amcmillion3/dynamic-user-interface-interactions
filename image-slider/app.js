const imageSlider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 1;
const size = images[0].clientWidth;

imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= images.length) return;
    imageSlider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    imageSlider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

imageSlider.addEventListener('transitionend', () => {
    if(images[counter].id === 'last-clone') {
        imageSlider.style.transition = 'none';
        counter = images.length - 2;
        imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(images[counter].id === 'first-clone') {
        imageSlider.style.transition = 'none';
        counter = images.length - counter;
        imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})