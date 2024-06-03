let star=document.getElementById("stars")
let moon=document.getElementById("moon")
let text=document.getElementById("text")
let mountain1=document.getElementById("mountain1")
let mountain2=document.getElementById("mountain2")
let river=document.getElementById("river")
let boat=document.getElementById("boat")
let main =document.querySelector(".mine")

onscroll=function (){
    let value=scrollY
    if(value<=120){
    star.style.left=value+"px"
    star.style.width-value+"px"
    moon.style.top=value*2+"px"
    text.style.fontSize=value+"px"
    boat.style.left=value*3+"px"
    boat.style.top=value*1+"px"
    // mountain2.style.top=value+"px"
    // mountain2.style.right=value+"px"
    // mountain1.style.top=value+"px"
    // mountain1.style.left=value+"px"
    // river.style.top=value+"px"
    if(value>=90){
        star.style.display="none"
        boat.style.display="none"
        main.style.background="linear-gradient(#242bfe,#365f89)"

    }else{
        main.style.background="linear-gradient(#3b0148,#18034a)"
        star.style.display="block"
        boat.style.display="block"
    }
}

    
}
