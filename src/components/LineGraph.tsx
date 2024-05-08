import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useQuery } from 'react-query';

interface CaseData {
    date: string;
    cases: number;
}

const fetchHistoricalData = async (): Promise<CaseData[]> => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    const data = await response.json();
    return Object.keys(data.cases).map(key => ({
        date: key,
        cases: data.cases[key],
    }));
};

const LineGraph: React.FC = () => {
    const { data, error, isLoading } = useQuery('cases', fetchHistoricalData);

    const formatYAxis = (tickItem: number) => {
        // Format the number to show in thousands ("K") or millions ("M")
        return tickItem >= 1000000 ? `${(tickItem / 1000000).toFixed(1)}M` : 
               tickItem >= 1000 ? `${(tickItem / 1000).toFixed(1)}K` : tickItem.toString();
    };

    if (isLoading) return <div className='text-1xl  mb-6 text-center'>Loading...</div>;
    if (error instanceof Error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis dataKey="cases" tickFormatter={formatYAxis}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cases" stroke="#0808e8" />
            </LineChart>
        </div>
    );
};

export default LineGraph;
