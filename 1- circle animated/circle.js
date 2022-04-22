let x = 100;
let y = 100;
let r = 50; //raggio
let a = 0;  //angolo


addEventListener('click', createCircle);

function createCircle(event) {
    const newCircle = document.createElement('div');
    x = event.pageX;
    y = event.pageY;
    r = 150;
    newCircle.className = 'circle circle--new-circle';
    newCircle.style.left = event.pageX + 'px';
    newCircle.style.top = event.pageY + 'px';
    document.body.appendChild(newCircle);
    previous = newCircle.previousSibling;
    previous.parentNode.removeChild(previous);
}

const circle = document.querySelector('.circle')

function rotate(a, element) {

    let px = x + r * Math.cos(a);
    let py = y + r * Math.sin(a);

    element.style.left = px + "px";
    element.style.top = py + "px";  

}

setInterval(() => {
    a = (a + Math.PI / 360) % (Math.PI * 2);
    rotate(a, circle);
}, 5);