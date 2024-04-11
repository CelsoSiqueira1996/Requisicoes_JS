import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const lista = document.querySelector('[data-lista]');
const barraPesquisa = document.querySelector('[data-pesquisa]');
const btnPesquisa = document.querySelector('[data-botao-pesquisa]');

async function buscarVideo(evento) {
    evento.preventDefault();
    const termoDeBusca = barraPesquisa.value;
    const busca = await conectaApi.buscaVideo(termoDeBusca);

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach((elemento) => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if(busca.length ===0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
    }
}

btnPesquisa.addEventListener('click', (evento) => buscarVideo(evento));