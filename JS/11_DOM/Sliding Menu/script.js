const sliderContainer = document.querySelector('.slider-container');

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', ()=> {
    sliderContainer.classList.add('open');
    sliderContainer.classList.remove('closed');
    
});
closeBtn.addEventListener('click', () => {
    sliderContainer.classList.add('closed');
    sliderContainer.classList.remove('open');

    sliderContainer.addEventListener('transitionend', () => {
        sliderContainer.classList.remove('closed');
    }, {once:true});
})
