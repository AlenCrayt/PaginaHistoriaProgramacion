let imagen1 = document.querySelector("#IC2");
let imagen2 = document.querySelector("#IC1");
let imagen3 = document.querySelector("#IC3");
let zona1 = document.querySelector("#RC1");
let zona2 = document.querySelector("#RC2");
let zona3 = document.querySelector("#RC3");
var intimagen = 0;
/*como se hace para teclear `` en esa orientacion, yo tuve que copiar ese caracter de internet. No hay una manera de hacerlo sin ese caracter en particular? */

imagen1.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","../imagenes/Rompe1.png")
    intimagen = 1
});

imagen2.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","../imagenes/Rompe2.png")
    intimagen = 2
});

imagen3.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","../imagenes/Rompe3.png")
    intimagen = 3
});

zona1.addEventListener('dragover',(evento)=>{
    evento.preventDefault()
});

zona2.addEventListener('dragover',(evento)=>{
    evento.preventDefault()
});

zona3.addEventListener('dragover',(evento)=>{
    evento.preventDefault()
});

zona1.addEventListener('drop',(evento)=>{
    IncrustarImagen(evento, zona1)
});

zona2.addEventListener('drop',(evento)=>{
    IncrustarImagen(evento, zona2)
});

zona3.addEventListener('drop',(evento)=>{
    IncrustarImagen(evento, zona3)
});

function IncrustarImagen(evento, dropzona){
    console.log(intimagen);
    let arrastre = evento.dataTransfer.getData("Text");
    dropzona.innerHTML=`<img src=${arrastre} />`;
    dropzona.alt="";
    switch(intimagen){
        case 1:
            imagen1.style.visibility="hidden";
            break
        case 2:
            imagen2.style.visibility="hidden";
            break
        case 3:
            imagen3.style.visibility="hidden";
            break
    }
}

function Reinicio(){
    intimagen = 0;
    zona1.innerHTML=`<img src="" />`;
    zona2.innerHTML=`<img src="" />`;
    zona3.innerHTML=`<img src="" />`;
    zona1.alt="Arrastre y suelte la imagen aquí";
    zona2.alt="Arrastre y suelte la imagen aquí";
    zona3.alt="Arrastre y suelte la imagen aquí";
    imagen1.style.visibility="visible";
    imagen2.style.visibility="visible";
    imagen3.style.visibility="visible";
}