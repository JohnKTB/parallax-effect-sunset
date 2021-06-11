const sun = document.getElementById('sun');
const mountainRight1 = document.getElementById('mountain_rigth1');
const mountainRight2 = document.getElementById('mountain_rigth2');
const mountainRight3 = document.getElementById('mountain_rigth3');
const mountainLeft1 = document.getElementById('mountain_left1');
const mountainLeft2 = document.getElementById('mountain_left2');
const mountainLeft3 = document.getElementById('mountain_left3');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const header = document.querySelector('header');
window.addEventListener('scroll', ()=>{  
    let value = window.scrollY;
    sun.style.top = value * 1 + 'px';  
    text.style.marginRight = value * 5 + 'px';
    text.style.marginTop = value * 0.5 + 'px'; 
    btn.style.marginTop = value * 1 + 'px';   
    header.style.top = value * 0.5 + 'px';  
    mountainRight1.style.marginLeft = value * .2 + 'px';
    mountainRight2.style.marginLeft = value * .8 + 'px';
    mountainRight3.style.marginLeft = value * 1.2 + 'px';
    mountainLeft1.style.marginLeft = value * -.2 + 'px';
    mountainLeft2.style.marginLeft = value * -.8 + 'px';
    mountainLeft3.style.marginLeft = value * -1.2 + 'px';
})



document.querySelector('#btn').addEventListener('click', ()=>{
    console.log('click')
})