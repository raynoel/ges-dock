import Image from 'next/image'


export default function Spinner() {
  return (
    <div className="overlay">
      <div className="spinner">
        <Image src='/spinner3.gif' width={193} height={193} alt="" />
      </div>
      <style jsx>{`
      /* le background gris */
      .overlay {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.3);
      }

      .spinner {
        z-index: 10;
        position: relative;
        overflow-y: auto;
      }
      
    `}</style>
    </div>
  )
}
