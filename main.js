function tocarSom(idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let cont = 0;

while (cont < listaDeTeclas.length) {
    const tecla = listaDeTeclas[cont];

    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    };

    cont = cont + 1;

    tecla.onkeydown = function (evento) {
        //console.log(evento);

        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add("ativa");
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    };
}
