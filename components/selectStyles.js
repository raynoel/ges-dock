
  export const divStyles = {
    selectContainer: {
      display: "inline-block",
      minWidth: '380px',
      maxWidth: '380px',
    },
  }

  // styles for the select
  export const customStyles = {
    control: (base, state) => ({                                    // Contour & bg de la boite Sélect
      ...base,
      boxShadow: "none",
      border: "none",
      border: "1px solid var(--bs-ges-primary)",
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "var(--bs-ges-success)",
      }
    }),
    placeholder: (base) => ({                                       // texte de la boite select, sans option selectionne
      ...base,
      color: "red",
      fontSize: "1.1rem",
      fontWeight: "normal",
      fontFamily: "Arial",
    }),
    singleValue: (provided, state) => ({                            // texte de la boite select, avec une option selectionnee
      ...provided,
      color: "var(--bs-ges-primary)",
      padding: 0,
      margin: 0,
      fontSize: "1.1rem",
      fontWeight: "normal",
      fontFamily: "Arial",      
    }),
    option: (provided, state) => ({                                 // Options
      ...provided,
      color: "#333",
      fontSize: "1.1rem",
      fontWeight: "normal",
      fontFamily: "Arial",
      padding: 10,
      borderBottom: "1px solid #ccc",
      backgroundColor: state.isSelected ? "var(--bs-ges-success)" : "white",
      "&:hover": {
        color: "white",
        backgroundColor: "var(--bs-ges-primary)"
      }
    }),
    menu: (provided, state) => ({                                   // Options container
      ...provided,
    }),
  };