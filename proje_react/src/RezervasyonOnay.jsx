import React from 'react';
import { useLocation } from 'react-router-dom';

const RezervasyonOnay = () => {
    const location = useLocation();
    const { flightDetails, selectedSeats, pnrNo } = location.state || {};

    return (
        <div style={styles.container}>
            <h2>Rezervasyon Onayı</h2>
            <div style={styles.info}>
                <p><strong>Kalkış:</strong> {flightDetails.departure}</p>
                <p><strong>Varış:</strong> {flightDetails.arrival}</p>
                <p><strong>Tarih:</strong> {flightDetails.date}</p>
                <p><strong>Kalkış Saati:</strong> {flightDetails.departureTime}</p>
                <p><strong>Seçilen Koltuklar:</strong> {selectedSeats.join(', ')}</p>
                <p><strong>PNR No:</strong> {pnrNo}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '20px',
    },
    info: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        width: '300px',
    }
};

export default RezervasyonOnay;