import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

function KoltukSec() {
    const location = useLocation();
    const navigate = useNavigate();
    const { flight, departure, arrival, date } = location.state;

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const initialSeats = Array.from({ length: 20 }, (_, rowIndex) => ({
        row: rowIndex + 1,
        seats: [
            { id: `A${rowIndex + 1}`, available: Math.random() > 0.5 },
            { id: `B${rowIndex + 1}`, available: Math.random() > 0.5 },
            { id: `C${rowIndex + 1}`, available: Math.random() > 0.5 },
            { id: 'Koridor', available: false },
            { id: `D${rowIndex + 1}`, available: Math.random() > 0.5 },
            { id: `E${rowIndex + 1}`, available: Math.random() > 0.5 },
            { id: `F${rowIndex + 1}`, available: Math.random() > 0.5 },
        ]
    }));

    const [seats] = useState(initialSeats);

    const toggleSeat = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const handleConfirm = () => {
        if (selectedSeats.length > 0) {
            setShowModal(true);
        } else {
            alert('Lütfen en az bir koltuk seçin.');
        }
    };

    const handlePayment = () => {
        navigate('/odeme');
    };

    return (
        <div className="seat-selection-container">
            <h2>Koltuk Seçimi</h2>
            <p>Uçuş No: {flight.flightNumber}</p>
            <p>Kalkış: {departure}, Varış: {arrival}, Tarih: {date}</p>
            <div className="seat-grid">
                {seats.map((row) => (
                    <div key={row.row} className="seat-row">
                        {row.seats.map((seat) => (
                            seat.id === 'Koridor' ? (
                                <div key={seat.id} className="corridor" />
                            ) : (
                                <div
                                    key={seat.id}
                                    className={`seat ${seat.available ? 'available' : 'unavailable'} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
                                    onClick={seat.available ? () => toggleSeat(seat.id) : undefined}
                                >
                                    {seat.id}
                                </div>
                            )
                        ))}
                    </div>
                ))}
            </div>

            <div className="selected-seats">
                <h3>Seçilen Koltuklar:</h3>
                {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Henüz bir koltuk seçilmedi.'}
            </div>

            <button className="confirm-button" onClick={handleConfirm}>Onayla</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h3>Seçilen Bilet Bilgileri</h3>
                        <p><strong>Uçuş Numarası:</strong> {flight.flightNumber}</p>
                        <p><strong>Kalkış:</strong> {departure}</p>
                        <p><strong>Varış:</strong> {arrival}</p>
                        <p><strong>Tarih:</strong> {date}</p>
                        <p><strong>Seçilen Koltuklar:</strong> {selectedSeats.join(', ')}</p>
                        <button className="confirm-button" onClick={handlePayment}>Bilet Onayı</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default KoltukSec;
