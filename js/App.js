// Menu del responsive


var menuboton = document.getElementById("btnMenuOpen"),

    menuresponsive = document.getElementById("menubar");

    menuboton.addEventListener("click",function(){

        if(menuresponsive.className=="menu-bar"){
            menuresponsive.classList.add("active");
        }else{
            menuresponsive.classList.remove("active");
        }


    })


//Desplazamiento de lo botones slider


var contenedor = document.querySelector(".slider"),

    btnizquierda = document.getElementById("btn-izquierda"),

    btnderecha = document.getElementById("btn-derecha");


    btnderecha.addEventListener("mouseenter",function(){

        contenedor.scrollLeft += contenedor.offsetWidth;

    })

    btnizquierda.addEventListener("mouseenter",function(){

        contenedor.scrollLeft -= contenedor.offsetWidth;

    })