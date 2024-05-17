let star=document.getElementById("stars")
let moon=document.getElementById("moon")
let text=document.getElementById("text")
let mountain1=document.getElementById("mountain1")
let mountain2=document.getElementById("mountain2")
let river=document.getElementById("river")
let boat=document.getElementById("boat")

onscroll=function (){
    let value=scrollY
    if(value<=150){
    star.style.left=value+"px"
    star.style.width=this.width-value+"px"
    moon.style.top=value*2+"px"
    text.style.fontSize=value+"px"
    boat.style.left=value*5+"px"
    boat.style.top=value+"px"
    mountain2.style.top=value+"px"
    river.style.top=value+"px"
}

    
}
