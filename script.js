
function rand(a,b){
	var x=Math.floor(Math.random()*(b-a+1))+a;
	var y=Math.floor(Math.random()*(b-a+1))+a;
	var z=Math.floor(Math.random()*(b-a+1))+a;

   var str="rgb("+x+", "+y+", "+z+")"

   return str;

}

function changeColor(col){
	for(var i=0;i<diff;i++){
				sqrs[i].style.background=color[ans];
			}
}




var sqrs=document.getElementsByClassName("square");

var color=[];
var rgbCol=document.getElementById("rgbCol");
rgbCol.textContent=color[ans];
var ans=Math.floor(Math.random()*(diff))+0;
var rst=document.getElementById("reset");
var h1=document.getElementsByTagName("h1")[0];
var corr=document.getElementById("corr");
var btns=document.querySelectorAll("button");

rst.addEventListener("click",function(){
	reset();
})





var diff=6;

var hard=document.getElementById("hard");
var easy=document.getElementById("easy");


hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	diff=6;
	for(i=3;i<6;i++){
		sqrs[i].classList.remove("dpn");
	}
	reset();
})

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	diff=3;
	for(i=3;i<6;i++){
		sqrs[i].classList.add("dpn");
	}
	reset();
})



function reset(){
	corr.textContent="";
	rst.textContent="New Colors"
    h1.style.background="steelblue";
for(var i=0;i<diff;i++){
	color[i]=rand(0,255);
	sqrs[i].style.background=color[i];

	sqrs[i].addEventListener("click",function(){
		if(this.style.background==color[ans]){
			changeColor(color[ans],diff);
			h1.style.background=color[ans]; 
			corr.textContent="Correct!";
			corr.style.color="green";
			rst.textContent="Play Again?";


		}
		else{
			this.style.background="#232323";
			corr.textContent="Try Again!";
			corr.style.color="red";


		
		}
	})
}
ans=Math.floor(Math.random()*(diff))+0;
rgbCol.textContent=color[ans];


}


reset(0,255);