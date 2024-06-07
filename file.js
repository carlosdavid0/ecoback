const { randomBytes } = require('crypto');
const fs = require('fs');
const perguntas = []
const perguntasComIDs = perguntas.map((pergunta, index) => {
  return {
    id: randomBytes(4).toString('hex'),
    ...pergunta
  };
});

fs.writeFile('./src/database/perguntas.json', JSON.stringify(perguntasComIDs, null, 2), err => {
  if (err) {
    console.error('Erro ao escrever arquivo JSON:', err);
    return;
  }
  console.log('Arquivo JSON salvo com sucesso!');
});
