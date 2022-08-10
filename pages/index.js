import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";  
import SelectReport from '@/components/SelectReport.jsx';
import Layout from '@/components/Layout.jsx'
import Header from '@/components/Header.jsx'
import Banner from '@/components/Banner.jsx';
import BoothInfo from '@/components/BoothInfo.jsx';
import LoadInfo from '@/components/LoadInfo.jsx';
import Signature from '@/components/Signature.jsx';
import styles from '@/styles/Home.module.css'


export default function HomePage({ allReports, last_id }) {
  const [ report, setReport ] = useState({})
  const [ reports, setReports ] = useState(allReports)
  const [ loading, setLoading ] = useState(false)
  const [ active_id, setActive_id ] = useState(last_id + 1)


  // Sélectionne un report de la DB
  const handleSelectReport = async( value ) => {
    console.log(value)
    if (typeof(value) === "undefined") {                                // case x clear()
      setReport({}); 
      setActive_id(last_id + 1)
      return 
    }
    const res = await fetch(`http://localhost:3000/api/reports/${value}`)     
    const reports = await res.json()
    if (res.ok) {
      let report = reports[0]
      setReport(report)
      setActive_id(report.id_report)
    } else {
      setReport({}) 
      setActive_id(last_id + 1)
    }
  }


  const handleCheck = (e) => {
    const { name, checked } = e.target;
    const modifiedReport = {...report, [ name ]: checked } 
    setReport(modifiedReport)
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const partialReport = {...report, [ name ]: value } 
    const total_nb = +(partialReport.crates_nb || 0) + +(partialReport.cartons_nb || 0) + +(partialReport.skids_nb || 0) + +(partialReport.machines_skidded_nb || 0) + +(partialReport.machines_pallets_nb || 0) + +(partialReport.fibercases_nb || 0) + +(partialReport.carpet_nb || 0) + +(partialReport.misc_nb || 0) + +(partialReport.misc_nb2 || 0) + +(partialReport.padded_items_nb || 0) + +(partialReport.padded_items_nb2 || 0);
    const total_wh = +(partialReport.crates_wh || 0) + +(partialReport.cartons_wh || 0) + +(partialReport.skids_wh || 0) + +(partialReport.machines_skidded_wh || 0) + +(partialReport.machines_pallets_wh || 0) + +(partialReport.fibercases_wh || 0) + +(partialReport.carpet_wh || 0) + +(partialReport.misc_wh || 0) + +(partialReport.misc_wh2 || 0) + +(partialReport.padded_items_wh || 0) + +(partialReport.padded_items_wh2 || 0);
    const modifiedReport = {...report, [ name ]: value, total_nb: total_nb, total_wh: total_wh } 
    setReport(modifiedReport)
  }


  // Soumission du formulaire pour ajouter un rapport
  const handleSubmitAddReport = async (e) => {
    e.preventDefault()
    toast.success('Excellent, thanks')
    setLoading(true)
    const res = await fetch('http://localhost:3000/api/reports/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify( report )
    })

    const data = await res.json()

    if (res.ok) {
      const { data: allReports } = await axios.get(`http://localhost:3000/api/reports/`)
      const {data: lastest_id} = await axios.get(`http://localhost:3000/api/reports/last_id/`)  
      setActive_id(lastest_id + 1)
      setReports(allReports)
      alert('Excellent, thanks')
      setReport({})
    } else {
      toast.error(data.message)
    }
    setLoading(false)
  }


  // Soumission du formulaire modifier un rapport
  const handleSubmitModifyReport = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch(`http://localhost:3000/api/reports/edit/${report.id_report}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify( report )
    })

    const data = await res.json()

    if (res.ok) {
      const { data: allReports } = await axios.get(`http://localhost:3000/api/reports/`)
      setReports(allReports)
      toast.success('Excellent, thanks')
    } else {
      toast.error(data.message)
    }
    setLoading(false)
  }


  // Supprime un report
  const handleDeleteReport = async() => {
    setReport({})
    setLoading(true)
    const res = await fetch(`http://localhost:3000/api/reports/${report.id_report}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify( report.id_report )
    })

    const data = await res.json()

    if (res.ok) {
      const { data: allReports } = await axios.get(`http://localhost:3000/api/reports/`)
      setReports(allReports)
      toast.success('Excellent, thanks')
    } else {
      toast.error(data.message)
    }
    setLoading(false)
  }

  return (
    <Layout title='GES: FRAIS ADDITIONNELS DE MANUTENTION / ADDITIONAL HANDLING CHARGES'>
      <div className={styles.container}>
        <form id="reportForm" onSubmit={handleSubmitAddReport}>



          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div style={{ width: "750px" }}>
              <SelectReport placeholder="Reports" id_report={report.id_report || null} reports={reports} handleSelectReport={handleSelectReport} /> 
            </div>
            <div>
              {  report?.id_report && <button type="submit" disabled={loading} form="reportForm" onClick={handleSubmitModifyReport}>MODIFY</button>}
              { !report?.id_report && <button type='submit' disabled={loading} form="reportForm">ADD REPORT</button>}
              <button type='submit' disabled={loading} onClick={handleDeleteReport} form="reportForm">DELETE</button>
            </div>
          </div>


          <Header 
            bill_of_lading_missing={report.bill_of_lading_missing || false} 
            proper_identification_missing={report.proper_identification_missing || false} 
            trailer_no={report.trailer_no || ''} 
            handleOnChange={handleOnChange} 
            handleCheck={handleCheck} 
          />
          <Banner 
            id_report={active_id} 
          />

          <BoothInfo 
            report={report}
            handleOnChange={handleOnChange} 
          />
          <div >
            <br />
            <br />
          </div>
            
          <LoadInfo 
            crates_nb={report.crates_nb} crates_wh={report.crates_wh} crates_notes={report.crates_notes}
            cartons_nb={report.cartons_nb} cartons_wh={report.cartons_wh} cartons_notes={report.cartons_notes}
            skids_nb={report.skids_nb} skids_wh={report.skids_wh} skids_notes={report.skids_notes}
            machines_skidded_nb={report.machines_skidded_nb} machines_skidded_wh={report.machines_skidded_wh} machines_skidded_notes={report.machines_skidded_notes}
            machines_pallets_nb={report.machines_pallets_nb} machines_pallets_wh={report.machines_pallets_wh} machines_pallets_notes={report.machines_pallets_notes}
            fibercases_nb={report.fibercases_nb} fibercases_wh={report.fibercases_wh} fibercases_notes={report.fibercases_notes}
            carpet_nb={report.carpet_nb} carpet_wh={report.carpet_wh} carpet_notes={report.carpet_notes}
            misc_nb={report.misc_nb} misc_wh={report.misc_wh} misc_notes={report.misc_notes}
            misc_nb2={report.misc_nb2} misc_wh2={report.misc_wh2} misc_notes2={report.misc_notes2}
            padded_items_nb={report.padded_items_nb} padded_items_wh={report.padded_items_wh} padded_items_notes={report.padded_items_notes}
            padded_items_nb2={report.padded_items_nb2} padded_items_wh2={report.padded_items_wh2} padded_items_notes2={report.padded_items_notes2}
            total_nb={report.total_nb} total_wh={report.total_wh} total_wh_from_bill_of_lading={report.total_wh_from_bill_of_lading}
            corrected_wh={report.corrected_wh}
            handleOnChange={handleOnChange} 
          />

          <div>
            <br />
            <br />
          </div>

          <Signature 
            signature={report.signature}
            signature_date={report.signature_date}
            signature_time={report.signature_time}
            handleOnChange={handleOnChange}
          />


        </form>
      </div>
    </Layout>
  )
}




// Obtient la liste des reports 
export async function getServerSideProps(context) {   
  let res;
  const {data: allReports} = await axios.get(`http://localhost:3000/api/reports/`)  
  const {data: last_id} = await axios.get(`http://localhost:3000/api/reports/last_id/`)  

  return {
    props: { 
      allReports: allReports,
      last_id: last_id,
     }
  }
}