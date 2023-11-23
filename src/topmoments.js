const topmoments = () => {
    const topmomentsDiv = document.createElement('div');
    topmomentsDiv.id = "top_moments_div";
    topmomentsDiv.classList.add("visible_div");
    topmomentsDiv.addEventListener("click", ()=>{
        topmomentsDiv.classList.add("active");
        document.querySelector(".hidden").classList.remove("hidden");
    })
    
    const topmomentsTitle = document.createElement('h2');
    topmomentsTitle.textContent = "Top Moments";

    topmomentsDiv.appendChild(topmomentsTitle);

    return topmomentsDiv;
}

export default topmoments