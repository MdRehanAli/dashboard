import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const Chart = () => {

    const data = [
        { name: 'Mon', value: 45 },
        { name: 'Tue', value: 62 },
        { name: 'Wed', value: 58 },
        { name: 'Thu', value: 72 },
        { name: 'Fri', value: 88 },
        { name: 'Sat', value: 96 },
        { name: 'Sun', value: 55 },
    ];

    return (
        <div className='w-full h-75'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke='#1e293b' />
                    <XAxis dataKey="name" stroke='#94a3b8' />
                    <YAxis stroke='#94a3b8' />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="url(#blueGradient)" />
                    <RechartsDevtools />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;