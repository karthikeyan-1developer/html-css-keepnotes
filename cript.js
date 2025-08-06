var popupoverlay=document.querySelector(".popup")
var box=document.querySelector(".box")
var addpop=document.getElementById("add-pop")
var e=document.getElementById("e")
var d=document.getElementById("d")
var a=document.getElementById("a")
var b=document.getElementById("b")
var c=document.getElementById("c")
var container=document.querySelector(".container")


addpop.addEventListener("click",function(){
    popupoverlay.style.display="block"
    box.style.display="block"
} )
e.addEventListener("click",function(event){
    popupoverlay.style.display="none"
    box.style.display="none"
    event.preventDefault()

})
d.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","b-con")
    div.innerHTML=`<h2>${a.value}</h2>
        <h5>${b.value}</h5>
        <p>${c.value}</p>
        <button onclick="del(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    box.style.display="none"
})
function del(){
    event.target.parentElement.remove()
}

