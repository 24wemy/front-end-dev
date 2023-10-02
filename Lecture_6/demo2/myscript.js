let btn = document.querySelector('#btn');

btn.addEventListener('mouseup', (e) => {
    e.preventDefault();
})

btn.addEventListener('moseup', (e) => {
    let msg = document.querySelector('#message');
    switch (e.button) {
        case 0:
            msg.textContent = 'Left mouse button clicked.';
            break;
        case 1:
            msg.textContent = 'Middle mouse button clicked.';
            break;
        case 2:
            msg.textContent = 'Right mouse button clicked.';
            break;
        default:
            msg.textContent = 'Unknow mouse button code: $(event.button)';
    }
})