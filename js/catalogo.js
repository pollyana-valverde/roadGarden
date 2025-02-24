document.addEventListener("DOMContentLoaded", function () {
    const tagMediumHome = document.getElementById("tagMediumHome");
    const itensFiltrados = [
        {
            geralCategoria: "Categoria 1",
            produtos: [
                {
                    img : 'jardim1.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim2.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim3.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim4.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim5.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim3.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim3.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim4.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim5.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim3.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
            ]
        },
        {
            geralCategoria: "Categoria 2",
            produtos: [
                {
                    img : 'jardim1.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim2.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim3.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim4.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim5.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim3.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
            ]
        },
        {
            geralCategoria: "Categoria 3",
            produtos: [
                {
                    img : 'jardim1.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim2.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim3.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim4.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim5.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
                {
                    img : 'jardim3.avif',
                    nome : 'Produto 1A',
                    desc : 'Produto 1A',
                },
            ]
        },
    ];

    function renderCarrossel() {
        tagMediumHome.innerHTML = "";
        itensFiltrados.forEach((categoria, index) => {
            const container = document.createElement("div");
            container.innerHTML = `
                <div class="catalogoCategory">
                    <p>${categoria.geralCategoria}</p>
                </div>
                <div class="catalogoProdutos-container">
                    <button class="scroll-button left" onclick="scrollTabs(this, 'left')">&#9664;</button>
                    <div class="catalogoProdutos-content">
                        ${categoria.produtos.map(produto => `
                           <div class='contentProdutos'>
                                <div class="imgProduto">
                                    <img src="imagens/${produto.img}" 
                                         alt="Banner ${Math.ceil((index + 1) / 3)}" 
                                    />
                                </div>
                                <div class="nomeProduto">
                                    <h4>${produto.nome}</h4>
                                    <p>${produto.desc}</p>
                                    <a href='#'>Ver mais <span>></span></a>
                                </div>
                           </div>
                            `).join('')}
                    </div>
                    <button class="scroll-button right" onclick="scrollTabs(this, 'right')">&#9654;</button>
                </div>
            `;
            tagMediumHome.appendChild(container);
        });
    }

    window.scrollTabs = function (button, direction) {
        const container = button.parentElement.querySelector(".catalogoProdutos-content");
        const scrollAmount = 700;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    renderCarrossel();
});