const getColor=()=>{
    let num=Math.floor(Math.random()*16777215);
    let color="#"+num.toString(16);
    document.getElementById("main").style.backgroundColor = color;
    document.getElementById("name").innerHTML=color
}
let btn=document.getElementById("x");
btn.addEventListener("click",getColor);
getColor();
 