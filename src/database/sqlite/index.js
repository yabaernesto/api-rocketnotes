const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const path = require('path')

async function sqliteConnection() {
  const database = await sqlite.open({
    // diretorio onde o BD sera salvo
    filename: path.resolve(__dirname, "..", "database.db"),
    // driver da BD
    driver: sqlite3.Database
  })

  return database
}

module.exports = sqliteConnection
