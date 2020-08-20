var tempo = new Date
var hora = tempo.getHours()
console.log(`A hora atual é ${hora} horas`)
if(hora<12){
    console.log('Bom Dia !')
} 
else if (hora<=17){
    console.log('Boa Tarde !')
}
else{
    console.log('Boa Noite !')
}