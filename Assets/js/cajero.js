var cantidades;
var maximo = 50000;
function main(){
    var dinero = parseInt(document.getElementById("dinero").value );
    /* Estoy diciendo que si el dinero es menor que 50 o es mayor al máximo que puede retirar entonces que le muestre una alerta */
    if(dinero<50 || dinero > maximo || dinero% 50 != 0){
        alert("No se puede retirar ese monto, intente con otro, recuerde que deben ser multiplos de 50. O consulte a un asesor para verificar el saldo de este cajero");
    }
    console.log(dinero);
    cantidades =billetes(dinero);
    document.getElementById("billetes").innerHTML =`Usted retiró: <br/><br/> Billetes de a 1000: ${cantidades["B1000"]} <br/> Billetes de a 500: ${cantidades["B500"]}  <br/> Billetes de a 200: ${cantidades["B200"]} <br/> Billetes de a 100: ${cantidades["B100"]} <br/> Billetes de a 50: ${cantidades["B50"]} <br/> Billetes de a 20: ${cantidades["B20"]}`;

}

function billetes(cantidad){
    var cont = 0;
    /* Declarando un diccionario para almacenar valores */
    var cantidades = {
        "B1000": 0,
        "B500": 0,
        "B200": 0,
        "B100": 0,
        "B50": 0,
        "B20": 0
    };
    //console.log(cantidades["B100"]);
    while(cont+1000 <= cantidad){
        cont+= 1000;
        cantidades["B1000"] += 1;
    }
    while(cont+500 <= cantidad){
        cont+= 500;
        cantidades["B500"] += 1;
    }
    while(cont+200 <= cantidad){
        cont+= 200;
        cantidades["B200"] += 1;
    }
    while(cont+100 <= cantidad){
        cont+= 100;
        cantidades["B100"] += 1;
    }
    while(cont+50 <= cantidad){
        cont+= 50;
        cantidades["B50"] += 1;
    }
    console.log(`Usted retiró: \n Billetes de a 1000: ${cantidades["B1000"]} \n Billetes de a 500: ${cantidades["B500"]}  \n Billetes de a 200: ${cantidades["B200"]} \n Billetes de a 100: ${cantidades["B100"]} \n Billetes de a 50: ${cantidades["B50"]} \n Billetes de a 20: ${cantidades["B20"]}`);
    if(cont < cantidad){
        console.log("Por el momento no puede ser retirada la cantidad de: " + (cantidad-cont) + " Pesos");
    }
    return cantidades;
}

//var cantidad = 1821;
//billetes(cantidad);

