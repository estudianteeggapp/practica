//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"¿Cuál es el lenguaje para crear la estructura de una página Web?",
        op0:"CSS",
        op1:"HTML",
        op2:"Javascript",
        correcta:"1"
    },
    {
        id:1,
        pregunta:"¿CSS es un:?",
        op0:"Lenguaje de Marcado",
        op1:"Estilo de Cascada",
        op2:"Lenguaje de programación",
        correcta:"1"
    },
    {
        id:2,
        pregunta:"¿Que es Javascript?",
        op0:"Lenguaje de Maquetado",
        op1:"Sistema Operativo",
        op2:"Lenguaje de Programación",
        correcta:"2"
    },
    {
        id:3,
        pregunta:"¿Para que sirve la etiqueta (form)?",
        op0:"Crear una tabla",
        op1:"Insertar una imágen",
        op2:"Crear un formulario",
        correcta:"2"
    },
    {
        id:4,
        pregunta:"¿Cuál es la función de la etiqueta (title)?",
        op0:"Asignar un título a la página",
        op1:"Crear un encabezado",
        op2:"Ninguna es correcta",
        correcta:"0"
    },
    {
        id:5,
        pregunta:"¿Qué es un Dominio?",
        op0:"Servidor",
        op1:"Nombre de la dirección de una página web",
        op2:"Hosting",
        correcta:"1"
    },
    {
        id:6,
        pregunta:"¿Cual es el editor de código usado en el desarrollo web?",
        op0:"Firefox",
        op1:"PHP",
        op2:"Brackets",
        correcta:"2"
    },
    {
        id:7,
        pregunta:"¿Estructura básica de una página web en HTML?",
        op0:"Encabezado,Pie de página",
        op1:"Encabezado, Cuerpo, Pie de página",
        op2:"Ninguna es correcta",
        correcta:"1"
    },
    {
        id:8,
        pregunta:"¿Para que sirve (h1)?",
        op0:"Crear un párrafo",
        op1:"Crear un título",
        op2:"Crear un encabezado",
        correcta:"1"
    },
    {
        id:9,
        pregunta:"¿Dónde va la etiqueta (<link rel='stylesheet' href='estilo.css'SSS>) ?",
        op0:"Body",
        op1:"Header",
        op2:"Head",
        correcta:"2"
    },
    {
        id:10,
        pregunta:"¿Cuál etiqueta se usa para crear un enlace?",
        op0:"<a> </a>",
        op1:"Link",
        op2:"li",
        correcta:"0"
    },
    {
        id:11,
        pregunta:"¿Cuál es el propósito de la etiqueta (nav) en HTML?",
        op0:"Define el encabezado",
        op1:"Agrupar elementos de navegación",
        op2:"Crea una lista desordenada",
        correcta:"1"
    },
    {
        id:12,
        pregunta:"¿Cuál es la forma correcta de insertar una imágen en HTML?",
        op0:"<img link='img/foto.jpg' alt='Foto'>",
        op1:"<img href='img/foto.jpg' alt='Foto'>",
        op2:"<img src='img/foto.jpg' alt='Foto'>",
        correcta:"2"
    },
    {
        id:13,
        pregunta:"¿Qué etiqueta en HTML se cierra automaticamente?",
        op0:"<img>",
        op1:"<imgage>",
        op2:"<iframe>",
        correcta:"0"
    },
    {
        id:14,
        pregunta:"¿Cómo se divide el desarrollo web?",
        op0:"Desarrollo de código y diseño",
        op1:"Desarrollo Front-end y Back-end",
        op2:"Desarrollo de Software y Hardware",
        correcta:"1"
    },
    {
        id:15,
        pregunta:"¿El código de Javascript se debe escribir en?",
        op0:"Dentro del archivo HTML",
        op1:"En archivo independiente con una extensión .js",
        op2:"Ninguna es correcta",
        correcta:"1"
    },
    {
        id:16,
        pregunta:"¿En CSS la propiedad (border) para que sirve?",
        op0:"Permite especificar el estilo, el ancho y el color del borde de un elemento.",
        op1:"Permite crear una línea",
        op2:"Coloca fondo a un elemento",
        correcta:"0"
    },
    {
        id:17,
        pregunta:"¿Cómo se inserta un comentario en un archivo de CSS?",
        op0:"// Comentario //",
        op1:"<!-- Comentario> -->",
        op2:"/* Comentario */",
        correcta:"2"
    },
    {
        id:18,
        pregunta:"¿Cuál es la propiedad de asignar el tamaño a la fuente en CSS?",
        op0:"font-family: 22px;",
        op1:"font-size: 22px;",
        op2:"font-weight: 22px; ",
        correcta:"1"
    },
    {
        id:19,
        pregunta:"La etiqueta <table> sirve para",
        op0:"Crear un formulario",
        op1:"Crear una lista",
        op2:"Crear una tabla",
        correcta:"2"
    },
]

//para guardar las respuestas elegidas
let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;
//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funciòn.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funciòn que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

//botón corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){ //respuesta correcta
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{//no acerto
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    window.scrollTo(0,0);
    //colocamos la cantidad que acertoy las que no acertó
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}
