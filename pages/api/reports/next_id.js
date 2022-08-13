// Retourne la liste des reports
import { sql_query } from '@/config/db.js'




export default async function handler(req, res) {

  const query_next_id = `
    SELECT auto_increment FROM INFORMATION_SCHEMA.TABLES WHERE table_name = 'tb_reports'
  `

  if (req.method === "GET") {
    try {
      const next_id = await sql_query(query_next_id)
      return res.status(200).json(next_id[0].auto_increment)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}