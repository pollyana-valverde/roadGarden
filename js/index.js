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

const scrollableTabs = [
    { title: 'Luxe Lounge Chair', tags: ['Luxe', 'Lounge', 'Chair', 'Modern'], images: ['jardim5.avif', 'jardim5.avif', 'jardim5.avif', 'jardim5.avif'] },
    { title: 'Sleek Modular Sofa', tags: ['Sleek', 'Modular', 'Sofa', 'Modern'], images: ['jardim5.avif', 'jardim5.avif', 'jardim5.avif', 'jardim5.avif'] },
];

let activeTab = 0;
const tabsContainer = document.getElementById('tabsContainer');
const tabContent = document.getElementById('tabContent');

function renderTabs() {
    tabsContainer.innerHTML = '';
    scrollableTabs.forEach((tab, index) => {
        const button = document.createElement('button');
        button.className = `tab-button ${activeTab === index ? 'active' : ''}`;
        button.innerText = tab.title;
        button.onclick = () => setActiveTab(index);
        tabsContainer.appendChild(button);
    });
    setActiveTab(activeTab);
}

function setActiveTab(index) {
    activeTab = index;
    tabContent.innerHTML = `
        <div class="tabContentMediumHome">
            ${scrollableTabs[index].images.map((img, i) => `
                <div>
                    <img src="../imagens/${img}" alt="image-${i}">
                    <h5>${scrollableTabs[index].tags[i]}</h5>
                </div>
            `).join('')}
        </div>
    `;
}

function scrollTabs(direction) {
    tabsContainer.scrollBy({
        left: direction === 'left' ? -150 : 150,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", renderTabs);