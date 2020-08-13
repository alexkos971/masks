// slider 
let items = document.querySelectorAll('.slider_nav-item');
let mask = document.querySelector('#mask_view');

items.forEach(item => {
    
    item.addEventListener('click', e => {
        item.classList.add('active');
        mask.src = e.target.src;
        console.log(e.target);
    });
    return item;
});


function slideUp() {
    items.forEach(item => {
        // if (item.style.top == "-100px") {
            item.style.top = "0px";
        // }
    });
}

function slideDown() {
    items.forEach(item => {
        item.style.top = "-100px";
    })
}



//Buttons
let form = document.querySelector('.bg_form');

function showForm() {
    form.style.display = "block";
}

function hideForm() {
    form.style.display = "none";
}