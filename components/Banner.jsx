import React from 'react'

export default function Banner({ id_report }) {
  return (
    <div className="banner">
      <span></span>
      <span>RAPPORT DE RECEPTION / RECEIVING REPORT</span>
      <span className="id_report">{id_report}</span>
      <style jsx>{`
        .banner {
          color: var(--bs-light);
          font-weight: bold;
          font-size: 1.2rem;
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin: 1rem 0;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          background-color: var(--bs-ges-primary);
          padding: 0.5rem 0;
        }
        .id_report {
          color: var(--bs-ges-info);
        }
      `}</style>
    </div>
  )
}
