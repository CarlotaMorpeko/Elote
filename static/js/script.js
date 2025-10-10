// Evente que se dispara cuando se termina de cargar el DOM
// DOM: Document Object Model
document.addEventListener("DOMContentLoaded", function(){

        // Declaramos una variable en js que representa el boton en html
        var btnOK= document.getElementById("btn-ok")
        
        // Declaramos un evento click a ese boton
        btnOK.addEventListener("click", function(){
            // Declaramos una variable del input  de HTML
            var name = document.getElementById("input-name")

            // Mostramos un alerta del navegador con el contenido del intup
            alert("Yokoso " + name.value + " watashi no soul society")

            console.log("Regresa pa, no hay nada que ver aqui")
            console.error("traes un troyano pa")
        })

})