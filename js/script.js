// ==========================================
// 1. ESTADOS GLOBAIS DO SISTEMA
// ==========================================
let usuarioPremium = false;
let primeiroLogin = true;

// NENHUM SERVIÇO VEM SELECIONADO (Tudo começa falso)
let minhasAssinaturas = {
    'netflix': false, 'prime': false, 'max': false, 'disney': false,
    'globoplay': false, 'appletv': false, 'paramount': false, 'premiere': false,
    'telecine': false, 'crunchyroll': false, 'mubi': false, 'dgo': false, 'plutotv': false
};

const plataformasBD = [
    { id: 'netflix', nome: 'Netflix', corTexto: '#E50914', corBotao: '#E50914' },
    { id: 'prime', nome: 'Prime Video', corTexto: '#00A8E1', corBotao: '#00A8E1' },
    { id: 'max', nome: 'Max', corTexto: '#002BE7', corBotao: '#002BE7' },
    { id: 'disney', nome: 'Disney+', corTexto: '#113CCF', corBotao: '#113CCF' },
    { id: 'globoplay', nome: 'Globoplay', corTexto: '#FF6700', corBotao: '#FF6700' },
    { id: 'appletv', nome: 'Apple TV+', corTexto: '#A3AAAE', corBotao: '#737373' },
    { id: 'paramount', nome: 'Paramount+', corTexto: '#0064FF', corBotao: '#0064FF' },
    { id: 'premiere', nome: 'Premiere', corTexto: '#00A859', corBotao: '#00A859' },
    { id: 'telecine', nome: 'Telecine', corTexto: '#FF004D', corBotao: '#FF004D' },
    { id: 'crunchyroll', nome: 'Crunchyroll', corTexto: '#F47521', corBotao: '#F47521' },
    { id: 'mubi', nome: 'MUBI', corTexto: '#DFA92A', corBotao: '#DFA92A' },
    { id: 'dgo', nome: 'DGO', corTexto: '#00A9E0', corBotao: '#00A9E0' },
    { id: 'plutotv', nome: 'Pluto TV', corTexto: '#FFCE00', corBotao: '#D4A000' }
];

// ==========================================
// 2. BANCO DE DADOS (COM CAMINHO DAS IMAGENS)
// ==========================================
// Você pode copiar e colar as linhas abaixo para chegar aos 80 facilmente.
const bancoDeDados = [
    // --- FILMES ---
    { tipo: 'filme', titulo: 'O Senhor dos Anéis', genero: 'Fantasia', plataforma: 'prime', id_plat: 'Prime Video', cor: 'bg-prime', imagem: 'assets/catalogo/aneis.png' },
    { tipo: 'filme', titulo: 'Batman: O Cavaleiro das Trevas', genero: 'Ação', plataforma: 'max', id_plat: 'Max', cor: 'bg-hbo', imagem: 'assets/catalogo/batman.png' },
    { tipo: 'filme', titulo: 'Top Gun: Maverick', genero: 'Ação', plataforma: 'telecine', id_plat: 'Telecine', cor: 'bg-telecine', imagem: 'assets/catalogo/topgun.png' },
    { tipo: 'filme', titulo: 'Resgate 2', genero: 'Ação', plataforma: 'netflix', id_plat: 'Netflix', cor: 'bg-netflix', imagem: 'assets/catalogo/resgate.png' },
    { tipo: 'filme', titulo: 'Vingadores: Ultimato', genero: 'Ação', plataforma: 'disney', id_plat: 'Disney+', cor: 'bg-disney', imagem: 'assets/catalogo/vingadores.png' },
    { tipo: 'filme', titulo: 'Auto da Compadecida', genero: 'Comédia', plataforma: 'globoplay', id_plat: 'Globoplay', cor: 'bg-globoplay', imagem: 'assets/catalogo/autocompadecida.png' },
    { tipo: 'filme', titulo: 'Gladiador', genero: 'Épico', plataforma: 'prime', id_plat: 'Prime Video', cor: 'bg-prime', imagem: 'assets/catalogo/gladiador.png' },
    { tipo: 'filme', titulo: 'Duna: Parte 2', genero: 'Ficção Científica', plataforma: 'max', id_plat: 'Max', cor: 'bg-hbo', imagem: 'assets/catalogo/duna.png' },
    { tipo: 'filme', titulo: 'Missão Impossível', genero: 'Ação', plataforma: 'paramount', id_plat: 'Paramount+', cor: 'bg-disney', imagem: 'assets/catalogo/missao.png' },
    { tipo: 'filme', titulo: 'Assassinos da Lua das Flores', genero: 'Drama', plataforma: 'appletv', id_plat: 'Apple TV+', cor: 'bg-telecine', imagem: 'assets/catalogo/assassinos.png' },

    // --- SÉRIES ---
    { tipo: 'serie', titulo: 'Tropa de Elite (Série)', genero: 'Ação', plataforma: 'globoplay', id_plat: 'Globoplay', cor: 'bg-globoplay', imagem: 'assets/catalogo/tropadeelite.png' },
    { tipo: 'serie', titulo: 'The Mandalorian', genero: 'Ficção Científica', plataforma: 'disney', id_plat: 'Disney+', cor: 'bg-disney', imagem: 'assets/catalogo/mandalorian.png' },
    { tipo: 'serie', titulo: 'The Last of Us', genero: 'Drama/Sobrevivência', plataforma: 'max', id_plat: 'Max', cor: 'bg-hbo', imagem: 'assets/catalogo/lastofus.png' },
    { tipo: 'serie', titulo: 'Stranger Things', genero: 'Ficção Científica', plataforma: 'netflix', id_plat: 'Netflix', cor: 'bg-netflix', imagem: 'assets/catalogo/stranger.png' },
    { tipo: 'serie', titulo: 'The Boys', genero: 'Ação', plataforma: 'prime', id_plat: 'Prime Video', cor: 'bg-prime', imagem: 'assets/catalogo/theboys.png' },
    { tipo: 'serie', titulo: 'Ruptura (Severance)', genero: 'Suspense', plataforma: 'appletv', id_plat: 'Apple TV+', cor: 'bg-telecine', imagem: 'assets/catalogo/ruptura.png' },
    { tipo: 'serie', titulo: 'Jujutsu Kaisen', genero: 'Anime', plataforma: 'crunchyroll', id_plat: 'Crunchyroll', cor: 'bg-globoplay', imagem: 'assets/catalogo/jujutsu.png' },
    { tipo: 'serie', titulo: 'Halo', genero: 'Ficção Científica', plataforma: 'paramount', id_plat: 'Paramount+', cor: 'bg-disney', imagem: 'assets/catalogo/halo.png' },
    { tipo: 'serie', titulo: 'Os Outros', genero: 'Drama', plataforma: 'globoplay', id_plat: 'Globoplay', cor: 'bg-globoplay', imagem: 'assets/catalogo/osoutros.png' },
    { tipo: 'serie', titulo: 'Game of Thrones', genero: 'Fantasia', plataforma: 'max', id_plat: 'Max', cor: 'bg-hbo', imagem: 'assets/catalogo/got.png' }
];

// ==========================================
// 3. MOTOR DE RENDERIZAÇÃO
// ==========================================
function abrirCatalogo(filtroTipo, termoBusca = '') {
    const grid = document.getElementById('grid-catalogo');
    const titulo = document.getElementById('titulo-catalogo');
    grid.innerHTML = '';

    if (termoBusca !== '') {
        titulo.innerText = `Resultados para: "${termoBusca}"`;
    } else if (filtroTipo === 'filme') {
        titulo.innerText = 'Explorar: Filmes';
    } else if (filtroTipo === 'serie') {
        titulo.innerText = 'Explorar: Séries';
    } else {
        titulo.innerText = 'Catálogo Completo';
    }

    const resultados = bancoDeDados.filter(item => {
        const bateTipo = (filtroTipo === 'todos' || item.tipo === filtroTipo);
        const bateBusca = item.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
                          item.genero.toLowerCase().includes(termoBusca.toLowerCase());
        return bateTipo && bateBusca;
    });

    if (resultados.length === 0) {
        grid.innerHTML = `<p style="color: var(--magenta);">Nenhum título encontrado.</p>`;
    }

    resultados.forEach(item => {
        // LÓGICA CHAVE: Verifica se o ID da plataforma está "true" nas assinaturas do usuário
        let temAssinatura = minhasAssinaturas[item.plataforma];

        let botaoHTML = '';
        if (temAssinatura) {
            botaoHTML = `<button class="play-btn" style="background: var(--neon-blue); color: var(--bg-dark);" onclick="abrirPlayer('${item.titulo}')">▶ Reproduzir</button>`;
        } else {
            // Se não tem, manda o usuário assinar
            botaoHTML = `<button class="premium-btn" style="width:100%; background: ${plataformasBD.find(p => p.id === item.plataforma).corBotao};" onclick="navegar('tela-add-assinatura')">Assinar ${item.id_plat}</button>`;
        }

        // Caso o usuário ainda não tenha salvo a imagem na pasta, exibe um fundo cinza com o ícone
        const bgEstilo = item.imagem ? `background-image: url('${item.imagem}'); background-size: cover; background-position: center;` : `background-color: #333;`;

        const cardHTML = `
            <div class="card p-0">
                <div class="movie-poster" style="${bgEstilo} display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-end; padding: 10px;">
                    <div class="streaming-badge ${item.cor}">${item.id_plat}</div>
                </div>
                <div class="card-content">
                    <h3 title="${item.titulo}">${item.titulo}</h3>
                    <p style="font-size: 0.8rem; margin-bottom: 10px;">${item.genero}</p>
                    ${botaoHTML}
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });

    navegar('tela-catalogo');
}

function renderizarServicos() {
    const grid = document.getElementById('grid-servicos');
    if (!grid) return;
    grid.innerHTML = '';

    plataformasBD.forEach(plat => {
        const conectado = minhasAssinaturas[plat.id];

        const classConectar = conectado ? 'watch-party-btn btn-conectar oculta' : 'watch-party-btn btn-conectar';
        const classAssinar = conectado ? 'play-btn btn-assinar oculta' : 'play-btn btn-assinar';
        const classConectado = conectado ? 'play-btn btn-conectado' : 'play-btn btn-conectado oculta';

        const cardHTML = `
            <div class="card service-card" id="srv-${plat.id}">
                <h3 style="color: ${plat.corTexto};">${plat.nome}</h3>
                <div class="service-actions">
                    <button class="${classConectar}" onclick="toggleServico('${plat.id}')">+ Conectar Conta</button>
                    <button class="${classAssinar}" style="background: ${plat.corBotao}; color: white;" onclick="toggleServico('${plat.id}')">Assinar</button>
                    <button class="${classConectado}" style="background: var(--gray-light); color: var(--bg-dark);" onclick="toggleServico('${plat.id}')">✔️ Conectado (Desconectar)</button>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

function toggleServico(plataformaId) {
    // 1. REGRA DE NEGÓCIO: Verificação de Limite do Plano Free
    if (!minhasAssinaturas[plataformaId]) { // Se está tentando CONECTAR...
        // Conta quantas assinaturas estão ativas (true)
        let totalAtivas = Object.values(minhasAssinaturas).filter(status => status === true).length;

        // Se for Free e já tiver 2, barra a ação e oferece o Premium
        if (!usuarioPremium && totalAtivas >= 2) {
            alert("⚠️ Limite do Plano Free atingido!\nVocê já conectou 2 serviços. Faça o upgrade para o Premium para conectar contas ilimitadas.");
            navegar('tela-premium'); // Manda o usuário direto para a tela de vendas!
            return; // Aborta a conexão
        }
    }

    // 2. APLICA A AÇÃO: Se passou pela trava, conecta ou desconecta
    minhasAssinaturas[plataformaId] = !minhasAssinaturas[plataformaId];
    renderizarServicos();
    renderizarCarrossel();

    // 3. ATUALIZA O CATÁLOGO EM TEMPO REAL
    const telaCatalogo = document.getElementById('tela-catalogo');
    if(telaCatalogo && telaCatalogo.classList.contains('ativa')) {
        const titulo = document.getElementById('titulo-catalogo').innerText;
        if(titulo.includes('Filmes')) abrirCatalogo('filme');
        else if(titulo.includes('Séries')) abrirCatalogo('serie');
        else abrirCatalogo('todos');
    }

    // 4. FEEDBACK VISUAL
    if (minhasAssinaturas[plataformaId]) {
        alert(`Conta ${plataformaId.toUpperCase()} vinculada com sucesso! Títulos liberados no catálogo.`);
    } else {
        alert(`Conta ${plataformaId.toUpperCase()} desconectada.`);
    }
}

// ==========================================
// 4. FUNÇÕES GERAIS E ADS
// ==========================================
function fazerPesquisa() {
    const termo = document.getElementById('input-pesquisa').value;
    if (termo.trim() === '') { alert("Digite o nome de um filme, série ou gênero."); return; }
    abrirCatalogo('todos', termo);
}

function girarPropagandas() {
    const adsGerais = [
        { img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=80&h=80", tag: "Patrocinador", texto: "Compre o novo PlayStation 5 com 15% de desconto na Loja Cyber!" },
        { img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=80&h=80", tag: "TechStore", texto: "Placas de vídeo RTX com frete grátis." },
        { img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=80&h=80", tag: "Games", texto: "Novo RPG de mundo aberto disponível na Steam." }
    ];

    const adsStreaming = [
        { img: "https://image.tmdb.org/t/p/w200/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg", tag: "Lançamento Netflix", texto: "A nova temporada de The Witcher já está disponível." },
        { img: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?auto=format&fit=crop&w=80&h=80", tag: "Max Original", texto: "Episódio Final de Succession neste domingo na Max." },
        { img: "https://image.tmdb.org/t/p/w200/8cdWjvZQUrmU318vA9Ppe0h6g31.jpg", tag: "Exclusivo Prime", texto: "Assista ao novo título da saga O Senhor dos Anéis." }
    ];

    const adGeral = adsGerais[Math.floor(Math.random() * adsGerais.length)];
    const adStream = adsStreaming[Math.floor(Math.random() * adsStreaming.length)];

    const containerGeral = document.getElementById('container-ad-geral');
    if(containerGeral) {
        containerGeral.innerHTML = `
            <div style="display: flex; align-items: center;">
                <img src="${adGeral.img}" alt="Ad" style="border-radius: 8px; margin-right: 15px; width: 60px; height: 60px; object-fit: cover;">
                <div>
                    <span class="ad-tag" style="background: #00F2FF; color: #000;">${adGeral.tag}</span>
                    <strong>${adGeral.texto}</strong>
                </div>
            </div>
            <button class="play-btn" style="width: auto; padding: 5px 15px;">Ver Oferta</button>
        `;
    }

    const containerStream = document.getElementById('container-ad-streaming');
    if(containerStream) {
        containerStream.innerHTML = `
            <div style="display: flex; align-items: center;">
                <img src="${adStream.img}" alt="Ad" style="border-radius: 8px; margin-right: 15px; width: 55px; height: 80px; object-fit: cover;">
                <div>
                    <span class="ad-tag" style="background: #E50914;">${adStream.tag}</span>
                    <strong>${adStream.texto}</strong>
                </div>
            </div>
            <button class="premium-btn" style="padding: 5px 15px; background: #E50914;" onclick="abrirCatalogo('todos')">Assistir</button>
        `;
    }
}

function aplicarBeneficiosPremium() {
    const propagandasGerais = document.querySelectorAll('.general-ad');
    const botaoUpgradeMenu = document.getElementById('btn-upgrade'); // O botão do menu lá em cima

    if (usuarioPremium) {
        propagandasGerais.forEach(ad => ad.style.display = 'none');
        botaoUpgradeMenu.innerText = "Premium Ativo";
        botaoUpgradeMenu.style.background = "#4E4E50"; // Cinza Escuro
    } else {
        propagandasGerais.forEach(ad => ad.style.display = 'flex');
        botaoUpgradeMenu.innerText = "Seja Premium";
        botaoUpgradeMenu.style.background = "var(--magenta)";
    }
}

function toggleAssinaturaPremium() {
    if (!usuarioPremium) {
        if (confirm("Deseja confirmar a assinatura do Plano Premium por R$ 14,90/mês?")) {
            usuarioPremium = true;
            aplicarBeneficiosPremium();
            atualizarBotaoPremiumDaTela();
            alert("Sua conta agora é Premium. Propagandas removidas!");
        }
    } else {
        if (confirm("Você já é Premium! Tem certeza que deseja cancelar sua assinatura e voltar aos anúncios?")) {
            usuarioPremium = false;
            aplicarBeneficiosPremium();
            atualizarBotaoPremiumDaTela();
        }
    }
}

function atualizarBotaoPremiumDaTela() {
    const btnPremiumTela = document.getElementById('btn-assinar-premium'); // Botão central da tela Premium
    if(btnPremiumTela) {
        if (usuarioPremium) {
            btnPremiumTela.innerText = "Cancelar Assinatura Premium";
            btnPremiumTela.style.background = "#4E4E50";
        } else {
            btnPremiumTela.innerText = "Assinar Agora";
            btnPremiumTela.style.background = "var(--magenta)";
        }
    }
}

function navegar(idDaTelaDestino) {
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => {
        tela.classList.remove('ativa');
        tela.classList.add('oculta');
        if(tela.id === 'tela-login') tela.classList.remove('login-bg');
    });

    const telaDestino = document.getElementById(idDaTelaDestino);
    telaDestino.classList.remove('oculta');
    telaDestino.classList.add('ativa');
    window.scrollTo(0, 0);
}

function fazerLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === '' || pass === '') { alert("Por favor, preencha os campos."); return; }

    if (user === 'admin' && pass === 'admin') { usuarioPremium = true; }
    else { usuarioPremium = false; }

    document.getElementById('header-nav').style.display = 'flex';

    // Inicia os motores
    renderizarServicos();
    renderizarCarrossel();
    girarPropagandas();
    aplicarBeneficiosPremium();
    atualizarBotaoPremiumDaTela();

    if (primeiroLogin) {
        alert("Bem-vindo ao StreamHub! Selecione quais serviços você já possui.");
        navegar('tela-add-assinatura');
        primeiroLogin = false;
    } else {
        navegar('tela-home');
    }
}

function sair() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('header-nav').style.display = 'none';
    navegar('tela-login');
    document.getElementById('tela-login').classList.add('login-bg');
}

// ==========================================
// 6. NOVA LÓGICA: MENU HAMBÚRGUER E CARROSSEL EMBARALHADO
// ==========================================

// Função auxiliar para fechar o menu ao clicar em um link (MOBILE)
function fecharMenuNavegar(telaDestino) {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');

    // Se o menu estiver aberto, fecha
    if(navLinks.classList.contains('active')){
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }

    // Executa a navegação solicitada
    if(telaDestino === 'sair'){
        sair();
    } else {
        navegar(telaDestino);
    }
}

// Escuta o clique no botão hambúrguer
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if(menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});

// Função para embaralhar uma array (Fisher-Yates)
function embaralharArray(array) {
    let current = array.length, random;
    while (current !== 0) {
        random = Math.floor(Math.random() * current);
        current--;
        [array[current], array[random]] = [array[random], array[current]];
    }
    return array;
}
// ==========================================
// 7. CARROSSEL E PLAYER DE VÍDEO
// ==========================================
let carouselInterval;

function renderizarCarrossel() {
    const container = document.getElementById('carousel-slides');
    if (!container) return;

    // Detecta se a tela é de celular
    const isMobile = window.innerWidth <= 768;

    // NOVIDADE: Embaralha o banco de dados INTEIRO e joga no carrossel
    let bancoEmbaralhado = embaralharArray([...bancoDeDados]);
    let slidesHTML = '';

    // Passa por TODOS os filmes e séries
    bancoEmbaralhado.forEach((item, index) => {
        let activeClass = index === 0 ? 'active' : '';

        let bgImg = '';
        if (item.imagem) {
            if (isMobile) {
                // No celular: Puxa a capa vertical
                bgImg = item.imagem;
            } else {
                // No PC: Puxa o banner horizontal
                bgImg = item.imagem.replace(/\.(png|jpg|jpeg)$/i, (extensao) => `-b${extensao}`);
            }
        }

        let temAssinatura = minhasAssinaturas[item.plataforma];
        let botaoHTML = '';

        if (temAssinatura) {
            botaoHTML = `<button class="play-btn carrossel-play" onclick="abrirPlayer('${item.titulo}')">▶ Reproduzir</button>`;
        } else {
            const corPlat = plataformasBD.find(p => p.id === item.plataforma).corBotao;
            botaoHTML = `<button class="premium-btn carrossel-play" style="background: ${corPlat};" onclick="navegar('tela-add-assinatura')">Assinar ${item.id_plat}</button>`;
        }

        slidesHTML += `
            <div class="carousel-slide ${activeClass}" style="background-image: url('${bgImg}'); background-color: #222;">
                <div class="carousel-overlay">
                    <span class="streaming-badge ${item.cor}" style="position: static; display: block; margin: 0 auto 10px auto; width: fit-content;">${item.id_plat}</span>
                    <h2 class="carrossel-title">${item.titulo}</h2>
                    <p class="carrossel-p">Assista agora a este grande sucesso disponível na sua assinatura ${item.id_plat}.</p>
                    ${botaoHTML}
                </div>
            </div>
        `;
    });

    container.innerHTML = slidesHTML;

    // Rotação Automática a cada 5 segundos
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        const slides = document.querySelectorAll('.carousel-slide');
        if(slides.length === 0) return;
        let current = document.querySelector('.carousel-slide.active');
        if (current) current.classList.remove('active');
        let next = current ? current.nextElementSibling : null;
        if (!next) next = slides[0];
        if (next) next.classList.add('active');
    }, 8000);
}

// ==========================================
// FUNÇÃO DO PLAYER DE VÍDEO
// ==========================================
function abrirPlayer(tituloClicado) {
    // 1. Acha o filme clicado no banco de dados
    const item = bancoDeDados.find(i => i.titulo === tituloClicado);
    if (!item) {
        console.error("Filme não encontrado no banco de dados:", tituloClicado);
        return;
    }

    // 2. Preenche o Título na tela do Player
    const tituloPlayer = document.getElementById('player-title');
    if (tituloPlayer) tituloPlayer.innerText = item.titulo + " - Assistindo";

    // 3. Define a imagem de fundo do Player (tenta usar o formato banner -b)
    let imgPlayer = '';
    if (item.imagem) {
        imgPlayer = item.imagem.replace(/\.(png|jpg|jpeg)$/i, (extensao) => `-b${extensao}`);
    }

    const telaPlayerDiv = document.getElementById('player-video');
    if (telaPlayerDiv) telaPlayerDiv.style.backgroundImage = `url('${imgPlayer}')`;

    // 4. Muda para a tela do player e joga o usuário lá pro topo
    navegar('tela-player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 8. CORREÇÕES DE NAVEGAÇÃO E RESPONSIVIDADE EM TEMPO REAL
// ==========================================

// Função que fecha o menu mobile e abre o catálogo corretamente
function fecharMenuEabrirCatalogo(tipo) {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');

    // Recolhe o menu se estiver aberto no celular
    if(navLinks && navLinks.classList.contains('active')){
        navLinks.classList.remove('active');
        if(menuToggle) menuToggle.classList.remove('active');
    }

    // Chama a função principal de renderizar os filmes/séries
    abrirCatalogo(tipo);
}

// Recarrega o carrossel automaticamente se o usuário redimensionar a janela (PC) ou girar o celular.
// Isso garante que ele sempre puxe o BANNER no PC e a CAPA no celular dinamicamente!
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        const telaHome = document.getElementById('tela-home');
        // Só recarrega se o usuário estiver na tela inicial
        if (telaHome && telaHome.classList.contains('ativa')) {
            renderizarCarrossel();
        }
    }, 250); // Delay de 250ms para não travar o navegador enquanto arrasta a janela
});
