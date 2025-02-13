import React, { useState } from 'react';
import Front from './components/Front';
import OpenendCard from './components/OpenedCard';
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';
import getData from './data'; // Import getData untuk mendapatkan data tamu

function App() {
  const [frontVisible, setFrontVisible] = useState(true);

  const handleButtonClick = () => {
    setFrontVisible(false);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          {frontVisible && <Front onClick={handleButtonClick} />}
          {!frontVisible && <OpenendCard />}
        </div>
      ),
    },
    {
      path: '/:eventId', // Routing untuk parameter eventId
      element: <EventPage />, // Mengarahkan ke EventPage untuk menampilkan data berdasarkan eventId
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

// Komponen baru untuk menampilkan halaman berdasarkan eventId
function EventPage() {
  const { eventId } = useParams(); // Mengambil eventId dari URL
  const data = getData(); // Mendapatkan data acara dan tamu

  // Mencari tamu berdasarkan eventId
  const guest = data.tamu.find(tamu => tamu.id === eventId) || { nama: 'Kerabat', alamat: 'Di Tempat' };

  return (
    <div>
      <h1>{guest.nama}</h1>
      <p>{guest.alamat}</p>
      <button>Open Invitation</button>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to Our Wedding</h1>
    <p>Choose a guest to see the invitation:</p>
    <ul>
      <li><a href="/nabilah">Nabilah</a></li>
      <li><a href="/johnson">Johnson</a></li>
      <li><a href="/alice">Alice</a></li>
    </ul>
  </div>
);


export default App;
