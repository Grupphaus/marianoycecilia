window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('bye');
        document.getElementById('main').classList.add('hello');
        document.getElementById('footer').classList.add('hello');
    }, 3000);
    setTimeout(() => {
        var elem = document.querySelector('#loader');
        elem.parentNode.removeChild(elem);
    }, 6000);
}