window.onscroll = function() {
    let nav = document.querySelector('#navbar');

    if(window.scrollY <= 0) {
        nav.className = '';
    } else {
        nav.className = 'scroll';
    }
}

window.onresize = function() {
    let threeColumns = document.querySelector('#favourite-items');

    if (window.innerWidth < 750) {
        threeColumns.className = 'flex-column';
    } else {
        threeColumns.className = 'three-columns';
    }
}