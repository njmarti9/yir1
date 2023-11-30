import Slideshow from "./slideshow";
import applepicking from "../dist/images/applepicking.jpg";
import arboretum from "../dist/images/arboretum.jpg";
import arboretum1 from "../dist/images/arboretum1.jpg";
import bigchomp from "../dist/images/bigchomp.jpg";
import climbingchicago from "../dist/images/climbingchicago.jpg";
import cuddlebuddies from "../dist/images/cuddlebuddies.jpg";
import embarrasedbaby from "../dist/images/embarrasedbaby.jpg";
import emeraldcove from "../dist/images/emeraldcove.jpg";
import fairygarden from "../dist/images/fairygarden.jpg";
import fairygarden1 from "../dist/images/fairygarden1.jpg";
import fobconcert from "../dist/images/fobconcert.jpg";
import gamerfit from "../dist/images/gamerfit.jpg";
import greekthing from "../dist/images/greekthing.jpg";
import greekthing1 from "../dist/images/greekthing1.jpg";
import meme from "../dist/images/meme.jpg";
import nosepicker from "../dist/images/nosepicker.jpg";
import prettysunset from "../dist/images/prettysunset.jpg";
import topgolf from "../dist/images/topgolf.jpg";
import valleyoffire from "../dist/images/valleyoffire.jpg";
import valleyoffire1 from "../dist/images/valleyoffire1.jpg";
import waterfall from "../dist/images/waterfall.jpg";


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
    img1.src = applepicking;
    img1.id = "pic_slides";
    img1.classList.add("pic_slides");

    galleryDiv.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = arboretum;
    img2.id = "pic_slides";
    img2.classList.add("pic_slides");

    galleryDiv.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = arboretum1;
    img3.id = "pic_slides";
    img3.classList.add("pic_slides");

    galleryDiv.appendChild(img3);

    const img4 = document.createElement('img');
    img4.src = bigchomp;
    img4.id = "pic_slides";
    img4.classList.add("pic_slides");

    galleryDiv.appendChild(img4);

    const img5 = document.createElement('img');
    img5.src = climbingchicago;
    img5.id = "pic_slides";
    img5.classList.add("pic_slides");

    galleryDiv.appendChild(img5);

    const img6 = document.createElement('img');
    img6.src = cuddlebuddies;
    img6.id = "pic_slides";
    img6.classList.add("pic_slides");

    galleryDiv.appendChild(img6);

    const img7 = document.createElement('img');
    img7.src = embarrasedbaby;
    img7.id = "pic_slides";
    img7.classList.add("pic_slides");

    galleryDiv.appendChild(img7);

    const img8 = document.createElement('img');
    img8.src = emeraldcove;
    img8.id = "pic_slides";
    img8.classList.add("pic_slides");

    galleryDiv.appendChild(img8);

    const img9 = document.createElement('img');
    img9.src = fairygarden;
    img9.id = "pic_slides";
    img9.classList.add("pic_slides");

    galleryDiv.appendChild(img9);

    const img10 = document.createElement('img');
    img10.src = fairygarden1;
    img10.id = "pic_slides";
    img10.classList.add("pic_slides");

    galleryDiv.appendChild(img10);

    const img11 = document.createElement('img');
    img11.src = fobconcert;
    img11.id = "pic_slides";
    img11.classList.add("pic_slides");

    galleryDiv.appendChild(img11);

    const img12 = document.createElement('img');
    img12.src = gamerfit;
    img12.id = "pic_slides";
    img12.classList.add("pic_slides");

    galleryDiv.appendChild(img12);

    const img13 = document.createElement('img');
    img13.src = greekthing;
    img13.id = "pic_slides";
    img13.classList.add("pic_slides");

    galleryDiv.appendChild(img13);

    const img14 = document.createElement('img');
    img14.src = greekthing1;
    img14.id = "pic_slides";
    img14.classList.add("pic_slides");

    galleryDiv.appendChild(img14);

    const img15 = document.createElement('img');
    img15.src = meme;
    img15.id = "pic_slides";
    img15.classList.add("pic_slides");

    galleryDiv.appendChild(img15);

    const img16 = document.createElement('img');
    img16.src = nosepicker;
    img16.id = "pic_slides";
    img16.classList.add("pic_slides");

    galleryDiv.appendChild(img16);

    const img17 = document.createElement('img');
    img17.src = prettysunset;
    img17.id = "pic_slides";
    img17.classList.add("pic_slides");

    galleryDiv.appendChild(img17);

    const img18 = document.createElement('img');
    img18.src = topgolf;
    img18.id = "pic_slides";
    img18.classList.add("pic_slides");

    galleryDiv.appendChild(img18);

    const img19 = document.createElement('img');
    img19.src = valleyoffire;
    img19.id = "pic_slides";
    img19.classList.add("pic_slides");

    galleryDiv.appendChild(img19);

    const img20 = document.createElement('img');
    img20.src = valleyoffire1;
    img20.id = "pic_slides";
    img20.classList.add("pic_slides");

    galleryDiv.appendChild(img20);

    const img21 = document.createElement('img');
    img21.src = waterfall;
    img21.id = "pic_slides";
    img21.classList.add("pic_slides");

    galleryDiv.appendChild(img21);

    const buttonDiv = document.createElement('div');
    buttonDiv.id = "button_div";
    
    const leftButton = document.createElement('button');
    leftButton.id = "home_left_button";
    leftButton.classList.add("slide_button");
    leftButton.textContent = "<";
    leftButton.addEventListener('click', (e)=>{
        e.stopPropagation();
        slideshow.showSlides(slideshow.slideIndex - 1, "pic_slides");
    })
    
    buttonDiv.appendChild(leftButton);
    
    const rightButton = document.createElement('button');
    rightButton.id = "home_right_button";
    rightButton.classList.add("slide_button");
    rightButton.textContent = ">";
    rightButton.addEventListener('click', (e)=>{
        e.stopPropagation();
        slideshow.showSlides(slideshow.slideIndex + 1, "pic_slides");
    })
    
    buttonDiv.appendChild(rightButton);
    
    galleryDiv.appendChild(buttonDiv);
    
    return galleryDiv;
}

export default picgallery1;