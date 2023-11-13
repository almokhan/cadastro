const db = require('../../config/db.js');

async function SigIn(req, res) {
  const { nomeExibicao, nomeCompleto, cargo, foto, bio, telefone, email, senha, nascimento, cpf, cidade, uf, pais, dataInicio, administrador } = req.body;

  try {
       
     //insere o usuario no db (pode conter erros por relação dos nomes)
      const [result] = await db.query('INSERT INTO usuario (nomeCompleto) VALUES (?)', [nomeCompleto]);
      userId = result.insertId;


         
    res.status(200).json({ message: 'Registro de entrada inserido com sucesso' });
  } catch (error) {
    console.error('Erro ao inserir entrada no banco de dados:', error);
    res.status(500).json({ message: 'Erro ao inserir entrada no banco de dados' });
  }
}

module.exports = {
  SigIn,
};
