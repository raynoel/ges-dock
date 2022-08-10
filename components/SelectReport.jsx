import React from 'react'
import Select, { components } from "react-select";
import { FaCaretDown } from 'react-icons/fa'
import {divStyles, customStyles} from './selectStyles.js'

// modifie la flèche
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      {<FaCaretDown style={{ fontSize: "1.5rem" }} />}
    </components.DropdownIndicator>
  );
};



export default function SelectReport({ id_report, reports, handleSelectReport }) {
  const options = reports.map((report) => ({
    "value": report.id_report,
    "label": report.exhibitor_name,
  }))
  const initialOption = options.filter( o => o.value === id_report )

  function handleChange(option) {
    if (!option) { option = {} }                              // Resoud l'erreur produite par isClearable 
    handleSelectReport(option.value) 
  }

  return (
    <>
      <div style={divStyles.selectContainer}>
        <Select 
          type="text"
          placeholder={"Select..."}
          options={options}
          value={initialOption[0]}
          // defaultValue={clients[0]}                        // Valeur par défault
          isClearable
          // isLoading                                        // lorsqu'on a besoin d'obtenir des infos de la DB
          // isMulti
          instanceId 
          components={{DropdownIndicator}}
          styles={customStyles}
          onChange={handleChange}
          noOptionsMessage={() => 'No match'}
        />
      </div>
    </>
  )
}


