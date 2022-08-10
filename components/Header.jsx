import styles from '@/styles/Home.module.css'



export default function Header({ bill_of_lading_missing, proper_identification_missing, trailer_no, handleOnChange, handleCheck  }) {
  return (
    <div className={styles.grid_3_col}>

    <div>
      <div className={styles.textCenter}>
        FRAIS ADDITIONNELS DE MANUTENTION<br />
        ADDITIONAL HANDLING CHARGES<br /><br />
      </div>
      <div className={styles.flexStart}>
        <input type="checkbox" id='bill_of_lading_missing' name="bill_of_lading_missing" value={bill_of_lading_missing} onChange={handleCheck} />
        <label htmlFor='bill_of_lading_missing'>
          Marchandise reçues sans connaissement adéquat.<br />
          Shipment received without proper bill of lading.
        </label>
      </div>
      <div className={styles.flexStart}>
        <input type="checkbox" id="proper_identification_missing" name="proper_identification_missing" value={proper_identification_missing} onChange={handleCheck}/>
        <label htmlFor='proper_identification_missing'>
          Marchandise reçues sans identification adéquate.<br />
          Shipment received without proper identification.
        </label>
      </div>
    </div>

    <div className={styles.gesLogoContainer}>
      <div className={styles.gesLogo}>
        <h2>GES</h2>
        CANADA
      </div>
    </div>

    <div>
      <div className={styles.textCenter}>
        A L&apos;USAGE DE L&apos;ENTREPOT<br />
        WAREHOUSE USAGE<br /><br />
      </div>
      <div className={styles.flexStart} >
        <span>Chargé sur remorque <br />
        Load on trailer </span>
        <span style={{ margin: 'auto 0 auto 0.5rem'}}> #</span>
        <input type="text" maxLength="255" name="trailer_no" value={trailer_no || ''} onChange={handleOnChange} />
      </div>

      <div className={styles.grid_3_col} style={{ margin: 0}}>
        <div className={styles.flexStart}>
          <input type="checkbox" id='nose_check' name='nose_check' onChange={handleCheck} />
          <label htmlFor="nose_check">Devant <br />Nose</label>
        </div>

        <div className={styles.flexStart}>
          <input type="checkbox" id='center_check' name='center_check' onChange={handleCheck} />
          <label htmlFor='center_check'>Centre <br />Center</label>
        </div>

        <div className={styles.flexStart}>
          <input type="checkbox" id='tail_check' name='tail_check' onChange={handleCheck} />
          <label htmlFor='tail_check'>Arriere <br />Tail</label>
        </div>
      </div>

    </div>
  </div>
  )
}
