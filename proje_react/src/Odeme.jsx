import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Odeme = ({ flightDetails, selectedSeats }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cardName' && /[^a-zA-Z\s]/.test(value)) {
            return;
        }

        if (name === 'cardNumber') {
            let formattedValue = value.replace(/\D/g, '');
            if (formattedValue.length > 16) return;
            formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
            setFormData({ ...formData, [name]: formattedValue });
            return;
        }

        if (name === 'expiryDate') {
            let formattedDate = value.replace(/\D/g, '');
            if (formattedDate.length > 4) return;
            if (formattedDate.length > 2) {
                formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
            }
            setFormData({ ...formData, [name]: formattedDate });
            return;
        }

        if (name === 'cvc' && (/\D/.test(value) || value.length > 3)) {
            return;
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);

        const pnrNo = Math.random().toString(36).substr(2, 6).toUpperCase();
        navigate('/rezervasyon_onay', {
            state: {
                flightDetails,
                selectedSeats,
                pnrNo
            }
        });
    };

    return (
        <div style={styles.paymentContainer}>
            <h2>Ödeme Sayfası</h2>
            <form onSubmit={handleSubmit} style={styles.paymentForm}>
                <label style={styles.label}>
                    Kart Üzerindeki İsim:
                    <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    Kart Numarası:
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        maxLength="19"
                        required
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    Son Kullanma Tarihi (MM/YY):
                    <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        maxLength="7"
                        required
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    CVC:
                    <input
                        type="text"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleChange}
                        maxLength="3"
                        required
                        style={styles.input}
                    />
                </label>

                <button type="submit" style={styles.button}>Gönder</button>
            </form>
        </div>
    );
};

const styles = {
    paymentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
    },
    paymentForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    label: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '10px',
        cursor: 'pointer',
    },
};

export default Odeme;
