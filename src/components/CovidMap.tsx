import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define the structure of the data for each country.
interface CountryData {
    country: string;
    total_cases: number,
    active_cases: number;
    recovered: number;
    deaths: number;
    lat: number;
    long: number;
    flag: string; // URL to the country flag image
}

// Function to fetch countries data from the API.
const fetchCountriesData = async (): Promise<CountryData[]> => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await response.json();
    return data.map((country: any) => ({
        country: country.country,
        total_cases: country.cases,
        active_cases: country.active,
        recovered: country.recovered,
        deaths: country.deaths,
        lat: country.countryInfo.lat,
        long: country.countryInfo.long,
        flag: country.countryInfo.flag
    }));
};

// Customize the marker icon using Leaflet's capabilities.
const icon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41] // Size of the shadow
});

// React functional component for the CovidMap.
const CovidMap: React.FC = () => {
    const [countries, setCountries] = useState<CountryData[]>([]);

    useEffect(() => {
        const getCountries = async () => {
            const countriesData = await fetchCountriesData();
            setCountries(countriesData);
        };
        getCountries();
    }, []);

    return (
        <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {countries.map((country) => (
                <Marker key={country.country} position={[country.lat, country.long]} icon={icon}>
                    <Popup>
                        <div className="popup-content">
                            <div className="flex items-center space-x-2 mb-2">
                                <img src={country.flag} alt={`${country.country} flag`} style={{ width: '30px' }} />
                                <strong>{country.country}</strong>
                            </div>
                            <div>
                                <p>Total Cases: {country.total_cases.toLocaleString()}</p>
                                <p>Active Cases: {country.active_cases.toLocaleString()}</p>
                                <p>Recovered: {country.recovered.toLocaleString()}</p>
                                <p>Deaths: {country.deaths.toLocaleString()}</p>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default CovidMap;
