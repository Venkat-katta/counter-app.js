x=0
y=0
function positive(){
    x+=1
    console.log(x)
    document.getElementById("num").innerHTML=x
}
function negative(){
    x-=1
    console.log(x)
    document.getElementById("num").innerHTML=x
}
function reset(){
    x=0
    document.getElementById("num").innerHTML=x
}