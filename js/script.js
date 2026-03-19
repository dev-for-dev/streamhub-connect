let usuarioPremium = false;

function fazerLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === '' || pass === '') {
        alert("Por favor, preencha os campos.");
        return;
    }

    if (user === 'admin' && pass === 'admin') {
        usuarioPremium = true;
        alert("Acesso VIP! Você é Premium. Propagandas de lojas foram removidas.");
    } else {
        usuarioPremium = false;
        alert("Acesso Free! Você verá propagandas de parceiros para manter o app gratuito.");
    }

    document.getElementById('header-nav').style.display = 'flex';
    aplicarBeneficiosPremium();
    navegar('tela-home');
}

function aplicarBeneficiosPremium() {
    const propagandasGerais = document.querySelectorAll('.general-ad');
    const botaoUpgrade = document.getElementById('btn-upgrade');

    if (usuarioPremium === true) {
        propagandasGerais.forEach(ad => ad.style.display = 'none');
        botaoUpgrade.style.display = 'none';
    } else {
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

// NOVA FUNÇÃO: Simula Conectar/Desconectar Serviço
function toggleServico(idServico) {
    const card = document.getElementById(idServico);
    const btnConectar = card.querySelector('.btn-conectar');
    const btnAssinar = card.querySelector('.btn-assinar');
    const btnConectado = card.querySelector('.btn-conectado');

    // Se o botão "Conectado" está oculto, significa que o serviço NÃO está conectado.
    if (btnConectado.classList.contains('oculta')) {
        // Simula conexão
        btnConectar.classList.add('oculta');
        btnAssinar.classList.add('oculta');
        btnConectado.classList.remove('oculta');
        alert("Serviço conectado com sucesso!");
    } else {
        // Simula desconexão
        btnConectar.classList.remove('oculta');
        btnAssinar.classList.remove('oculta');
        btnConectado.classList.add('oculta');
        alert("Serviço desconectado.");
    }
}
