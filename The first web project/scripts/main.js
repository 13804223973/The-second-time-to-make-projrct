let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images\aduiduidui1.jpg') {
      myImage.setAttribute('src', 'images\aduiduidui2.jpg');
    } else {
      myImage.setAttribute('src', 'images\aduiduidui1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
