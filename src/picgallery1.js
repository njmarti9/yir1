import Slideshow from "./slideshow";
import gallery1 from '../dist/images/gallery1.png'
import gallery2 from '../dist/images/gallery2.png';
import gallery3 from '../dist/images/gallery3.png';

const picgallery1 = () => {
    let slideshow = new Slideshow();

    const galleryDiv = document.createElement('div');
    galleryDiv.id = "gallery";
    galleryDiv.classList.add("visible_div");
    galleryDiv.addEventListener("click", ()=>{
        galleryDiv.classList.add("active");
        document.querySelector(".hidden").classList.remove("hidden");
    })

    const galleryTitle = document.createElement('h2');
    galleryTitle.textContent = "Gallery";

    galleryDiv.appendChild(galleryTitle);

    const img1 = document.createElement('img');
    img1.src = gallery1;
    img1.id = "pic_slides";
    img1.classList.add("pic_slides");

    galleryDiv.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = gallery2;
    img2.id = "pic_slides";
    img2.classList.add("pic_slides");

    galleryDiv.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = gallery3;
    img3.id = "pic_slides";
    img3.classList.add("pic_slides");

    galleryDiv.appendChild(img3);

    const buttonDiv = document.createElement('div');
    buttonDiv.id = "button_div";
    
    const leftButton = document.createElement('button');
    leftButton.id = "home_left_button";
    leftButton.classList.add("slide_button");
    leftButton.textContent = "<";
    leftButton.addEventListener('click', ()=>{
        slideshow.showSlides(slideshow.slideIndex - 1, "pic_slides");
    })
    
    buttonDiv.appendChild(leftButton);
    
    const rightButton = document.createElement('button');
    rightButton.id = "home_right_button";
    rightButton.classList.add("slide_button");
    rightButton.textContent = ">";
    rightButton.addEventListener('click', ()=>{
        slideshow.showSlides(slideshow.slideIndex + 1, "pic_slides");
    })
    
    buttonDiv.appendChild(rightButton);
    
    galleryDiv.appendChild(buttonDiv);
    
    return galleryDiv;
}

export default picgallery1;