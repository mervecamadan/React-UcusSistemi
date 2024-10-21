import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import havayollari from './havayollari.png';
import './App.css';

function Login() {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const airports = [
        { airport_name: 'Adana Havalimanı', iata_code: 'ADA' },
        { airport_name: 'Ankara Esenboğa Havalimanı', iata_code: 'ESB' },
        { airport_name: 'Alanya Gazipaşa Havalimanı', iata_code: 'GZP' },
        { airport_name: 'Antalya Havalimanı', iata_code: 'AYT' },
        { airport_name: 'Balıkesir Kocaseyit Havalimanı', iata_code: 'EDO' },
        { airport_name: 'Bursa Yenişehir Havalimanı', iata_code: 'YEI' },
        { airport_name: 'Çanakkale Havalimanı', iata_code: 'CKZ' },
        { airport_name: 'Denizli Çardak Havalimanı', iata_code: 'DNZ' },
        { airport_name: 'Diyarbakır Havalimanı', iata_code: 'DIY' },
        { airport_name: 'Elazığ Havalimanı', iata_code: 'EZS' },
        { airport_name: 'Erzurum Havalimanı', iata_code: 'ERZ' },
        { airport_name: 'Eskişehir Hasan Polatkan Havalimanı', iata_code: 'AOE' },
        { airport_name: 'Gaziantep Havalimanı', iata_code: 'GZT' },
        { airport_name: 'Hatay Havalimanı', iata_code: 'HTY' },
        { airport_name: 'Isparta Süleyman Demirel Havalimanı', iata_code: 'ISE' },
        { airport_name: 'İstanbul Havalimanı', iata_code: 'IST' },
        { airport_name: 'İstanbul Sabiha Gökçen Havalimanı', iata_code: 'SAW' },
        { airport_name: 'İzmir Adnan Menderes Havalimanı', iata_code: 'ADB' },
        { airport_name: 'Kars Harakani Havalimanı', iata_code: 'KSY' },
        { airport_name: 'Kayseri Havalimanı', iata_code: 'ASR' },
        { airport_name: 'Kocaeli Cengiz Topel Havalimanı', iata_code: 'KCO' },
        { airport_name: 'Konya Havalimanı', iata_code: 'KYA' },
        { airport_name: 'Kütahya Zafer Havalimanı', iata_code: 'KZR' },
        { airport_name: 'Malatya Havalimanı', iata_code: 'MLX' },
        { airport_name: 'Muğla Dalaman Havalimanı', iata_code: 'DLM' },
        { airport_name: 'Muğla Milas-Bodrum Havalimanı', iata_code: 'BJV' },
        { airport_name: 'Nevşehir Kapadokya Havalimanı', iata_code: 'NAV' },
        { airport_name: 'Ordu Giresun Havalimanı', iata_code: 'OGU' },
        { airport_name: 'Samsun Çarşamba Havalimanı', iata_code: 'SZF' },
        { airport_name: 'Sinop Havalimanı', iata_code: 'NOP' },
        { airport_name: 'Sivas Nuri Demirağ Havalimanı', iata_code: 'VAS' },
        { airport_name: 'Şanlıurfa GAP Havalimanı', iata_code: 'GNY' },
        { airport_name: 'Tekirdağ Çorlu Havalimanı', iata_code: 'TEQ' },
        { airport_name: 'Trabzon Havalimanı', iata_code: 'TZX' },
        { airport_name: 'Uşak Havalimanı', iata_code: 'USQ' },
        { airport_name: 'Van Ferit Melen Havalimanı', iata_code: 'VAN' },
        { airport_name: 'Zonguldak Çaycuma Havalimanı', iata_code: 'ONQ' }
    ];

    const handleSearch = () => {
        if (departure && arrival && date) {
            navigate('/ucussecimi', { state: { departure, arrival, date } });
        } else {
            alert("Lütfen tüm alanları doldurun!");
        }
    };

    return (
        <div className="login-container">
            <img src={havayollari} alt="Hava Yolları" className="header-image" />
            <div className="input-group">
                <div className="input-field">
                    <p>Kalkış Noktası</p>
                    <select value={departure} onChange={(e) => setDeparture(e.target.value)}>
                        <option value="">Kalkış Seç</option>
                        {airports.map((airport) => (
                            <option key={airport.iata_code} value={airport.iata_code}>
                                {airport.airport_name} - {airport.iata_code}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-field">
                    <p>Varış Noktası</p>
                    <select value={arrival} onChange={(e) => setArrival(e.target.value)}>
                        <option value="">Varış Seç</option>
                        {airports.map((airport) => (
                            <option key={airport.iata_code} value={airport.iata_code}>
                                {airport.airport_name} - {airport.iata_code}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-field">
                    <p>Tarih</p>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>

            <button className="search-button" onClick={handleSearch}>Uçuş Ara</button>
        </div>
    );
}

export default Login;