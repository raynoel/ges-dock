import { sql_query } from '@/config/db.js'



export default async function handler(req, res) {
  const { id: id_report } = req.query
  let report = req.body
  delete report.id_report                                                   // Pour ne pas updater le id
  const columnsNames = Object.keys(report).join('=?, ') + "=? "             // Cré les noms de colonnes (exhibitor_name=?, show_name=?, ...)
  let values = Object.values(report)                                        // Extrait les valeurs ["Abbott", "Pharma fair"...]
  
  
  // UPDATE tb_report SET exhibitor_name=?, show_name=?, ... WHERE id_report=?";
  const update_query = `
    UPDATE tb_reports 
    SET ${columnsNames}
    WHERE id_report = ${id_report}`
  const update_params = values


  if (req.method === "POST") {
    try {
      const results = await sql_query(update_query, update_params)
      return res.status(200).json({ results })
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}