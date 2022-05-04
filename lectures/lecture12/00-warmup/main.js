


document.querySelector('svg').insertAdjacentHTML("beforeend", square);
document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);


// Step 1: What event do we want to use to create these shapes? 



// Step 2: Create event handler to attach to the event

const addShape = (ev) => {
    console.log(ev.clientX, ev.clientY);
    console.log('Add shape');
    // id = color, so use hashtag
    let color = document.querySelector('#color').value;
    let size = document.querySelector('#size').value;
    let shape = document.querySelector('#shape').value; 
    if shape == ('circle'){
        const circle = `
        <circle 
        cx="${ev.offsetX}" 
        cy="${ev.offsetY}" 
        r="${size}" 
        stroke="black" 
        stroke-width="3" 
        fill="${color}">
        </circle>`;
    // add the circle to the svg
    document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
    } else if shape == ('square'){
        const square = `
        <rect
         x="${ev.offsetX}"
         y="${ev.offsetX}" 
         width="40" 
         height="40" 
         stroke="black" 
         stroke-width="3" 
         fill="pink">
         </rect>`

    } else if shape == ('triangle'){
        console.log("draw a striangle");
        // const triangle = `
        // <polygon 
        // points="100,100 150,100 125,135" 
        // stroke="black" 
        // stroke-width="3" 
        // fill="teal"></polygon>`;
    }

    // define the circle

};


// Step 3: 

/**
 * Your job: when the user clicks the svg element, 
 * draw the shape the corresponds with the controls 
 * in the left-hand panel.
 */