const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers'); // SQL para criar tabelas.

async function migrationsRun() {
  let db; // Declara db no escopo da função.

  try {
    db = await sqliteConnection(); // Obtém a conexão.
    const schemas = [createUsers].join(''); // Concatena o SQL.

    await db.exec(schemas); // Executa o SQL.
    console.log('Migração executada com sucesso.');
  } catch (error) {
    console.error('Erro ao executar migrações:', error);
  } finally {
    if (db) {
      await db.close(); // Garante que a conexão será fechada.
    }
  }
}

module.exports = migrationsRun;
