import React from 'react';
import LineGraph from '../components/LineGraph';
import CovidMap from '../components/CovidMap';

const ChartsAndMapsPage: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6 text-center">COVID-19 Data Visualization</h1>
            <div className="w-full md:w-3/4 lg:w-1/2 mb-8">
                <LineGraph />
            </div>
            <div className="w-full h-96"> 
                <CovidMap />
            </div>
        </div>
    );
};

export default ChartsAndMapsPage;
