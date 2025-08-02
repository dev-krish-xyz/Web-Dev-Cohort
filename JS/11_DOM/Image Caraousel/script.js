    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children); // converts the html child elements into a usable array
    const nextbtn = document.querySelector(".next");
    const prevbtn = document.querySelector(".prev");

    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width; // this method returns a DOMrect object which contains the element position informations relative to the viewport.

    function updateSlide(){
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    nextbtn.addEventListener('click', () => {
        if(currentIndex < slides.length -1){
            currentIndex++;
            updateSlide();
        }
        else {
            currentIndex = 0;  // loop back to the first slide
        }
        updateSlide();
        
    });
    prevbtn.addEventListener('click',() =>{
        if(currentIndex > 0){
            currentIndex--;
            updateSlide();
        }
       else {
        currentIndex = slides.length -1; // go to last slide
       }
       updateSlide();
    });

    setInterval(() => {
        if(currentIndex < slides.length -1){
            currentIndex++;
        }
        else {
            currentIndex =0;
        }
        updateSlide();
    }, 3000);

