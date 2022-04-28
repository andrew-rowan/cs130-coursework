let currentsize = 1.4

const makeBigger = () => {
   console.log('make bigger!');
   currentsize += 0.2
   document.querySelector("div.content").style.fontSize = `${currentsize}em`;
   document.querySelector("header").style.fontSize = `${currentsize+0.5}em`;

   // document.querySelector("div.content").style.fontSize = "40px";
   // document.querySelector("h1").style.fontSize = "70px";


};

const makeSmaller = () => {
   console.log('make smaller!');
   currentsize -= 0.2
   document.querySelector("div.content").style.fontSize = `${currentsize}em`;
   document.querySelector("header").style.fontSize = `${currentsize+0.5}em`;



};

// How can i make the font get bigger every time i click it? 

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

