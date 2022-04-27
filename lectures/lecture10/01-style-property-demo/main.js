const resetButtonBackgrouds = () => {
    document.querySelector("#btn1").style.backgroundColor = "rgb(133, 133, 133)";
    document.querySelector("#btn2").style.backgroundColor = "rgb(133, 133, 133)";
    document.querySelector("#btn3").style.backgroundColor = "rgb(133, 133, 133)";
    document.querySelector("#btn4").style.backgroundColor = "rgb(133, 133, 133)";



};


const makeRed = () => {
    resetButtonBackgrouds();
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector("#btn1").style.backgroundColor = "red";
};

const makeBlue = () => {
    resetButtonBackgrouds();
    console.log('Change background to blue');
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector("#btn2").style.backgroundColor = "blue";


};

const makePink = () => {
    resetButtonBackgrouds();
    console.log('Change background to pink');
    document.querySelector("body").style.backgroundColor = "hotpink";

};

const makeOrange = () => {
    resetButtonBackgrouds();
    console.log('Change background to orange');
    document.querySelector("body").style.backgroundColor = "orange";

};

