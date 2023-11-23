import Slideshow from "./slideshow";
import picgallery1 from "./picgallery1";
import videogallery from "./videogallery";
import topmoments from "./topmoments";
import journey from "./journey";
import videojs from "video.js";
require('!style-loader!css-loader!video.js/dist/video-js.css')

const home = () => {
    let slideshow1 = new Slideshow();

    let slideshow2 = new Slideshow();

    const content = document.querySelector('#content');

    const mainDiv = document.createElement('div');
    mainDiv.id = "main_div";

    const picgalleryDiv = picgallery1();
    
    mainDiv.appendChild(picgalleryDiv);

    const videogalleryDiv = videogallery();

    mainDiv.appendChild(videogalleryDiv);

    const topMomentsDiv = topmoments();

    mainDiv.appendChild(topMomentsDiv);

    const journeyDiv = journey();

    mainDiv.appendChild(journeyDiv);
    
    const exitButton = document.createElement('button');
    exitButton.id = "exit_button";
    exitButton.textContent = "X";
    exitButton.classList.add("hidden");
    exitButton.addEventListener("click", ()=>{
        document.querySelector(".active").classList.remove("active");
        exitButton.classList.add("hidden");
    })

    mainDiv.appendChild(exitButton);

    content.appendChild(mainDiv);
    
    slideshow1.showSlides(0, "pic_slides");

    slideshow2.showSlides(0, "video_slides");

    let player1 = videojs(document.querySelector('.vid1'), {
        controls: true,
        preload: 'auto',
        autoplay: false,
        fill: true
    });

    
    let player2 = videojs(document.querySelector('.vid2'), {
        controls: true,
        preload: 'auto',
        autoplay: false,
        fill: true
    });

    let player3 = videojs(document.querySelector('.vid3'), {
        controls: true,
        preload: 'auto',
        autoplay: false,
        fill: true
    });

    let player4 = videojs(document.querySelector('.vid4'), {
        controls: true,
        preload: 'auto',
        autoplay: false,
        fill: true
    });
    
    let leftButt = document.getElementById('video_left_button');
    leftButt.addEventListener("click", ()=>{
        let index = slideshow2.slideIndex + 1;
        eval('player' + index + '.pause();');
        slideshow2.showSlides(slideshow2.slideIndex - 1, "video_slides");
    })

    let rightButt = document.getElementById('video_right_button');
    rightButt.addEventListener("click", ()=>{
        let index = slideshow2.slideIndex + 1;
        eval('player' + index + '.pause();');
        slideshow2.showSlides(slideshow2.slideIndex + 1, "video_slides");
    })
}

export default home;