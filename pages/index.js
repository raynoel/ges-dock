import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';           // Bibliotheque pour afficher les messages d'erreurs de _SESSION
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '@/components/Spinner.jsx';
import SelectReport from '@/components/SelectReport.jsx';
import Layout from '@/components/Layout.jsx'
import Header from '@/components/Header.jsx'
import Banner from '@/components/Banner.jsx';
import BoothInfo from '@/components/BoothInfo.jsx';
import LoadInfo from '@/components/LoadInfo.jsx';
import Signature from '@/components/Signature.jsx';
import styles from '@/styles/Home.module.css'


export default function HomePage({ allReports, nextReport_id }) {
  const [ report, setReport ] = useState({})
  const [ reports, setReports ] = useState(allReports)
  const [ active_id, setActive_id ] = useState(nextReport_id)
  const [ loading, setLoading ] = useState(false)


  // Sélectionne un rapport de la DB
  const handleSelectReport = async( value ) => {
    setLoading(true)
    if (typeof(value) === "undefined") {                                // case x clear()
      setReport({}); 
      const { data: nextReport_id } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/nextReport_id`)
      setActive_id(nextReport_id)
      setLoading(false)
      return 
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/${value}`)     
    const reports = await res.json()

    if (res.ok) {
      let selectedReport = reports[0]
      const date = selectedReport?.date?.split('T')[0] || null;                              // converti la date MySQL en yyyy-mm-dd
      const signature_date = selectedReport?.signature_date?.split('T')[0] || null;
      selectedReport = {...selectedReport, date: date, signature_date: signature_date}
      setReport(selectedReport)
      setActive_id(selectedReport.id_report)
    } else {
      setReport({}) 
      setActive_id(nextReport_id)
    }
    setLoading(false)
  }


  const handleCheck = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked)
    const modifiedReport = {...report, [ name ]: checked } 
    setReport(modifiedReport)
    console.log(modifiedReport)
  }


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const partialReport = {...report, [ name ]: value } 
    const total_nb = +(partialReport.crates_nb || 0) + +(partialReport.cartons_nb || 0) + +(partialReport.skids_nb || 0) + +(partialReport.machines_skidded_nb || 0) + +(partialReport.machines_pallets_nb || 0) + +(partialReport.fibercases_nb || 0) + +(partialReport.carpet_nb || 0) + +(partialReport.misc_nb || 0) + +(partialReport.misc_nb2 || 0) + +(partialReport.padded_items_nb || 0) + +(partialReport.padded_items_nb2 || 0);
    const total_wh = +(partialReport.crates_wh || 0) + +(partialReport.cartons_wh || 0) + +(partialReport.skids_wh || 0) + +(partialReport.machines_skidded_wh || 0) + +(partialReport.machines_pallets_wh || 0) + +(partialReport.fibercases_wh || 0) + +(partialReport.carpet_wh || 0) + +(partialReport.misc_wh || 0) + +(partialReport.misc_wh2 || 0) + +(partialReport.padded_items_wh || 0) + +(partialReport.padded_items_wh2 || 0);
    const modifiedReport = {...report, [ name ]: value, total_nb: total_nb, total_wh: total_wh } 
    setReport(modifiedReport)
  }


  // Ajouter un rapport
  const handleSubmitAddReport = async (e) => {
    e.preventDefault()
    setLoading(true)
    const todayJS = new Date();
    const today_yyyymmdd = todayJS.toISOString().split('T')[0];
    const signature_date = report.signature_date || today_yyyymmdd;
    report = {...report, signature_date: signature_date}
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/add`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify( report )
    })

    const data = await res.json()

    if (res.ok) {
      const { data: allReports } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/`)
      const { data: nextReport_id } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/nextReport_id`)
      setReports(allReports)
      setActive_id(nextReport_id)
      toast.success('Success')
      setReport({})
    } else {
      toast.error(data.message)
    }
    setLoading(false)
  }


  // Modifier un rapport
  const handleSubmitModifyReport = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/edit/${report.id_report}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify( report )
    })

    const data = await res.json()

    if (res.ok) {
      const { data: allReports } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/`)
      setReports(allReports)
      toast.success('Success')
    } else {
      toast.error(data.message)
    }
    setLoading(false)
  }


  // Supprime un rapport
  const handleDeleteReport = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/${report.id_report}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify( report.id_report )
    })
  
    const data = await res.json()
  
    if (res.ok) {
      setReport({})
      const { data: allReports } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/`)
      setReports(allReports)
      toast.success("Success")
    } else {
      toast.error(data.message)
    }
    setLoading(false)
  }


  return (
    <Layout title='GES: FRAIS ADDITIONNELS DE MANUTENTION / ADDITIONAL HANDLING CHARGES'>
      <ToastContainer />
      <div className={styles.container}>
        <form id="reportForm" onSubmit={handleSubmitAddReport}>

          { loading && <Spinner /> }

          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div style={{ width: "750px" }}>
              <SelectReport placeholder="Reports" id_report={report.id_report || null} reports={reports} handleSelectReport={handleSelectReport} /> 
            </div>
            <div>
              {  report?.id_report && <button type="submit" disabled={loading} form="modifyForm" onClick={handleSubmitModifyReport}>MODIFY</button>}
              { !report?.id_report && <button type='submit' disabled={loading} form="reportForm">ADD</button>}
              <button type='submit' disabled={loading} onClick={handleDeleteReport} form="reportForm">DELETE</button>
            </div>
          </div>

          <Header 
            bill_of_lading_missing={report.bill_of_lading_missing } 
            proper_identification_missing={report.proper_identification_missing} 
            trailer_no={report.trailer_no} 
            nose_check={report.nose_check}
            center_check={report.center_check}
            tail_check={report.tail_check}
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
  const {data: allReports} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reports`)  
  const {data: nextReport_id} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reports/nextReport_id`)  
  return {
    props: { 
      allReports: allReports,
      nextReport_id: nextReport_id,
     }
  }
}