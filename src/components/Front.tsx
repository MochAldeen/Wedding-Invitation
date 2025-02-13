import React from 'react';
import getData from '../data'; // Mengimpor data tamu
import { useParams } from 'react-router-dom'; // Mengimpor useParams dari react-router-dom

// Komponen Front
interface FrontProps {
  onClick: () => void;
}

const Front: React.FC<FrontProps> = ({ onClick }) => {
  const { eventId } = useParams(); // Mengambil eventId dari URL
  const data = getData(); // Mendapatkan data acara dan tamu
  
  // Mencari tamu berdasarkan eventId
  const guest = data.tamu.find(tamu => tamu.id === eventId) || { nama: 'Kerabat', alamat: 'Di Tempat' };

  return (
    <div className="front">
      <div data-aos="fade-up" className="wrap">
        <div>
          <p>Hello, We Are Getting Married</p>
          <h1>{data.wanita}</h1>
          <h3>and</h3>
          <h1>{data.pria}</h1>
          <p>{data.tanggalAcara}</p>
        </div>
        <div className="dear">
          <div>Dear</div>
          <div className="guest">{guest.nama}</div> {/* Menampilkan nama tamu */}
          <div className="address">{guest.alamat}</div> {/* Menampilkan alamat tamu */}
        </div>
        <button className="btn-open-invitation" onClick={onClick}>
          <img src="assets/icons/open-envelope.png" alt="" />
          Open Invitation
        </button>
      </div>
    </div>
  );
}

export default Front;
