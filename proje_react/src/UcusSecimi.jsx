import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

function UcusSecimi() {
    const location = useLocation();
    const navigate = useNavigate();
    const { departure, arrival, date } = location.state || {};

    const [flights, setFlights] = useState([]);

    const generateRandomFlights = () => {
        const randomFlights = [];
        const times = ["05:00", "08:30", "11:45", "14:00", "17:30", "21:45"];
        for (let i = 0; i < 5; i++) {
            const randomTime = times[Math.floor(Math.random() * times.length)];
            const randomFlight = {
                flightNumber: `XY${Math.floor(1000 + Math.random() * 9000)}`,
                departureTime: randomTime,
                arrivalTime: `${parseInt(randomTime.split(":")[0]) + 2}:${randomTime.split(":")[1]}`,
                price: (Math.random() * 500 + 100).toFixed(2),
            };
            randomFlights.push(randomFlight);
        }
        setFlights(randomFlights);
    };

    useEffect(() => {
        if (departure && arrival && date) {
            generateRandomFlights();
        }
    }, [departure, arrival, date]);

    const handleSelectFlight = (flight) => {
        navigate('/koltuksec', { state: { flight, departure, arrival, date } });
    };

    return (
        <div className="flight-selection-container">
            <h2>Uçuş Seçimi</h2>
            <p>Kalkış: {departure}, Varış: {arrival}, Tarih: {date}</p>
            <div className="flight-list">
                {flights.length > 0 ? flights.map((flight, index) => (
                    <div key={index} className="flight-item">
                        <p>Uçuş No: {flight.flightNumber}</p>
                        <p>Kalkış Saati: {flight.departureTime}</p>
                        <p>Varış Saati: {flight.arrivalTime}</p>
                        <p>Fiyat: {flight.price} TL</p>
                        <button onClick={() => handleSelectFlight(flight)}>Seç</button>
                    </div>
                )) : <p>Uygun uçuş bulunamadı.</p>}
            </div>
        </div>
    );
}

export default UcusSecimi;
