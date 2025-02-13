import React, { useState } from 'react';
import { SectionTitle } from './index';

function Gallery() {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setPopupImage(src);
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  // Daftar gambar
  const images = [
    { src: 'assets/img/386370546_344168961310978_7237111326289701754_n.webp' },
    { src: 'assets/img/341771256_785626946547337_551077173211372730_n.webp' },
    { src: 'assets/img/386370546_344168961310978_7237111326289701754_n.webp' },
    { src: 'assets/img/341771256_785626946547337_551077173211372730_n.webp' },
    { src: 'assets/img/386370546_344168961310978_7237111326289701754_n.webp' },
    { src: 'assets/img/341771256_785626946547337_551077173211372730_n.webp' },
  ];

  return (
    <div>
      <SectionTitle id="gallery">Our Gallery</SectionTitle>
      <div className="gallery section">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              data-aos="flip-left"
              className="gallery-img"
              src={image.src}
              alt={`Image ${index + 1}`} // Menambahkan alt dinamis untuk aksesibilitas
              onClick={() => handleImageClick(image.src)}
            />
          </div>
        ))}
      </div>

      {popupImage && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content">
            <img src={popupImage} alt="popup" className="popup-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
