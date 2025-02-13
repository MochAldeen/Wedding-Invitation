import React from 'react';

interface EventCardProps {
  eventName: string;
  date: string;
  hours: string;
  location: string;
  dataAos: string;
  dataAosDuration: string;
}

function EventCard({
  eventName,
  date,
  hours,
  location,
  dataAos,
  dataAosDuration,
}: EventCardProps) {
  // URL Google Maps berdasarkan lokasi (dapat disesuaikan)
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;

  return (
    <div data-aos={dataAos} data-aos-duration={dataAosDuration} className="event-card">
      <div>
        <div className="event-name">{eventName}</div>
        <p className="date">{date}</p>
        <p className="hours">{hours}</p>
        <p className="location">{location}</p>
      </div>
      <div>
        {/* Tombol Google Map dengan link menuju Google Maps */}
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <div className="g-map">Google Map</div>
        </a>
      </div>
    </div>
  );
}

export default EventCard;
