let usuarioPremium = false;

function fazerLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === '' || pass === '') {
        alert("Por favor, preencha os campos.");
        return;
    }

    // Regra de Negócio: admin = Premium
    if (user === 'admin' && pass === 'admin') {
        usuarioPremium = true;
        alert("Acesso VIP! Você é Premium. Propagandas de lojas foram removidas, apenas novidades de streaming serão exibidas.");
    } else {
        usuarioPremium = false;
        alert("Acesso Free! Você verá propagandas de parceiros para manter o app gratuito.");
    }

    document.getElementById('header-nav').style.display = 'flex';
    aplicarBeneficiosPremium();
    navegar('tela-home');
}

function aplicarBeneficiosPremium() {
    // Seleciona APENAS as propagandas gerais (produtos/lojas)
    const propagandasGerais = document.querySelectorAll('.general-ad');
    const botaoUpgrade = document.getElementById('btn-upgrade');

    if (usuarioPremium === true) {
        // Esconde propagandas de terceiros (o Premium não vê)
        propagandasGerais.forEach(ad => ad.style.display = 'none');
        botaoUpgrade.style.display = 'none';
    } else {
        // Mostra tudo para o usuário Free
        propagandasGerais.forEach(ad => ad.style.display = 'flex');
        botaoUpgrade.style.display = 'block';
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
}

function sair() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('header-nav').style.display = 'none';

    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => {
        tela.classList.remove('ativa');
        tela.classList.add('oculta');
    });

    const telaLogin = document.getElementById('tela-login');
    telaLogin.classList.remove('oculta');
    telaLogin.classList.add('ativa');
    telaLogin.classList.add('login-bg');
}
