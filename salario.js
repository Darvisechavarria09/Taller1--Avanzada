let salario=3500000
let comision=1500000
let pagar = navesVendidas => salario+((comision*navesVendidas)-((comision*navesVendidas)*5)/100)
console.log(`el pago es de: `, pagar(5))
