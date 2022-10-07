/*

// ====================================
I used this pen to make carousel pure js  https://codepen.io/info2grow/pen/doLvZo?editors=1010
// =====================================
and i make function indicators and dotcolor : >

*/
// Slider
arr = {}
item = {}
img = {}
dot = {}
current = {}


var carousel = document.getElementsByClassName('carousel')
   // push All Element in Array
   for (let i = 0; i<carousel.length; i++) {
      arr[i] = carousel[i].querySelectorAll('.item'),
	    dot[i] = carousel[i].querySelectorAll('.indicators .dot'),
      current[i] = 0,
      img[i] = carousel[i].querySelector('.item > img'),
      item[i] = carousel[i].querySelector('.item ');
   }

   window.onresize = function(){
     for (let i = 0; i<carousel.length; i++) {
      carousel[i].style.height = img[i].height + 'px';
   	  item[i].style.height = img[i].height + 'px';
   	 }
   }



// Display First Element in Array
for (let i = 0; i<carousel.length; i++) {
  arr[i][current[i]].style.left = 0;
}

// change background-color for  First Indicators
for (let i = 0; i<carousel.length; i++) {
  dot[i][current[i]].setAttribute("class", "dot active");
}


// Function For Get Previous Element in Array
function prevSlide(n){
var prev;
	if(current[n] === 0){
		prev = arr[n].length - 1
	}else{
		prev = current[n] - 1;
	}

	// setup prev and current for animation
	arr[n][prev].style.left = '-100%';
	arr[n][current[n]].style.left = 0;
	// add class
	arr[n][prev].setAttribute("class", "item slideInLeft");
	arr[n][current[n]].setAttribute("class", "item slideOutRight");

	// Update Current Position
	current[n] = prev ;
	colorDot();

}

// Function For Get Next Element in Array
function nextSlide(n){
var next;
	if(current[n] === (arr[n].length -1) ){
		next = 0
	}else{
		next = current[n] + 1 ;
	}

	// setup next and current for animation
	arr[n][next].style.left = '100%';
	arr[n][current[n]].style.left = 0;
	// add class
	arr[n][next].setAttribute("class", "item slideInRight");
	arr[n][current[n]].setAttribute("class", "item slideOutLeft");

	// Update Current Position
	current[n] = next ;
	colorDot();


}

// Function For Indicators
function indicator(i, n){
	if(n <  current[i]){

	arr[i][n].style.left = '-100%';
	arr[i][current[i]].style.left = 0;
	// add class
	arr[i][n].setAttribute("class", "item slideInLeft");
	arr[i][current[i]].setAttribute("class", "item slideOutRight");
	current[i] = n;
	}
else if(n > current[i]){
	// setup next and current for animation
	arr[i][n].style.left = '100%';
	arr[i][current[i]].style.left = 0;
	// add class
	arr[i][n].setAttribute("class", "item slideInRight");
	arr[i][current[i]].setAttribute("class", "item slideOutLeft");
	current[i] = n ;
}else{
	current[i] = n;
}
	colorDot();



}

 function colorDot(){

  for (let n = 0; n<carousel.length; n++) {
    var i;
	  for(i =0; i < dot.length; i++){
		  dot[n][i].classList.remove('active');
	  }
	  dot[n][current[n]].classList.add('active');
  }
}
