var textContainer = document.querySelector('#bottle-path-container');
var textContainer1 = document.querySelector('#bottle-path-container1');
const topElement = document.getElementById('header');
const bottomElement = document.getElementById('svg-end');


//sets path height, by updating the html code
function setPathHeight() {
    var pathTopY = topElement.getBoundingClientRect().bottom;
    var pathBottomY = bottomElement.getBoundingClientRect().top;

    textContainer.style['height'] = `${pathBottomY-pathTopY}px`;
    textContainer1.style['height'] = `${pathBottomY-pathTopY}px`;
    console.log(pathBottomY-pathTopY);

}

setPathHeight();

var textPath = document.getElementById('bottle');
var textPath1 = document.getElementById('bottle1');

var path = document.querySelector( textPath.getAttribute('href') );
var path1 = document.querySelector( textPath1.getAttribute('href') );

var pathLength = path.getTotalLength();

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset);
  textPath1.setAttribute('startOffset', offset);
}

updateTextPathOffset(0);

function bottleScroll(){
  requestAnimationFrame(function(){

    var rect = textContainer.getBoundingClientRect();
    var scrollOffset = (window.innerHeight/2 - (rect.y));

    if (scrollOffset>=0){
        var scrollPercent = (scrollOffset)/(rect.height);
        updateTextPathOffset(pathLength*scrollPercent);
    }
  });
}

window.addEventListener('load', setPathHeight);
window.addEventListener('resize', setPathHeight);
window.addEventListener('scroll',bottleScroll);

//animations
const fadeInObs = document.querySelectorAll('.fadeInObs');
const leftSlideObs = document.querySelectorAll('.leftSlideObs');
const rightSlideObs = document.querySelectorAll('.rightSlideObs');
const topSlideObs = document.querySelectorAll('.topSlideObs');
const bottomSlideObs = document.querySelectorAll('.bottomSlideObs');

const FIobserver = new IntersectionObserver((entries, FIobserver)=>{
    entries.forEach(entry =>{
        console.log(entry.target);
        if(!entry.isIntersecting) return;
        entry.target.classList.add("animateObs");
    });
}, {root: null, threshold:0, rootMargin: "0px 0px -150px 0px"});

fadeInObs.forEach(obj => {
    FIobserver.observe(obj);
});
leftSlideObs.forEach(obj => {
    FIobserver.observe(obj);
});
rightSlideObs.forEach(obj => {
    FIobserver.observe(obj);
});
bottomSlideObs.forEach(obj => {
    FIobserver.observe(obj);
});
topSlideObs.forEach(obj => {
    FIobserver.observe(obj);
});
