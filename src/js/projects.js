import {projetos} from "./listProjects.mjs";

function gerarProjetos(projetos) {
    const container = document.getElementById("projetos-container");
    container.innerHTML = ""; // Limpa o container para evitar duplicação
  
    projetos.forEach((projeto) => {
      // Criando o link do card
      const link = document.createElement("a");
      link.href = projeto.repositorio;
      link.target = "_blank"; // Abre em uma nova aba
      link.classList.add("block", "hover:opacity-90", "transition");
  
      // Criando o card do projeto
      const projetoCard = document.createElement("div");
      projetoCard.classList.add(
        "bg-gray-800",
        "p-4",
        "rounded-lg",
        "shadow-md",
        "h-full"
      );
  
      // Imagem do projeto
      const imagem = document.createElement("div");
      imagem.classList.add("h-48", "bg-gray-600", "rounded-lg", "mb-4");
      imagem.style.backgroundImage = `url(${projeto.imagem.url})`;
      imagem.style.backgroundSize = "cover";
      imagem.style.backgroundPosition = "center";
      imagem.alt = projeto.imagem.alt;
  
      // Nome do projeto
      const nome = document.createElement("h3");
      nome.classList.add("text-xl", "font-bold", "mb-2");
      nome.textContent = projeto.NomeProjeto;
  
      // Tags do projeto
      const tagsContainer = document.createElement("div");
      tagsContainer.classList.add("flex", "flex-wrap", "gap-2", "mb-4");
      projeto.tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.classList.add(
          "bg-gray-700",
          "text-gray-200",
          "text-xs",
          "font-medium",
          "py-1",
          "px-3",
          "rounded-full"
        );
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
      });
  
      // Descrição do projeto
      const descricao = document.createElement("p");
      descricao.classList.add("text-sm", "text-gray-400");
      descricao.textContent = projeto.descricao;
  
      // Montando o card do projeto
      projetoCard.appendChild(imagem);
      projetoCard.appendChild(nome);
      projetoCard.appendChild(tagsContainer);
      projetoCard.appendChild(descricao);
  
      // Adicionando o card ao link
      link.appendChild(projetoCard);
  
      // Adicionando o link ao container
      container.appendChild(link);
    });
  }
  
  // Inicializando os projetos
  gerarProjetos(projetos);
  