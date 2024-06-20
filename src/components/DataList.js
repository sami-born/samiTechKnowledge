import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';

const DataList = () => {
    const [date, setData] = useState([]);


return (
    <div>
        <h1>Knowledgebase</h1>
        <ul>
            <li>AWS Cloud</li>
            <li>Linux</li>
        </ul>
    </div>
);
};