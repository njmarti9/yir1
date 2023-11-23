const journey = () => {
    const journeyDiv = document.createElement('div');
    journeyDiv.id = "journey_div";
    journeyDiv.classList.add("visible_div");
    journeyDiv.addEventListener("click", ()=> {
        journeyDiv.classList.add("active");
        document.querySelector(".hidden").classList.remove("hidden");
    })
    
    const journeyTitle = document.createElement('h2');
    journeyTitle.textContent = "Our Journey";

    journeyDiv.appendChild(journeyTitle);

    return journeyDiv;
}

export default journey