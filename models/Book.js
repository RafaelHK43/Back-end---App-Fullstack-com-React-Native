const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    isbn: { type: String, unique: true, sparse: true },
    pages: { type: Number },
    status: { 
      type: String, 
      enum: ['disponível', 'emprestado', 'reservado'], 
      default: 'disponível' 
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', bookSchema);