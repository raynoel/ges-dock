const mysql = require("serverless-mysql");


// Cré un obj pour intéragir avec la DB
const db = mysql({
  config: {
    host     : process.env.NEXT_PUBLIC_MYSQL_HOST,
    database : process.env.NEXT_PUBLIC_MYSQL_DATABASE,
    user     : process.env.NEXT_PUBLIC_MYSQL_USERNAME,
    password : process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
    port: parseInt(process.env.NEXT_PUBLIC_MYSQL_PORT),
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

