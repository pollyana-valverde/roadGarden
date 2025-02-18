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


// tabs da parte média da home
const scrollableTabs = [
    { title: 'Luxe Lounge Chair', tags: ['Luxe', 'Lounge', 'Chair', 'Modern', 'Modern2'], images: ['jardim1.avif', 'jardim2.avif', 'jardim3.avif', 'jardim4.avif', 'jardim5.avif'] },
    { title: 'Sleek Modular Sofa', tags: ['Sleek', 'Modular', 'Sofa', 'Modern', 'Modern2'], images: ['jardim5.avif', 'jardim3.avif', 'jardim1.avif', 'jardim2.avif', 'jardim4.avif'] },
    { title: 'Luxe Lounge Chair2', tags: ['Luxe', 'Lounge', 'Chair', 'Modern', 'Modern2'], images: ['jardim1.avif', 'jardim2.avif', 'jardim3.avif', 'jardim4.avif', 'jardim5.avif'] },
    { title: 'Sleek Modular Sofa2', tags: ['Sleek', 'Modular', 'Sofa', 'Modern', 'Modern2'], images: ['jardim5.avif', 'jardim3.avif', 'jardim1.avif', 'jardim2.avif', 'jardim4.avif'] },
    { title: 'Luxe Lounge Chair3', tags: ['Luxe', 'Lounge', 'Chair', 'Modern', 'Modern2'], images: ['jardim1.avif', 'jardim2.avif', 'jardim3.avif', 'jardim4.avif', 'jardim5.avif'] },
    { title: 'Sleek Modular Sofa3', tags: ['Sleek', 'Modular', 'Sofa', 'Modern', 'Modern2'], images: ['jardim5.avif', 'jardim3.avif', 'jardim1.avif', 'jardim2.avif', 'jardim4.avif'] },
    { title: 'Luxe Lounge Chair4', tags: ['Luxe', 'Lounge', 'Chair', 'Modern', 'Modern2'], images: ['jardim1.avif', 'jardim2.avif', 'jardim3.avif', 'jardim4.avif', 'jardim5.avif'] },
    { title: 'Sleek Modular Sofa4', tags: ['Sleek', 'Modular', 'Sofa', 'Modern', 'Modern2'], images: ['jardim5.avif', 'jardim3.avif', 'jardim1.avif', 'jardim2.avif', 'jardim4.avif'] },
    { title: 'Luxe Lounge Chair5', tags: ['Luxe', 'Lounge', 'Chair', 'Modern', 'Modern2'], images: ['jardim1.avif', 'jardim2.avif', 'jardim3.avif', 'jardim4.avif', 'jardim5.avif'] },
    { title: 'Sleek Modular Sofa5', tags: ['Sleek', 'Modular', 'Sofa', 'Modern', 'Modern2'], images: ['jardim5.avif', 'jardim3.avif', 'jardim1.avif', 'jardim2.avif', 'jardim4.avif'] },
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
                <div class='tabContentInterMediumHome'>
                    <img src="imagens/${img}" alt="image-${i}" width='200'>
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


// faq end home
document.addEventListener("DOMContentLoaded", function () {
    const faqs = [
        {
            header: "Pergunta grande 1?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            header: "Pergunta grande 2?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            header: "Pergunta grande 3?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            header: "Pergunta grande 4?Pergunta grande 4?",
            resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        }
    ];

    const faqList = document.getElementById("faq-list");

    faqs.forEach((faq, index) => {
        const item = document.createElement("div");
        item.classList.add("faq-item");

        const header = document.createElement("button");
        header.classList.add("faq-header");
        header.innerText = faq.header;
        header.setAttribute("data-index", index);

        const body = document.createElement("div");
        body.classList.add("faq-body");
        body.innerText = faq.resposta;
        body.style.display = "none";

         // Define o primeiro item como ativo por padrão
         if (index === 0) {
            header.classList.add("collapsed");
            body.style.display = "block";
        } else {
            body.style.display = "none";
        }

        // Adiciona evento de clique para abrir/fechar a pergunta e aplicar classe ativa
        header.addEventListener("click", function () {
            // Remove classe ativa de todas as perguntas
            document.querySelectorAll(".faq-header").forEach(btn => btn.classList.remove("collapsed"));
            document.querySelectorAll(".faq-body").forEach(b => b.style.display = "none");

            // Adiciona classe ativa apenas ao item clicado
            header.classList.add("collapsed");
            body.style.display = "block";
        });

        item.appendChild(header);
        item.appendChild(body);
        faqList.appendChild(item);
    });
});
