const bodyDOM = document.querySelector('body');
const spanDOM = document.querySelector('.hex');
const btnDOM = document.querySelector('button');


btnDOM.addEventListener('click', ()=> {
    const randomColor = Math.random().toString(16).slice(2, 8);
    spanDOM.textContent = '#' + randomColor;
    bodyDOM.style.backgroundColor = '#' + randomColor
});





