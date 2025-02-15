//tab inicial da home parte esquerda
const tabMainLeftHome = [
    { nome: "Home" },
    { nome: "Catálogo" },
    { nome: "Suporte" },
    { nome: "Sobre nós" },
    { nome: "Outro" }
];

// Recupera o link ativo do localStorage
const savedLink = localStorage.getItem("activeLink");
const activeLink = savedLink ? JSON.parse(savedLink) : tabMainLeftHome[0];

// Função para atualizar o link ativo e salvar no localStorage
const handleLinkClick = (link) => {
    localStorage.setItem("activeLink", JSON.stringify(link));
    updateActiveLink(link);
};

// Função para atualizar o estado da classe ativa
const updateActiveLink = (link) => {
    const buttons = document.querySelectorAll('.tagLeftHome button');
    buttons.forEach((button) => {
        if (button.textContent === link.nome) {
            button.classList.add('activeTag');
        } else {
            button.classList.remove('activeTag');
        }
    });
};

// Inicializa os botões e a classe ativa
const container = document.getElementById("tagLeftHome");

tabMainLeftHome.forEach((link) => {
    const button = document.createElement("button");
    button.textContent = link.nome;
    button.type = "button";

    // Adiciona a classe ativa ao botão correto
    if (activeLink.nome === link.nome) {
        button.classList.add("activeTag");
    }

    // Adiciona o evento de clique
    button.addEventListener('click', () => handleLinkClick(link));

    container.appendChild(button);
});

