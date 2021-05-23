

function convertir(){
    console.log("clic en convertir");
    let nodoInputMiConversor = document.querySelector("#miConversor");
    console.log(nodoInputMiConversor);
    let conversion = +nodoInputMiConversor.value;
    console.log(conversion);

    let nodoDolares = document.querySelector("#dolares");
    console.log(nodoDolares);
    nodoDolares.innerHTML = "<h4> " + (conversion * 1.22).toFixed(2) + " dolares </h4";  

    let nodoLibras = document.querySelector("#libras");
    console.log(nodoLibras);
    nodoLibras.innerHTML ="<h4> " + (conversion * 0.9).toFixed(2) + " libras </h4"; 

    let nodoYenes = document.querySelector("#yenes");
    console.log(nodoYenes);
    nodoYenes.innerHTML = "<h4> " + (conversion * 126.89).toFixed(2) + " yenes </h4"; 

}


