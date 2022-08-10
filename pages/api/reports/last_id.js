// Retourne la liste des reports
import { sql_query } from '@/config/db.js'




export default async function handler(req, res) {

  const query_last_id = `
    SELECT MAX( id_report ) AS last_id FROM tb_reports;
  `

  if (req.method === "GET") {
    try {
      const last_id = await sql_query(query_last_id)
      return res.status(200).json(last_id[0].last_id)

    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}