var sidenav = document.querySelector(".sidenavbar")

function opennav() {
    sidenav.style.left = "0"

}

function closenav() {
    sidenav.style.left = "-35%"

}

var productcontainer=document.getElementById("product")
var search=document.getElementById("searchbar")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"

        }
        else{
            productlist[count].style.display="block"
        }
    }
})