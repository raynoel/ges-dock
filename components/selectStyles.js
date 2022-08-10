
  export const divStyles = {
    selectContainer: {
      display: "inline-block",
      minWidth: '250px',
      maxWidth: '250px',
    },
  }

  // styles for the select
  export const customStyles = {
    control: (base, state) => ({                                    // Boite Sélect
      ...base,
      border: "none",
      boxShadow: "none",
      backgroundColor: "#fff",
      border: "1px solid var(--primary)",
      "&:hover": {
        backgroundColor: "var(--primary)",
      }
    }),
    placeholder: (base) => ({                                       // Input ne contenant pas d'option
      ...base,
      color: "black",
      fontSize: "1.1rem",
      fontWeight: "normal",
      fontFamily: "Arial",

    }),
    singleValue: (provided, state) => ({                            // Input contenant une Option
      ...provided,
      color: "black",
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
      backgroundColor: state.isSelected ? "orange" : "white",
      "&:hover": {
        color: "white",
        backgroundColor: "darkCyan"
      }
    }),
    menu: (provided, state) => ({                                   // Options container
      ...provided,
    }),
  };