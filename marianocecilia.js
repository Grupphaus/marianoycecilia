window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('bye');
        document.getElementById('main').classList.add('hello');
    }, 2000);
    setTimeout(() => document.getElementById('imagen').classList.add('start-slide'), 3000);
}