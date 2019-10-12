var images = ["image3.png","image8.jpg"];
var i=0;
var time=5000;
var l=images.length;
var eventList=document.getElementById("mySlide");
eventList.addEventListener("onload",mySliderImage())
function mySliderImage(){
    document.Slide.src=images[i];
    if(i<l-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("mySliderImage()",time)
}
