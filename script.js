var datos = [];

function guardarCalificacion(){

    var mayor= 0;
    var mayorImprimir= 0;
    var calificacion = document.getElementById("calificacion").value;
    datos.push(Number.parseInt(calificacion, 10));

    var tamanioDatos = datos.length;

    if(tamanioDatos > 1){
        console.log('__________tamaño mayor a 1')
        for (let i = 0; i < tamanioDatos; i++) {
            if(datos[i] > datos[i+1]){
                mayor = datos[i]
            }else{
                mayor = datos[i+1]
            }
            
            if(mayorImprimir < mayor){
                mayorImprimir = mayor
            }
            
        }
        document.getElementById("mayor").innerHTML = mayorImprimir
    }

    if(tamanioDatos == 1){
        console.log('__________tamaño 1')
        document.getElementById("mayor").innerHTML = datos[0]
    }
    

    document.getElementById("datos").innerHTML = datos.join()
    document.getElementById("calificacion").value = "";
    document.getElementById("calificacion").focus();
}




function comparar(){
    var primerDato = document.getElementById("primero").value;
    var segundoDato = document.getElementById("segundo").value;

    if(primerDato < segundoDato ){
        alert("El mayor es: "+segundoDato)
        document.getElementById("primerNumero").innerHTML = segundoDato
    }

    if( segundoDato < primerDato ){
        alert("El mayor es: "+primerDato)
        document.getElementById("primerNumero").innerHTML = primerDato
    }
    
}