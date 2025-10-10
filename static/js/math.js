document.addEventListener("DOMContentLoaded", function(){

        // Declaramos una variable en js que representa el boton en html
        var btnOK= document.getElementById("btn-sum")
        
        // Declaramos un evento click a ese boton
        btnOK.addEventListener("click", function(){
            // Agarramos el valor de la caja de texto input el cual retorna un tipo string
            var value1 = parseFloat(document.getElementById("input-value1").value)
            // Transforma el valor de la caja en float

            var value1Number = parseFloat(value1)
            
            var value2Number = parseFloat(document.getElementById("input-value2").value)

            // isNaN = is not a number
            if(isNaN(value1Number) || isNaN(value2Number)){
                alert("Pon numero")
                console.error("El usuario ingreso un valor invalido")
                return
            }

            var result1 = value1Number + value2Number
            alert("La suma de los valores es " + result1)
        })

        var btnOK= document.getElementById("btn-rest")
        btnOK.addEventListener("click", function(){
            // Agarramos el valor de la caja de texto input el cual retorna un tipo string
            var value1 = parseFloat(document.getElementById("input-value1").value)
            // Transforma el valor de la caja en float

            var value1Number = parseFloat(value1)
            
            var value2Number = parseFloat(document.getElementById("input-value2").value)

            // isNaN = is not a number
            if(isNaN(value1Number) || isNaN(value2Number)){
                alert("Pon numero")
                console.error("El usuario ingreso un valor invalido")
                return
            }

            var result2 = value1Number - value2Number
            alert("La suma de los valores es " + result2)
        })

        var btnOK= document.getElementById("btn-multi")
        btnOK.addEventListener("click", function(){
            // Agarramos el valor de la caja de texto input el cual retorna un tipo string
            var value1 = parseFloat(document.getElementById("input-value1").value)
            // Transforma el valor de la caja en float

            var value1Number = parseFloat(value1)
            
            var value2Number = parseFloat(document.getElementById("input-value2").value)

            // isNaN = is not a number
            if(isNaN(value1Number) || isNaN(value2Number)){
                alert("Pon numero")
                console.error("El usuario ingreso un valor invalido")
                return
            }

            var result3 = value1Number * value2Number
            alert("La suma de los valores es " + result3)
        })

        var btnOK= document.getElementById("btn-divi")
        btnOK.addEventListener("click", function(){
            // Agarramos el valor de la caja de texto input el cual retorna un tipo string
            var value1 = parseFloat(document.getElementById("input-value1").value)
            // Transforma el valor de la caja en float

            var value1Number = parseFloat(value1)
            
            var value2Number = parseFloat(document.getElementById("input-value2").value)

            // isNaN = is not a number
            if(isNaN(value1Number) || isNaN(value2Number)){
                alert("Pon numero")
                console.error("El usuario ingreso un valor invalido")
                return
            }

            var result4 = value1Number / value2Number
            alert("La suma de los valores es " + result4)
        })


})
