class Slideshow {
    constructor() {
        this.slideIndex = 0;
    }

    get slideIndex() {
        return this._slideIndex;
    }

    set slideIndex(n) {
        this._slideIndex = n;
    }

    showSlides(n, className) {
        this.slideIndex = n;
        let i;
        let slides = document.getElementsByClassName(className);
        if (n >= slides.length) {this.slideIndex = 0}
        if (n < 0) {this.slideIndex = slides.length-1}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex].style.display = "block";
    }
}

export default Slideshow;