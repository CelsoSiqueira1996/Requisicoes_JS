import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');
const imagem = document.querySelector('[data-imagem]');
const titulo = document.querySelector('[data-titulo]');
const url = document.querySelector('[data-url]');

async function criarVideo(evento) {
    evento.preventDefault();
    const tituloVideo = titulo.value;
    const urlVideo = url.value;
    const imagemVideo = imagem.value;
    const descricaoVideo = Math.round(Math.random()*1000);
    try{
        await conectaApi.criaVideos(tituloVideo, descricaoVideo, urlVideo, imagemVideo);
        window.location.href = '../pages/envio-concluido.html';
    } catch(e) {
        alert(e);
    }
}

formulario.addEventListener('submit', (evento) => criarVideo(evento))