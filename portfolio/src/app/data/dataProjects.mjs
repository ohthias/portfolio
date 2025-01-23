import AstroImage from "../assets/images/Astro.svg";
import RSRImage from "../assets/images/RSR.svg";
import ConnectionImage from "../assets/images/Connection.svg";
import SPExploreImage from "../assets/images/SPExplore.svg";

export const projetos = [
    {
        NomeProjeto: "Astro",
        tags: ["Spring Boot", "SQL", "JavaScript", "ES6", "HTML", "CSS", "API do Spotify", "Swiper.js"],
        descricao: "Um reprodutor de músicas da web que utiliza Spring Boot no back-end e integração com a API do Spotify para busca de músicas, priorizando a navegação e a experiência do usuário.",
        imagem: {
            url: AstroImage,
            alt: "Imagem do Projeto Astro, página inicial",
        },
        repositorio: "https://github.com/ohthias/astro-reimagination",
    },
    {
        NomeProjeto: "Roda Sobre Roda",
        tags: ["JSP", "SQL", "HTML", "SCSS", "JavaScript", "CSS"],
        descricao: "Um sistema de aluguel de carros, feito com JavaServer Pages no backend e frontend Vanilla. Usando a arquitetura MVC, o projeto foi desenvolvido para a disciplina de Programação Web.",
        imagem: {
            url: RSRImage,
            alt: "Imagem do Projeto Roda Sobre Roda",
        },
        repositorio: "https://github.com/ohthias/roda-sobre-roda",
    },
    {
        NomeProjeto: "Connection",
        tags: ["HTML", "CSS", "JS"],
        descricao: "Um to-do list com pomodoro timer, feito com HTML, CSS e JavaScript. Pensado para ajudar o usuário a organizar suas tarefas e manter o foco.",
        imagem: {
            url: ConnectionImage,
            alt: "Imagem do Projeto Connection",
        },
        repositorio: "https://github.com/ohthias/connection",
    },
    {
        NomeProjeto: "SPExplore",
        tags: ["Android", "Kotlin", "NavHost", "ViewModel", "JetPack"],
        descricao: "SPExplore é um aplicativo de recomendações de locais para visitar em São Paulo, oferecendo uma experiência rica e interativa para turistas e moradores.",
        imagem: {
            url: SPExploreImage,
            alt: "Imagem do Projeto SPExplore",
        },
        repositorio: "https://github.com/ohthias/SPExplore",
    },
];
