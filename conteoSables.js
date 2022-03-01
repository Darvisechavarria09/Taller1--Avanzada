let sables = [
    {
        color:"verde",
        energia: 21 ,
        portador: "MURIEL"
    },
    {
        color:"azul",
        energia: 15 ,
        portador: "CUADRADO"
    },
    {
        color:"rojo",
        energia: 50 ,
        portador: "OSPINA"
    },
    {
        color:"amarillo",
        energia: 10 ,
        portador: "JAMES"
    },
    {
        color:"verde",
        energia: 20 ,
        portador: "MATHEUS"
    },
    {
        color:"azul",
        energia: 30 ,
        portador: "YERRI MINA"
    },
    {
        color:"rojo",
        energia: 15 ,
        portador: "FALCAO"
    },
    {
        color:"amarillo",
        energia: 5 ,
        portador: "LUCHO DIAZ"
    }
]

let contarSables = sables.filter(sable => sable.energia < 20)

console.log(`la cantida de sables con energia menor a 20 son: `, contarSables)