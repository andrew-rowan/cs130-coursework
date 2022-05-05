/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 3. If you get to the end, start at the beginning.  
 * 4. If you get to the beginning, loop around to the end.
 */



let currentIndex = 0;

 const showImage = (ev) => {
     // whatever I click, define element
    const elem = ev.currentTarget;
    // logging 
    // console.log(elem.style.backgroundImage);
    // console.log(ev.currentTarget);
    // set the featured image CLASS of the style background image to the earlier element
    currentIndex = parseInt(elem.dataset.index);
    // console.log("currentIndex:", currentIndex);
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;

 };


 const showNext = (ev) => {
    if (currentIndex == 7){
        currentIndex = -1
    };
    currentIndex += 1;
    console.log("currentIndex:", currentIndex);
    // update .featured_image
    // elem = ev.currentTarget.data-index.currentIndex;
    // console.log(elem.style.backgroundImage);
    displayBackground();
    
};

const showPrev = (ev) => {
    if (currentIndex == 0){
        currentIndex = 8
    };
    currentIndex -= 1;
    console.log("currentIndex:", currentIndex);
    displayBackground();
    // update .featured_image
};




const displayBackground = () => {
    const elem = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${elem}')`;
};



const images = [
    // 'images/field1.jpg',
    // 'images/purple.jpg',
    // 'images/jar.jpg',
    // 'images/green.jpg',
    // 'images/green1.jpg',
    // 'images/purple1.jpg',
    // 'images/magnolias.jpg',
    // 'images/daisy1.jpg'
    'images/personal/1 - 2021.09.25 Sunrise - Andrew Rowan - September 28, 2021 - DJI_0558-HDR.jpg',
    'images/personal/2021.09.25 Sunset1.jpg',
    'images/personal/2022.01.23 - Snow - Andrew Rowan - DJI_0905.jpg',
    'images/personal/2022.02.27 - Sunrise DJI_0994-H.jpg',
    'images/personal/2022.02.27 - Sunrise DJI_0017-H.jpg',
    'images/personal/2022.03.13 - Sunset DJI_0086-HDR.jpg',
    'images/personal/DJI_0947.jpeg',
    'images/personal/fall-01.jpg'
    //'images/personal/2022.02.27 - SunriseDJI_0043-H.jpg'
    // 'images/personal/Photo_6554364_DJI_764_jpg_5996907_0_2021112965036_photo_original.jpg'

];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" onclick = showImage(event)
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
        

    });
};

initScreen();

// first get all of the image elements from the DOM:
const imageElements = document.querySelectorAll('.image');

// then loop through each one and attach an event handler
// to each element's click event:
for (const elem of imageElements) {
    elem.onclick = showImage;
}

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;