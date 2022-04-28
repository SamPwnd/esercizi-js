let colors = ['red', 'blue', 'teal', 'cyan', 'orange', 'darkmagenta', 'royalblue', 'violet', 'green', 'gold', 'brown', 'deeppink' ]

window.addEventListener('click', (event) => {
    let randomColor = Math.random()*colors.length | 0;
    let colorValue1 = colors[randomColor];
    randomColor = Math.random()*colors.length | 0;
    let colorValue2 = colors[randomColor];
    let r = 160; //raggio
    let a = 0; //angolo
    let circle = document.createElement('div');
    circle.className = 'circle';
    let x = event.pageX;
    let y = event.pageY;
    circle.style.left = event.pageX + 'px';
    circle.style.top = event.pageY + 'px';
    console.log(colorValue1, colorValue2)
    circle.style.backgroundImage = "linear-gradient(" + colorValue1 + "," + colorValue2 + ")";
    //circle.style.backgroundColor = colorValue1;
    let body = document.querySelector('body');
    body.appendChild(circle);

    setInterval(() => {
        a = (a + Math.PI / 360) % (Math.PI * 2);
        let px = x + r * Math.cos(a);
        let py = y + r * Math.sin(a);

        circle.style.left = px + "px";
        circle.style.top = py + "px";
    }, 5);
})


