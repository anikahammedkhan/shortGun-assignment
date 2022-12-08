import React, { useEffect, useState } from 'react';
import {
    LineChart,
    XAxis,
    CartesianGrid,
    Line,
    Tooltip,
    YAxis,
    Label
} from 'recharts';

const TradingData = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // set open close high low date for each day in the data set 
    const formatData = (data) => {
        const formattedData = [];
        for (let date in data) {
            formattedData.push({
                date: date,
                open: data[date]["1. open"],
                high: data[date]["2. high"],
                low: data[date]["3. low"],
                close: data[date]["4. close"],
            });
        }
        return formattedData;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=WXOU2EZ17R3LDLFS");
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";
    if (!data) return "No data!";
    console.log(formatData(data["Time Series (Daily)"]));


    return (
        <div className='flex justify-center my-10'>
            <LineChart width={1440} height={450} data={formatData(data["Time Series (Daily)"])}
                margin={{ top: 5, right: 10, left: 20, bottom: 5 }}>
                <XAxis dataKey="date">
                    <Label value="Date" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis>
                    <Label value="Price" offset={0} position="insideLeft" angle={-90} />
                </YAxis>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="open" stroke="#8884d8" />
                <Line type="monotone" dataKey="high" stroke="#82ca9d" />
                <Line type="monotone" dataKey="low" stroke="#82ca9d" />
                <Line type="monotone" dataKey="close" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};


export default TradingData;