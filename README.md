<div align="center">
  <img src="assets/logo.png" alt="StreamHub Connect Logo" width="250"/>
  
  # 🎬 StreamHub Connect
  
  **A Próxima Fronteira da Agregação de Conteúdo Digital.** <br>
  *Onde o entretenimento se encontra. Busque, encontre e assista. Sem trocar de aplicativo.*

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://pt.wikipedia.org/wiki/HTML5)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://pt.wikipedia.org/wiki/CSS3)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  [![Status](https://img.shields.io/badge/Status-Prot%C3%B3tipo_Ativo-success?style=for-the-badge)](#)
</div>

<br>

## 📌 Sobre o Projeto

O **StreamHub Connect** é uma solução inovadora em formato de *Super App* focada em resolver a "Fadiga do Streaming". Com a pulverização de conteúdos em dezenas de plataformas diferentes, o usuário médio perde muito tempo apenas procurando o que assistir. 

Este projeto é um **protótipo de interface (UI/UX) e regra de negócios** que simula um hub centralizado. Ele permite que o usuário gerencie suas assinaturas (Netflix, Prime Video, Max, Premiere, Globoplay, etc.), busque títulos de forma universal e simule a experiência de um player integrado com recursos sociais.

> **Acesse a demonstração online:** [🔗 Clique aqui para ver o StreamHub ao vivo](https://dev-for-dev.github.io/streamhub-connect/) *(Substitua por seu link do GitHub Pages após ativar)*

---

## ✨ Principais Funcionalidades

- **🔍 Busca Universal:** Um único campo de pesquisa que varre os catálogos de todos os serviços conectados pelo usuário.
- **📺 Gestão de Assinaturas (Free vs. Premium):** - **Plano Free:** Permite conectar até 2 serviços e contém curadoria de anúncios (ads).
  - **Plano Premium:** Conexão ilimitada de serviços, zero anúncios de terceiros e recursos exclusivos.
- **🍿 Watch Party Social:** Simulação de salas virtuais privadas para assistir simultaneamente com até 8 amigos (recurso VIP).
- **🎯 Sistema Inteligente de Ads:** Lógica de JavaScript que diferencia *propagandas de produtos* (removidas no Premium) de *curadoria de lançamentos de streaming* (mantidas para todos).
- **🎨 Design Cyber-Noir (Glassmorphism):** Interface fluida, moderna e responsiva, focada na melhor experiência do usuário (Modo Escuro nativo).

---

## 🛠️ Tecnologias Utilizadas

Este protótipo foi desenvolvido focando em performance estática no Front-end:

* **HTML5:** Estruturação semântica de Single Page Application (SPA).
* **CSS3:** Animações, CSS Grid/Flexbox e efeitos de *Glassmorphism* (fundo de vidro e luzes Neon).
* **JavaScript (Vanilla):** Lógica de controle de estados (Login VIP vs. Free), manipulação do DOM e navegação fluida sem recarregamento da página.

---

## 📁 Estrutura de Arquivos

O projeto adota uma arquitetura limpa e modularizada:

```text
STREAMHUB-CONNECT/
├── 📄 index.html        # Estrutura principal e views do aplicativo
├── 📂 css/
│   └── 🎨 style.css     # Estilos globais e paleta Cyber-Noir
├── 📂 js/
│   └── ⚙️ script.js     # Regras de negócio, Login e Navegação
└── 📂 assets/
    ├── 🖼️ logo.png      # Identidade visual principal
    └── 📂 catalogo/     # Capas de filmes e séries usadas na demonstração
        ├── aneis.png
        ├── batman.png
        └── topgun.png
