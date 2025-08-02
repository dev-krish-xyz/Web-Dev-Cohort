const about = document.querySelector(".about");
const service = document.querySelector(".services");
const reviews = document.querySelector(".reviews");
// toggle function

function toggleAccordion(button, contentText) {
  const currentSlider = button.nextElementSibling;

  // Remove all open sliders
  if (currentSlider && currentSlider.classList.contains("slider-container")) {
    currentSlider.classList.remove("open");
    //close it after the animation ends
    currentSlider.addEventListener('transitionend', () => {
        currentSlider.remove();
    }, {once:true});


    requestAnimationFrame(() => {
      slider.classList.add("close");
    });
    button.querySelector("i").style.transform = "rotate(0deg)";

    } 

    else {
    // Create a new slider element
    const slider = document.createElement("div");
    slider.className = "slider-container";
    slider.innerText = contentText;

    // Insert after button
    button.insertAdjacentElement("afterend", slider);

    // Trigger animation
    requestAnimationFrame(() => {
      slider.classList.add("open");
    });

    // Rotate icon
    button.querySelector("i").style.transform = "rotate(180deg)";
  }
}

// event listeners

about.addEventListener("click", () => {
  toggleAccordion(
    about,
    " We are the servicing company and there is all more about us, you can check out in our, other sections too so now lets checkout somethig more about the properties"
  );
});
service.addEventListener("click", () => {
  toggleAccordion(
    service,
    "We offer many services like there are community teams and there are very other teams which can check out later for the nothinng and something purpose"
  );
});
reviews.addEventListener("click", () => {
  toggleAccordion(
    reviews,
    "these are some beautiful reviews from our customers they always stay loyal to us although we dont repond to their issues and problems, but they remain repeatative and loyal to us all the time they visit "
  );
});
