// Retourne la liste des reports
import { sql_query } from '@/config/db.js'




export default async function handler(req, res) {

  const query_reports = `
    SELECT id_report, exhibitor_name, date FROM tb_reports
    WHERE active
    ORDER BY date DESC, exhibitor_name
  `

  if (req.method === "GET") {
    try {
      const reports = await sql_query(query_reports)
      return res.status(200).json(reports)

    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}