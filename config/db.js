import mysql from 'serverless-mysql'


// Cré un obj pour intéragir avec la DB
export const db = mysql({
  config: {
    host     : process.env.MYSQL_HOST,
    database : process.env.MYSQL_DATABASE,
    user     : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT),
  }
})



// Fonction qui utilise la méthode db.query() pour intéragir avec la DB
// APPEL dans pages/api: sql_query('INSERT INTO tb_book (col1, col2)', [('titre 1', 1950), ('titre 2', 2004)])
export async function sql_query( query_string, values=[] ) {
  try {
    const results = await db.query(query_string, values)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}

