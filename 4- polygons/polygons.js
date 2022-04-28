var closeDrag = false;
var closeResize = false;

function duplicate(original) {
    let clone = original.cloneNode(false);
    clone.id = '';
    clone.setAttribute('onclick', '');
    clone.className += ' clone';
    let playground = document.getElementById('playground');
    playground.appendChild(clone);
    clone.addEventListener('click', (event) => {
        choseMenu(clone, event);
    })
}

function draggable(el) {
    el.addEventListener('mousedown', function(e) {
        if(closeDrag == true) return;
        console.log(closeDrag, closeResize)

        let x = e.clientX - parseInt(window.getComputedStyle(this).left);
        let y = e.clientY - parseInt(window.getComputedStyle(this).top);

        function mouseMove(e) {
            el.style.top = (e.clientY - y) + 'px';
            el.style.left = (e.clientX - x) + 'px';
        }

        function reset() {
            playground.removeEventListener('mousemove', mouseMove);
            playground.removeEventListener('mouseup', reset);
        }

        playground.addEventListener('mousemove', mouseMove);
        playground.addEventListener('mouseup', reset);
    });
}

function resizable(el) {
    if(closeResize == true) return;
    let handle = document.createElement('div');
    handle.className = 'handle';
    el.appendChild(handle);
    handle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
    })

    function resize(e){
        if(el.className != 'triangle clone') {
            el.style.width = e.pageX - el.getBoundingClientRect().left + 'px';
            el.style.height = e.pageY - el.getBoundingClientRect().top + 'px';
        }
        else {
            el.style.borderBottomWidth = e.pageY - el.getBoundingClientRect().top + 'px';
        }
    }

    function stopResize() {
        handle.remove();
        window.removeEventListener('mousemove', resize)
    }

}

function choseMenu(el, event) {
    let menu = document.createElement('div');
    menu.className = 'menu';
    menu.style.left = event.pageX + 'px';
    menu.style.top = event.pageY + 'px';
    playground.appendChild(menu);
    let picker = document.createElement('input');
    picker.setAttribute('type', 'color');

    let rgb = window.getComputedStyle(el).backgroundColor;
    if (el.className == 'triangle clone'){
        rgb = window.getComputedStyle(el).borderBottomColor;
    }
    let hex = '#' + rgb.slice(4,-1).split(',').map(x => (+x).toString(16).padStart(2,0)).join('');
    picker.setAttribute('value', hex);
    
    menu.appendChild(picker);
    picker.addEventListener('change', () => {
        if(el.className == 'triangle clone') el.style.borderBottomColor = picker.value;
        else el.style.backgroundColor = picker.value;
        menu.remove();
    });

    let dragBtn = document.createElement('button');
    dragBtn.textContent = 'SPOSTA';
    menu.appendChild(dragBtn);
    dragBtn.addEventListener('click', () =>  {
        closeResize = true;
        closeDrag = false;
        draggable(el);
        menu.remove();
    });

    let resizeBtn = document.createElement('button');
    resizeBtn.textContent = 'RIDIMENSIONA';
    menu.appendChild(resizeBtn);
    resizeBtn.addEventListener('click', () =>  {
        closeDrag = true;
        closeResize = false;
        menu.remove();

        if(el.className == 'triangle clone'){
            let menu = document.createElement('div');
            menu.className = 'menu';
            menu.style.left = event.pageX + 'px';
            menu.style.top = event.pageY + 'px';
            playground.appendChild(menu);
            let addLeft = document.createElement('button');
            addLeft.textContent = 'LEFT +20px';
            let addTop = document.createElement('button');
            addTop.textContent = 'HEIGHT +20px';
            let addRight = document.createElement('button');
            addRight.textContent = 'RIGHT +20px';
            menu.appendChild(addLeft);
            menu.appendChild(addTop);
            menu.appendChild(addRight);

            addLeft.addEventListener('click', () => {
                el.style.borderLeftWidth = (el.clientLeft + 20) + 'px';
            });
            addTop.addEventListener('click', () => {
                el.style.borderBottomWidth = parseInt(window.getComputedStyle(el).getPropertyValue("border-bottom-width").slice(0, -2)) + 20 + 'px';
            });
            addRight.addEventListener('click', () => {
                el.style.borderRightWidth = parseInt(window.getComputedStyle(el).getPropertyValue("border-right-width").slice(0, -2)) + 20 + 'px';
            });

            let closeBtn = document.createElement('button');
            closeBtn.className = 'close-btn';
            closeBtn.innerText = 'X';
            menu.appendChild(closeBtn);

            closeBtn.addEventListener('click', () => {
                menu.remove();
            });
        }

        else resizable(el);
        
    });

    let closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerText = 'X';
    menu.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        menu.remove();
    });
}