const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.prevBtn');
let imgScreen = document.querySelectorAll('.slide .screen img');
let index = 0;

function resetIndex() {
    if (index === imgScreen.length) {
        index = 0;
    }
    return index;
}

function resetImage(id) {
    imgScreen[id].classList.remove('active');
}

function showImage(id) {
    imgScreen[id].classList.add('active');
}

setInterval(() => {
    if (index === imgScreen.length) {
        index = resetIndex();
    }
    showImage(index);
    setTimeout(() => {
        resetImage(index);
        index++;
    }, 2000);
}, 3000);

nextBtn.addEventListener('click', e => {
    if (index === imgScreen.length) {
        index = resetIndex();
    } else {
        resetImage(index);
        index++;
        showImage(index);
    }
})

preBtn.addEventListener('click', e => {
    if (index === 0) {
        resetImage(index);
        index = imgScreen.length - 1;
        showImage(index);
    } else {
        resetImage(index);
        --index;
        showImage(index);
    }
})
