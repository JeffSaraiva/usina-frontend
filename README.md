# 🌐 Usina Frontend - Visualização de Geradores de Energia

Este é o frontend desenvolvido em **React** para consumo da [Usina API](https://github.com/seu-repositorio/usina-api), que disponibiliza informações sobre geradores de energia elétrica no Brasil, com dados extraídos automaticamente da **ANEEL**.

---

## ⚙️ Tecnologias Utilizadas

- React
- Axios
- CSS (App.css)
- Vite ou Create React App (dependendo do setup)
- API REST em Spring Boot

---

## 🎯 Objetivo

O objetivo deste frontend é permitir a **visualização dos 5 maiores geradores de energia elétrica** cadastrados pela API, de forma amigável e responsiva.

---

## 🖼️ Funcionalidades da Interface

- ✅ Listagem dos 5 maiores geradores com base na potência outorgada
- ✅ Layout em tabela, centralizado e com cores de fundo agradáveis
- ✅ Consumo da API via Axios
- ✅ Tratamento de erros em requisições

---

## 📁 Estrutura de Pastas

src/ ├── components/ │ └── GeradoresList.js # Componente de listagem ├── App.js # Componente principal ├── App.css # Estilos globais └── index.js # Entry point


## Execução

npm start

O projeto será iniciado em:
📍 http://localhost:3000

🔗 Integração com a API
A aplicação consome os dados da API de usinas no seguinte endpoint:

GET http://localhost:8080/usinas/top5

Certifique-se de que o backend está em execução antes de rodar o frontend.


🧪 Teste Manual
Execute o backend (usina-api)

Execute o frontend com npm start

Acesse http://localhost:3000

Verifique a listagem dos 5 maiores geradores no navegador

💄 Estilização
A estilização é feita no arquivo App.css com foco em:

Cores agradáveis

Tabela centralizada

Responsividade simples

Layout limpo

Você pode personalizar o estilo no arquivo App.css conforme desejar.

📦 Melhorias Futuras
Barra de busca por estado ou nome

Filtros e ordenação por tipo de geração

Paginação

Exportação para CSV

Deploy em Netlify/Vercel

👨‍💻 Autor
Desenvolvido por Jefferson Oliveira
