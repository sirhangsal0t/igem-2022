/*

// ====================================
I used this pen to make carousel pure js  https://codepen.io/info2grow/pen/doLvZo?editors=1010
// =====================================
and i make function indicators and dotcolor : >

*/
// Slider 
var carousel = document.getElementById('carousel'),
   // push All Element in Array  
    arr = carousel.querySelectorAll('.item'),
	dot = carousel.querySelectorAll('.indicators .dot'),
    current = 0,
    img = carousel.querySelector('.item > img'),
    item = carousel.querySelector('.item ');


   window.onresize = function(){
   	carousel.style.height = img.height + 'px';
   	item.style.height = img.height + 'px';
   }



// Display First Element in Array 
arr[current].style.left = 0;

// change background-color for  First Indicators 
dot[current].setAttribute("class", "dot active");


// Function For Get Previous Element in Array 
function prevSlide(){
var prev;
	if(current === 0){
		prev = arr.length - 1
	}else{
		prev = current - 1;
	}
	
	// setup prev and current for animation
	arr[prev].style.left = '-100%';
	arr[current].style.left = 0;
	// add class
	arr[prev].setAttribute("class", "item slideInLeft");
	arr[current].setAttribute("class", "item slideOutRight");

	// Update Current Position 
	current = prev ;
	colorDot();
	
}

// Function For Get Next Element in Array
function nextSlide(){
var next;
	if(current === (arr.length -1) ){
		next = 0
	}else{
		next = current + 1 ;
	}
	
	// setup next and current for animation
	arr[next].style.left = '100%';
	arr[current].style.left = 0;
	// add class
	arr[next].setAttribute("class", "item slideInRight");
	arr[current].setAttribute("class", "item slideOutLeft");
	
	// Update Current Position 
	current = next ;
	colorDot();
	
	
}

// Function For Indicators 
function indicator(n){
	if(n <  current){

	arr[n].style.left = '-100%';
	arr[current].style.left = 0;
	// add class
	arr[n].setAttribute("class", "item slideInLeft");
	arr[current].setAttribute("class", "item slideOutRight");
	current = n;
	}
else if(n > current){
	// setup next and current for animation
	arr[n].style.left = '100%';
	arr[current].style.left = 0;
	// add class
	arr[n].setAttribute("class", "item slideInRight");
	arr[current].setAttribute("class", "item slideOutLeft");
	current = n ;
}else{
	current = n;
}
	colorDot();

	

} 

 function colorDot(){
	
	var i; 
	for(i =0; i < dot.length; i++){
		dot[i].classList.remove('active');
	}
	dot[current].classList.add('active');
}