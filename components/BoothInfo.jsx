import styles from '@/styles/Home.module.css'



export default function BoothInfo({ report, handleOnChange }) {
  return (
    <div className={styles.grid_3_col} style={{gridTemplateColumns: "4fr 1fr 1fr"}}>
      <div className={styles.flexStart}>
        <div>Exposant<br />Exhibitor</div><input type="text" maxLength="255" name="exhibitor_name" value={report.exhibitor_name || ''} onChange={handleOnChange} required/>
        <div>I.D. #</div><input style={{width: "7rem"}} type="text" name="id_exhibitor" value={report.id_exhibitor || ''} onChange={handleOnChange} />
      </div>
      <div className={styles.flexStart}>Salon<br />Show <input type="text" maxLength="255" name="show_name" value={report.show_name || ''} onChange={handleOnChange} /></div>
      <div className={styles.flexStart}>Stand<br />Booth <input type="text" maxLength="255" name="booth" value={report.booth || ''} onChange={handleOnChange} /></div>

      <div className={styles.flexStart}><div>Expédié de<br />Shipped from </div><input type="text" maxLength="255" name="shipped_from" value={report.shipped_from || ''} onChange={handleOnChange} /></div>
      <div className={styles.flexStart}>Pro# <input type="text" maxLength="255" name="pro" value={report.pro || ''} onChange={handleOnChange} /></div>
      <div className={styles.flexStart}>Date <input type="date" name="date" value={report.date || ''} onChange={handleOnChange} /></div>

      <div className={styles.flexStart}><div>Transporteur général - fourgon - fret aérien - autre<br />Common carrier - van line - air - other</div><input type="text" name="common_carrier" value={report.common_carrier || ''} onChange={handleOnChange} /></div>
      <div className={styles.flexStart}>Quai d&apos;entrepôt<br />Whse dock <input type="text" maxLength="255" name="whse_dock" value={report.whse_dock || ''} onChange={handleOnChange} /></div>
      <div className={styles.flexStart}>Site<br />Showsite <input type="text" maxLength="255" name="site" value={report.site || ''} onChange={handleOnChange} /></div>

      <div className={styles.flexStart}>Nom du transporteur<br />carrier name<input type="text" maxLength="255" name="carrier_name" value={report.carrier_name || ''} onChange={handleOnChange} /></div>
      <div className={`${styles.flexStart} ${styles.span_2_col}`}>Recu par<br />Received by<input type="text" maxLength="255" name="received_by" value={report.received_by || ''} onChange={handleOnChange} /></div>
    </div>
  )
}
