require('!style-loader!css-loader!video.js/dist/video-js.css')
import Slideshow from "./slideshow";
import walktocar from '../dist/images/walktocar.mp4';
import sleepygirl from '../dist/images/sleepygirl.mp4';
import gaminggirl from '../dist/images/gaminggirl.mp4';
import drawinggirl from '../dist/images/drawinggirl.mp4';

const videogallery = () => {
    let slideshow = new Slideshow();

    const vidGalleryDiv = document.createElement('div');
    vidGalleryDiv.id = "vid_gallery";
    vidGalleryDiv.classList.add("visible_div");
    vidGalleryDiv.addEventListener("click", ()=>{
        vidGalleryDiv.classList.add("active");
        document.querySelector(".hidden").classList.remove("hidden");
    })
    
    const galleryTitle = document.createElement('h2');
    galleryTitle.textContent = "Video Gallery";

    vidGalleryDiv.appendChild(galleryTitle);

    const vidDiv1 = document.createElement('div');
    vidDiv1.classList.add("video_slides");
    
    const vid1 = document.createElement('video');
    vid1.id = "vid1";
    vid1.src = walktocar;
    vid1.classList.add("video-js");
    vid1.classList.add("vid1");

    vidDiv1.appendChild(vid1);
    
    vidGalleryDiv.appendChild(vidDiv1);

    const vidDiv2 = document.createElement('div');
    vidDiv2.classList.add("video_slides");

    const vid2 = document.createElement('video');
    vid2.id = "vid2";
    vid2.src = sleepygirl;
    vid2.classList.add("video-js");
    vid2.classList.add("vid2");

    vidDiv2.appendChild(vid2);
            
    vidGalleryDiv.appendChild(vidDiv2);

    const vidDiv3 = document.createElement('div');
    vidDiv3.classList.add("video_slides");

    const vid3 = document.createElement('video');
    vid3.id = "vid3";
    vid3.src = gaminggirl;
    vid3.classList.add("video-js");
    vid3.classList.add("vid3");

    vidDiv3.appendChild(vid3);
            
    vidGalleryDiv.appendChild(vidDiv3);

    const vidDiv4 = document.createElement('div');
    vidDiv4.classList.add("video_slides");

    const vid4 = document.createElement('video');
    vid4.id = "vid4";
    vid4.src = drawinggirl;
    vid4.classList.add("video-js");
    vid4.classList.add("vid4");

    vidDiv4.appendChild(vid4);
            
    vidGalleryDiv.appendChild(vidDiv4);
    
    const buttonDiv = document.createElement('div');
    buttonDiv.id = "button_div";
    
    const leftButton = document.createElement('button');
    leftButton.id = "video_left_button";
    leftButton.classList.add("slide_button");
    leftButton.textContent = "<";
    
    buttonDiv.appendChild(leftButton);
    
    const rightButton = document.createElement('button');
    rightButton.id = "video_right_button";
    rightButton.classList.add("slide_button");
    rightButton.textContent = ">";

    buttonDiv.appendChild(rightButton);

    vidGalleryDiv.appendChild(buttonDiv);

    return vidGalleryDiv;
}

export default videogallery;