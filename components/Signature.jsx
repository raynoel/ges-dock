import styles from '@/styles/Home.module.css'


export default function Signature({ signature, signature_date, signature_time, handleOnChange }) {

  return (
    <div className={styles.grid_3_col} style={{gridTemplateColumns: "4fr 1fr 1fr"}}>
      <div className={styles.flexStart}>
        Verifie au stand par<br />Verified at booth by
        <input type="text" name="signature" value={signature || ''} onChange={handleOnChange} />
      </div>
      <div className={styles.flexStart}>
        Date
        <input type="date" name="signature_date" value={signature_date || ''} onChange={handleOnChange} />
      </div>
      <div className={styles.flexStart}>
        Heure<br />time
        <input type="time" name="signature_time" value={signature_time || ''} onChange={handleOnChange} />
      </div>
    </div>
  )
}
