// slider 
var mask1 = document.getElementById('mask_1');
var mask2 = document.getElementById('mask_2');
var mask3 = document.getElementById('mask_3');
var mask4 = document.getElementById('mask_4');

var mask = document.getElementById('mask_view');

function up() {
    mask1.style.top = "0px";
    mask2.style.top = "0px";
    mask3.style.top = "0px";
    mask4.style.top = "0px";
}

function down() {
    mask1.style.top = "-100px";
    mask2.style.top = "-100px";
    mask3.style.top = "-100px";
    mask4.style.top = "-100px";
}

function check(event) {
    if (event.target.id == "mask_1") {
        mask.src = "img/mask_1.jpg";
    }
    else if (event.target.id == "mask_2") {
        mask.src = "img/mask_2.jpg";
    }
    else if (event.target.id == "mask_3") {
        mask.src = "img/mask_3.jpg";
    }
    else if (event.target.id == "mask_4") {
        mask.src = "img/mask_4.jpg";
    }
}


// 2-nd slider

var images = document.getElementsByClassName('c_img'), //container with images
    dots = document.getElementsByClassName('dot_indicate'),
    slide_fix = document.querySelector('.slider_fix'), //slider
    content = document.getElementById('content');

let active = 1;

function left() {
    dots[active].classList.remove('active');

    if (active == 0) {
        active = 2     
    }
    else {
        active--; 
    }
    dots[active].classList.add('active');

    slide();
}


function right() {
    dots[active].classList.remove('active');

    if (active+1 == images.length) {
        active = 0     
    }
    else {
        active++; 
    }
    dots[active].classList.add('active');

    slide();
}

function press(event) {
    // if ( event.target.id == "certef_1") {|| event.target.id == "certef_2" || event.target.id == "certef_3") {
    if (event.target.id == "certef_1") {
        active = 0; 
    }
    else if (event.target.id == "certef_2") {
        active = 1;
    }
    else if (event.target.id == "certef_3") {
        active = 2;  
    }
    content.style.backdropFilter = "brightness(40%)";
    slide_fix.style.display = "block";
    slide();  
    document.body.style.overflowY = "hidden";
}

//close slider
document.addEventListener('keydown', function() {
    if (event.keyCode == 27) {
        document.getElementById('content').style.backdropFilter = "none";
        document.getElementById('content').style.filter = "none";
        slide_fix.style.display = "none";
        document.body.style.overflowY = "scroll";   
    }
});



function slide() {
    if (active == 0) {
        images[1].style.left = "120%";
        images[0].style.left = "120%";
        images[2].style.left = "120%";
    }
    if (active == 1) {
        images[1].style.left = "-0%";
        images[0].style.left = "-0%";
        images[2].style.left = "-0%";
    }
    if (active == 2) {
        images[1].style.left = "-110%";
        images[0].style.left = "-110%";
        images[2].style.left = "-110%";
    }
}

function dot(event) {
    dots[active].classList.remove('active');
    if (event.target.id == "dot_1") {
        active = 0;
    }   
    else if (event.target.id == "dot_2") {
        active = 1;
    }
    else if (event.target.id == "dot_3") {
        active = 2;
    }
    event.target.classList.add('active');
    slide()
}


//Buttons

document.querySelector('.slider_button').onclick = () => {
    document.getElementById('content').style.backdropFilter = "brightness(60%)";
    document.getElementById('content').style.filter = "brightness(60%)";
    document.body.style.overflowY = "hidden";
    // document.getElementById('content').style.filter = "blur(10px)";
    document.querySelector('.fix').style.display = "block";
}

document.querySelector('.form_btn').onclick = () => {
    document.getElementById('content').style.backdropFilter = "none";
    document.getElementById('content').style.filter = "none";
    document.querySelector('.fix').style.display = "none";
    document.body.style.overflowY = "scroll";
}

document.querySelector('.close').onclick = () => {
    document.getElementById('content').style.backdropFilter = "none";
    document.getElementById('content').style.filter = "none";
    document.querySelector('.fix').style.display = "none";
    document.body.style.overflowY = "scroll";
}