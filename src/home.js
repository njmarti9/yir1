import Slideshow from "./slideshow";
import picgallery1 from "./picgallery1";

const home = () => {
    let slideshow = new Slideshow();

    const content = document.querySelector('#content');

    const galleryDiv = picgallery1();

    content.appendChild(galleryDiv);

    slideshow.showSlides(0, "home_slides");
}

export default home;