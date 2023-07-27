import * as htmlToImage from "html-to-image";

function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  } 

const elems = ['.long-text']
 
elems.forEach((elem, ind) => {
    const node = document.querySelector(elem)
 
    htmlToImage.toPng(node)
        .then(function (dataUrl) {
            let img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!');
            console.log(error)
        });
})
 