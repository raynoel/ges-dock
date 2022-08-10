// Obtient les infos sur un location
import { sql_query } from '@/config/db.js'

 

export default async function handler(req, res) {
  const { id: id_report } = req.query
  
  const query_report =`
    SELECT *
    FROM tb_reports 
    WHERE id_report = ${id_report} LIMIT 1`
  

  if (req.method === "GET") {
    try {
      const reports = await sql_query(query_report)
      return res.status(200).json( reports )
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else if (req.method === "DELETE") {
    try {
      const result = await sql_query(`UPDATE tb_reports SET active= 0 WHERE id_report = ${id_report}`)
      return res.json(result)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }

}