function guardarCalificacion(){
    alert("MENSAJE----")
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