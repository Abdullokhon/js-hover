 // window.addEventListener('scroll',() =>{
 //        let reveals = document.querySelectorAll('.reveal')
 //        for(let i = 0; i < reveals.length; i++) {
 //            let windowHeight = window.innerHeight;
 //            let revealTop = reveals[i].getBoundingClientRect().top;
 //            let revealPoint = 50;
 //


const div = document.querySelector(".box");


function Ran(event) {
    let a = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 50);
    let c = Math.floor(Math.random() * 80);
    let d = Math.floor(Math.random() * 80);

    event.target.style = `margin:${a}% ${b}% ${c}% ${d}%`;
}