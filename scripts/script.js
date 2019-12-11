window.onscroll = function() {
    let nav = document.querySelector('#navbar');

    if(window.scrollY <= 0) {
        nav.className = '';
    } else {
        nav.className = 'scroll';
    }
}

function changeFlexDirection(id) {
    let flexItem = document.querySelector(id);

    if (window.innerWidth < 750) {
        flexItem.className = 'flex-column';
    } else {
        flexItem.className = 'flex-row';
    }
}

function changePineapple(id) {
    let pineapple = document.querySelector(id);

    if (window.innerWidth < 550) {
        pineapple.className = 'resized-pineapple';
    } else {
        pineapple.className = 'pineapple';
    }
}

function toggleTextStyle(id) {
    let text = document.querySelector(id);

    if (window.innerWidth < 750) {
        text.style.left = 0;
        text.style.padding = 0;
    } else {
        text.style.left = '-70px';
        text.style.padding = '40px';
    }
}

function changeImageSize(id) {
    let img = document.querySelector(id);

    if (window.innerWidth < 750) {
        img.style.width = '100%';
        img.style.maxWidth = '350px';
        img.style.padding = '4vh 0';
    } else {
        img.style.width = '50%';
        img.style.maxWidth = '';
        img.style.padding = '';
    }
}

function changesOnResize() {
    changeFlexDirection('#favourite-things');
    changeFlexDirection('#about');
    changeFlexDirection('#games');
    changePineapple('#big-pineapple');
    toggleTextStyle('#text-games');
    changeImageSize('#game-pic');
}

changesOnResize();

window.onresize = function() {
 this.changesOnResize();
}