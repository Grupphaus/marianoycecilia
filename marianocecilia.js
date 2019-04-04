window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('bye');
        document.getElementById('main').classList.add('hello');
        document.getElementById('footer').classList.add('hello');
    }, 2000);
    setTimeout(() => {
        document.getElementById('imagen').classList.add('start-slide');
        var elem = document.querySelector('#loader');
        elem.parentNode.removeChild(elem);
    }, 3000);
}