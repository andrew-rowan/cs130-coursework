/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/


const defaultTheme = () => {
   document.querySelector('.container').className = "container";
};

const desertTheme = () => {
   /*alert('switch to desert theme');*/
   document.querySelector('.container').className = "container desert";
};

const oceanTheme = () => {
   /*alert('switch to ocean theme');*/
   document.querySelector('.container').className = "container ocean";
};

const highcontrastTheme = () => {
   /*alert('switch to desert theme');*/
   document.querySelector('.container').className = "container high-contrast";
};

document.querySelector('#default').onclick = defaultTheme;
document.querySelector('#ocean').onclick = oceanTheme;
document.querySelector('#desert').onclick = desertTheme;
document.querySelector('#high-contrast').onclick = highcontrastTheme;