const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Rota de boas-vindas atualizada para o contexto de Biblioteca
app.get('/', (req, res) => res.json({ message: 'API da Biblioteca funcionando.' }));

// Rota principal apontando para o novo arquivo de rotas de livros
app.use('/api/books', require('./routes/bookRoutes'));

// String de conexão atualizada para o banco 'library_db'
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/library_db')
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Servidor da Biblioteca rodando na porta ${process.env.PORT || 3000}`)
    )
  )
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));