const CALCULAR = document.getElementById('id_calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('volumen');
const MAN = document.getElementById('man');
const limpiar = document.getElementById('id_peso').value = ''

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('id_peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        const limpiar = document.getElementById('id_peso').value = ''//limpiar mi input
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2: ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(id_peso){//preguntar
    let resto = id_peso;
    let flujo = 0;

    if(resto>30){
        let aux = resto-30;
        flujo += aux*1;
        resto -= aux;
    }
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}