import styles from '@/styles/Home.module.css'


export default function LoadInfo({  
  crates_nb, crates_wh, crates_notes,
  cartons_nb, cartons_wh, cartons_notes,
  skids_nb, skids_wh, skids_notes,
  machines_skidded_nb, machines_skidded_wh, machines_skidded_notes,
  machines_pallets_nb, machines_pallets_wh, machines_pallets_notes,
  fibercases_nb, fibercases_wh, fibercases_notes,
  carpet_nb, carpet_wh, carpet_notes,
  misc_nb, misc_wh, misc_notes,
  misc_nb2, misc_wh2, misc_notes2,
  padded_items_nb, padded_items_wh, padded_items_notes,
  padded_items_nb2, padded_items_wh2, padded_items_notes2,
  total_nb, total_wh, total_wh_from_bill_of_lading,
  corrected_wh,
  handleOnChange}) {



  return (
    <div className={styles.grid_4_col}>
      <div className={styles.item}>DESCRIPTION</div>
      <div className={styles.item}>PIECES</div>
      <div className={styles.item}>POIDS<br />WEIGHT</div>
      <div className={styles.item}>
        DOMMAGES & REMARQUES: Noter ici et reporter au rapport de manutention original<br />
        DAMAGE & EXCEPTIONS: Note here and mark on original freight bill
      </div>

      <div className={styles.item}>Caisses<br />Crates</div>
      <div className={styles.qty}><input type="text" name="crates_nb" value={crates_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="crates_wh" value={crates_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="crates_notes" value={crates_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Boites<br />Cartons</div>
      <div className={styles.qty}><input type="text" name="cartons_nb" value={cartons_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="cartons_wh" value={cartons_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="cartons_notes" value={cartons_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Palettes<br />Skids</div>
      <div className={styles.qty}><input type="text" name="skids_nb" value={skids_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="skids_wh" value={skids_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="skids_notes" value={skids_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Équip. sur palettes<br />Machines skidded</div>
      <div className={styles.qty}><input type="text" name="machines_skidded_nb" value={machines_skidded_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="machines_skidded_wh" value={machines_skidded_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="machines_skidded_notes" value={machines_skidded_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Équip. sans palettes<br />Machines unskidded</div>
      <div className={styles.qty}><input type="text" name="machines_pallets_nb" value={machines_pallets_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="machines_pallets_wh" value={machines_pallets_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="machines_pallets_notes" value={machines_pallets_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Caisses de fibre<br /> de verre (couleur)<br />Fibercases (color)</div>
      <div className={styles.qty}><input type="text" name="fibercases_nb" value={fibercases_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="fibercases_wh" value={fibercases_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="fibercases_notes" value={fibercases_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Tapis (couleur)<br />Carpet (color)</div>
      <div className={styles.qty}><input type="text" name="carpet_nb" value={carpet_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="carpet_wh" value={carpet_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="carpet_notes" value={carpet_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Divers / Misc.<br />Description</div>
      <div className={styles.qty}><input type="text" name="misc_nb" value={misc_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="misc_wh" value={misc_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="misc_notes" value={misc_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>&nbsp;</div>
      <div className={styles.qty}><input type="text" name="misc_nb2" value={misc_nb2 || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="misc_wh2" value={misc_wh2 || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="misc_notes2" value={misc_notes2 || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Articles env./capitonnés<br />Pad wrapped items</div>
      <div className={styles.qty}><input type="text" name="padded_items_nb" value={padded_items_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="padded_items_wh" value={padded_items_wh || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="padded_items_notes" value={padded_items_notes || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>&nbsp;</div>
      <div className={styles.qty}><input type="text" name="padded_items_nb2" value={padded_items_nb2 || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="padded_items_wh2" value={padded_items_wh2 || ''} onChange={handleOnChange} /></div>
      <div><input type="text" name="padded_items_notes2" value={padded_items_notes2 || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>TOTAL</div>
      <div className={styles.qty}><input type="text" name="total_nb" value={total_nb || ''} onChange={handleOnChange} /></div>
      <div className={styles.qty}><input type="text" name="total_wh" value={total_wh || ''} onChange={handleOnChange} /></div>
      <div>&nbsp;Poids selon connaissement<br/>&nbsp;Bill of lading weight<input type="text" name="total_wh_from_bill_of_lading" value={total_wh_from_bill_of_lading || ''} onChange={handleOnChange} /></div>

      <div className={styles.item}>Expédition repesée<br />Shipment reweighed</div>
      <div></div>
      <div></div>
      <div>&nbsp;Poids corrigé<br />&nbsp;Corrected weight&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="corrected_wh" value={corrected_wh || ''} onChange={handleOnChange} /></div>


    </div>
  )
}
