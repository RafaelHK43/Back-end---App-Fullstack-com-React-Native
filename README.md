# 📚 Biblioteca Digital - Backend API

Esta é a API REST desenvolvida em Node.js e Express para gerenciar o CRUD (Create, Read, Update, Delete) do sistema de Biblioteca Digital. O projeto foi estruturado seguindo boas práticas de arquitetura, com separação clara de responsabilidades entre rotas, controllers e models.

## 🛠️ Tecnologias Utilizadas

* **Node.js** (Ambiente de execução)
* **Express** (Framework web para criação de rotas e middlewares)
* **Cors** (Habilitação de requisições Cross-Origin)
* **Dotenv** (Gerenciamento de variáveis de ambiente)

## 📁 Estrutura do Projeto

```text
backend/
├── src/
│   ├── controllers/
│   │   └── bookController.js  # Lógica de negócio e tratamento de requisições
│   ├── models/
│   │   └── bookModel.js       # Simulação e persistência de dados em memória
│   ├── routes/
│   │   └── bookRoutes.js      # Definição dos endpoints da API
│   └── server.js              # Ponto de entrada e inicialização do servidor
├── .env                       # Variáveis de ambiente (ignorado no Git)
├── .gitignore                 # Arquivo de arquivos/pastas ignorados no Git
├── package.json               # Gerenciamento de dependências e scripts
└── README.md                  # Documentação do backend
