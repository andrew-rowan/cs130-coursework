const makeBigger = () => {
   console.log('make bigger!');
   document.querySelector(".content").style.fontSize = "40px";
   document.querySelector("h1").style.fontSize = "70px";


};

const makeSmaller = () => {
   console.log('make smaller!');
   document.querySelector(".content").style.fontSize = "10px";
   document.querySelector("h1").style.fontSize = "15px";


};

// How can i make the font get bigger every time i click it? 

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

