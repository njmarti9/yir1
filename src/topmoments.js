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

    const moment1Div = document.createElement('div');
    moment1Div.id = "moment_div";

    const moment1Title = document.createElement('h3');
    moment1Title.textContent = "5. Miscellaneous Active Activities";

    const moment1Desc = document.createElement('p');
    moment1Desc.textContent = "I know that this is a broad moment to put in here, but I wanted to give mention to all the active things we did that I truly appreciate having done with you. Whether it was our hike together in Scottsdale, our hike with Mina in the Superstitions, you coming climbing with me and belaying for the 1st time, going to Bam Kazam with the LS group, and going to the Arboretum were all just super fun things that I am glad we were able to do together.";

    moment1Div.appendChild(moment1Title);

    moment1Div.appendChild(moment1Desc);

    topmomentsDiv.appendChild(moment1Div);

    const moment2Div = document.createElement('div');
    moment2Div.id = "moment_div";

    const moment2Title = document.createElement('h3');
    moment2Title.textContent = "4. The Fallout Boy Concert";

    const moment2Desc = document.createElement('p');
    moment2Desc.textContent = "I know we have also been to see 5SOS and Eden, but this concert sticks out in my mind as a special moment for us. The fact that we got to chill in the lawn section and just talk with each other for a while was super nice. Even though Bring Me the Horizon didn't show up the show was still amazing as well.";

    moment2Div.appendChild(moment2Title);

    moment2Div.appendChild(moment2Desc);

    topmomentsDiv.appendChild(moment2Div);

    const moment3Div = document.createElement('div');
    moment3Div.id = "moment_div";

    const moment3Title = document.createElement('h3');
    moment3Title.textContent = "3. The Aquarium";

    const moment3Desc = document.createElement('p');
    moment3Desc.textContent = "This was one of those days where I truly knew that I loved you. Out of everything to look at in the aquarium, you were always the one I kept looking at. I couldn't help watching you look at all the animals with such joy and curiosity. I also do love animals as well so that was definitely a bonus. All in all that was an amazing time for me.";

    moment3Div.appendChild(moment3Title);

    moment3Div.appendChild(moment3Desc);

    topmomentsDiv.appendChild(moment3Div);

    const moment4Div = document.createElement('div');
    moment4Div.id = "moment_div";

    const moment4Title = document.createElement('h3');
    moment4Title.textContent = "2. Illinois Trip";

    const moment4Desc = document.createElement('p');
    moment4Desc.textContent = "Having finally met your family out in Illinois, hanging with you and your mom and creating a lot of memorable moments. From going applepicking, to climbing with you for the 2nd time, hiking to the waterfall, and going to the city and going to the Museum of Science and Industry it will always be a memorable time for me and but one of our amazing trips we will get to go on.";

    moment4Div.appendChild(moment4Title);

    moment4Div.appendChild(moment4Desc);

    topmomentsDiv.appendChild(moment4Div);

    const moment5Div = document.createElement('div');
    moment5Div.id = "moment_div";

    const moment5Title = document.createElement('h3');
    moment5Title.textContent = "1. Vegas Trip";

    const moment5Desc = document.createElement('p');
    moment5Desc.textContent = "Our Vegas trip was definitely a vacation I will never forget and always look back fondly on. From going to the Valley of Fire and hiking through the trails there, to going to the When We Were Young Festival, the kayaking at Emerald Cove, or everything in-between everything was such an amazing time.";

    moment5Div.appendChild(moment5Title);

    moment5Div.appendChild(moment5Desc);

    topmomentsDiv.appendChild(moment5Div);

    return topmomentsDiv;
}

export default topmoments