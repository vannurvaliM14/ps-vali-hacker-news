import React from 'react';
import {
  LineChart, Line, XAxis, YAxis,  Tooltip, ResponsiveContainer,
} from 'recharts';


export default function Graph(props){ 
   
    return (
      <div style={{ width: '100%', height: 150 }}>
        
        <ResponsiveContainer>
          <LineChart
            data={props.data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >            
            <XAxis dataKey="objectID" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="votes" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  
}
