//        home

const home = document.querySelector('.home');
const source = document.querySelector('.source');

// mang hinh
function click() {
    home.classList.add('active');
}

home.addEventListener('click', () => {
    click();
})

// khoi dong may
function clicksource() {
    const sourceAtive = document.querySelector('.source.active');
    const homeAtive = document.querySelector('.home.active');

    source.classList.add('active');
    sourceAtive.classList.remove('active');
    homeAtive.classList.remove('active');
}

source.addEventListener('click', () => {
    clicksource();
})