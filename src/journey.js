const journey = () => {
    const journeyDiv = document.createElement('div');
    journeyDiv.id = "journey_div";
    journeyDiv.classList.add("visible_div");
    journeyDiv.addEventListener("click", () => {
        journeyDiv.classList.add("active");
        document.querySelector(".hidden").classList.remove("hidden");
    })

    const journeyTitle = document.createElement('h2');
    journeyTitle.textContent = "Our Journey";

    journeyDiv.appendChild(journeyTitle);

    const journeyP = document.createElement('p');
    journeyP.textContent = "For this section I am only going to share things from my perspective to keep things simple as a little disclaimer for everything. Our journey stared at Living Spaces (where all good journeys begin) where we both fortunatley ended up working at at the same moment in time at the same store. In that store there was always one person no one could ignore, and can you guess who that may be? Of course, that was Gianna. Her laugh, as everyone commonly said, could be heard from the opposite corner of the store and was the most infectious laugh I had ever heard. She also always made it a point to learn about people and truly cared what they were up to and what they had going on in their lives. She did this because she loved drama, yes, but mostly because she really did like listening to people. She was always trying to give if she could, and always was trying to support the people she cared about. None of this has changed, she is still the most loving and caring person I have met and continues to give so much effort to all the people she would call a friend or even just an acquaintance. She always used to come to the warehouse and stay back there for longer than she should have to talk with all the people back there, catching up on things they have been watching, things they went and did, or just whatever they wanted to talk about. I never really had all that much to say about my life and what I was doing, but she was still always interested in anything I would talk about. We would talk for over an hour together at times and she would really pick my brain. For some reason she liked what my goofy butt had to say and was interested in trying out some of the things I liked to do. We planned days to go do things together and all the while just kept growing closer and closer.\n";
    journeyP.id = "moment_div";
    journeyDiv.appendChild(journeyP);

    const journeyP2 = document.createElement('p');
    journeyP2.textContent += "Then on Thanksgiving of 2022, she asked me the deciding question. Do I see myself taking our friendship into something that could be more than friends. Of course I said yes, how could I say no to such an amazing person like her? She has the looks, the brains, and everything in-between. What an unbelievable day that was, a pure rush of adrenaline for an entire day swept over me. It was really happening. And boy, what a ride it would be. From going out and doing activities with each other to just chilling at each other's houses everything felt new. It was so nice being able to do things with my girl. On this journey, of course, it couldn't all be rainbows and butterflies. We both were dealing with a new relationship where neither of us knew how to effectively communicate and deal with the other's emotions and needs. There was a lot of work to be done to make things work, so we got to it. There were times on this journey where everything seemed too hard or like everything was too much, but every time we both took a step back we knew we had to keep trying. We had to make this work. We both want to make this work and we both love each other so dearly so we had to start adapting to each other. We worked on our communication, our attentiveness, and everything we could to make things as good as they could possibly be. In this last year a lot of progress has been made. Both of us know each other so well at this point that things are easier than at the start 100%. This is going to be an ongoing struggle none-the-less.\n";
    journeyP2.id = "moment_div";
    journeyDiv.appendChild(journeyP2);

    const journeyP3 = document.createElement('p');
    journeyP3.textContent += "But if there was any one person I would want to struggle with and make things work with it would be you. We have done so many things together (I mean just look at the top moments, videos, and pictures there are here) and I wouldn't have it any other way. I would go through all of it again if I had to in order to get back to where we are now. As we are now we understand that neither of us are perfect by any means and we are there for each other when things get hard. I can't express how grateful I am to have been in this relationship for a whole year with even bigger and better plans for ourselves setup for the future. I'm looking forward to the rest of my life with you Gianna. I love you whole bunches Gianna, forever and ever!\n";
    journeyP3.id = "moment_div";
    journeyDiv.appendChild(journeyP3);
    
    return journeyDiv;
}

export default journey