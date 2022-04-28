function duplicate(original) {
    let clone = original.cloneNode(false);
    clone.id = '';
    clone.setAttribute('onclick', '');
    let playground = document.getElementById('playground');
    playground.appendChild(clone);
    clone.addEventListener('dblclick', (event) => {
        let pickerDiv = document.createElement('div');
        pickerDiv.style.position = 'absolute';
        pickerDiv.style.left = event.pageX + 'px';
        pickerDiv.style.top = event.pageY + 'px';
        playground.appendChild(pickerDiv);
        let picker = document.createElement('input');
        picker.setAttribute('type', 'color');
        pickerDiv.appendChild(picker);
        picker.addEventListener('change', () => {
            clone.style.backgroundColor = picker.value;
        })
        let closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerText = 'X';
        pickerDiv.appendChild(closeBtn);

        closeBtn.addEventListener('click', () => {
            //pickerDiv.style.display = 'none';
            pickerDiv.remove();
        })
    })
    console.log(clone.offsetHeight)
    let x = 0;
    let y = 0;
    clone.addEventListener('click', () => {
        let handle = document.createElement('div');
        handle.className = 'handle';
        clone.appendChild(handle);

        handle.addEventListener('mousedown', (event) => {
            console.log(event.clientX)
            x = event.clientX;
            y = event.clientY;
        })

        //handle.addEventListener('mouseover')

        window.addEventListener('mouseup', (event) => {
            x = event.clientX - x;
            y = event.clientY - y;
            clone.style.height = clone.offsetHeight + y + 'px';
            clone.style.width = clone.offsetWidth + x + 'px';
        })

        
    })
}

document.addEventListener('click', function clickOutside(event) {
   
  });

