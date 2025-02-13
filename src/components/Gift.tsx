import React, { useState } from 'react';
import { SectionTitle } from './index';

function Card({ title, name, ket, img, dataAos, onClick }) {
  return (
    <div data-aos={dataAos} className="card" id="gift">
      <div className="inner-card">
        <div>
          <div className="title">{title}</div>
          <div>{name}</div>
        </div>
        <div>
          <img onClick={onClick} height="32" width="39" src={img} alt="" />
        </div>
      </div>
      <div className="ket">{ket}</div>
    </div>
  );
}

// Fungsi untuk menyalin ke clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Teks berhasil disalin!');
  }).catch((error) => {
    console.error('Gagal menyalin:', error);
  });
};

function Gift() {
  const [showQrCode, setShowQrCode] = useState(false);

  const handleClick = () => {
    setShowQrCode(true);
  };

  const handleClose = () => {
    setShowQrCode(false);
  };

  return (
    <div>
      <SectionTitle id="gift">Gift</SectionTitle>
      <div className="gift">
        <Card
          dataAos="flip-right"
          title="BCA"
          name="Alden"
          ket={3210629903}
          img={'assets/icons/bill.svg'}
          // Menyalin ket saat gambar diklik
          onClick={() => copyToClipboard('3210629903')} 
        />
        <Card
          dataAos="flip-right"
          title="Alamat"
          name="Nabilah"
          ket="Jl. Surya, Garpit, Kota Kecil"
          img={'assets/icons/location.svg'}
          // Menyalin ket alamat saat gambar diklik
          onClick={() => copyToClipboard('Jl. Surya, Garpit, Kota Kecil')} 
        />
        <Card
          dataAos="flip-right"
          title="QR Code / QRIS"
          name="Alden"
          ket="DANA"
          img={'assets/icons/qrcode.svg'}
          onClick={handleClick}
        />
      </div>
      {showQrCode && (
        <div className="show-qr-code">
          <div className="qr-code-wrap">
            <button onClick={handleClose} className="btn-close">
              X
            </button>
            <img
              className="qr-code-img"
              src="./assets/img/dana.jpg"
              alt="qr-code"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gift;
