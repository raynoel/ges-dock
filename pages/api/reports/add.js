import { sql_query } from '@/config/db.js'




export default async function handler(req, res) {
  const report = req.body
  const columnsNames = Object.keys(report).join(', ')                       // Cré les noms de colonnes (exhibitor_name, show_name, ...)
  const values = Object.values(report)                                      // Extrait les valeurs ["Abbott", "Pharma fair"...]
  const placeholders = new Array(values.length).fill('?').join(', ')        // Cré les (?, ?, ?...)

  // Ajoute une report a tb_reports
  const insert_query = `
    INSERT INTO tb_reports (${columnsNames})
    VALUES (${placeholders})`
  const insert_params = values


  if (req.method === "POST") {
    try {
      const results = await sql_query(insert_query, insert_params)
      return res.status(200).json({ results })
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}