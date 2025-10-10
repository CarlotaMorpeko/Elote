document.addEventListener("DOMContentLoaded", function(){

    var btnCalcular= document.getElementById("btn-azulejos")

    btnCalcular.addEventListener("click", function(){

        var value1 = parseFloat(document.getElementById("input-suelo").value)
        var value2 = parseFloat(document.getElementById("input-ancho").value)
        var value3 = parseFloat(document.getElementById("input-precio").value)
        
        

        if(isNaN(value1) || isNaN(value2) || isNaN(value3)){
                alert("Ingrese solo numeros")
                console.error("El usuario ingreso un valor invalido")
                return
        }
        
        var AreaSuperficie = (value1 * 100) * (value2 * 100) 
        var AreaAzulejo = 25 * 25

        var AzulejosNecesarios = AreaSuperficie / AreaAzulejo
        var CostoTotal = AzulejosNecesarios * value3
        alert("El total de azulejos necesarios es " + AzulejosNecesarios.toLocaleString() +
         " y el costo total es de $" + CostoTotal.toLocaleString( ));
    })
})