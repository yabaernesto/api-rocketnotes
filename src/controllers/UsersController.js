const { hash } = require('bcryptjs')
const sqliteConnection = require('../database/sqlite')
const AppError = require('../utils/AppError')

/* Um controller deve ter no maximo 5 funcoes. + que isso, de preferencia criar um outro controller */
class UsersController {
  /* create - POST para criar um registro */
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const chekUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (chekUserExists) {
      throw new AppError("Este email ja esta em uso!")
    }

    const hashedPassword = await hash(password, 8)

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
      [name, email, hashedPassword]
    )

    return response.status(201).json()
  }

  /* index - GET para listar varios registros */

  /* show - GET para listar um registro especifico */
   
  /* update - PUT para actualizar um registro */

  /* delete - DELETE remover um registro */
}

module.exports = UsersController
