
const img = ['https://klike.net/uploads/posts/2019-01/1547365376_1.jpg',
    'https://klike.net/uploads/posts/2019-01/medium/1547365386_2.jpg',
    'https://klike.net/uploads/posts/2019-01/medium/1547365358_3.jpg',
    'https://klike.net/uploads/posts/2019-01/medium/1547365387_4.jpg'];
let btnFirst = document.getElementById('firstest');
let btnSecond = document.getElementById('secondest');
let imgSlider = document.getElementById('slider');

let num = 0;
btnFirst.addEventListener('click', function () {
    num++;
    if (num >= img.length) {
        num = 0;
    }
    imgSlider.src=img[num];
});

btnSecond.addEventListener('click', function () {
    num--;
    if (num < 0) {
        num = img.length - 1;
    }
    imgSlider.src= img[num];
});
