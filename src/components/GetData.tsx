"use client"

import { useEffect, useState } from 'react';
import Loading from './Loading';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [sheetData, setSheetData] = useState([]);
  const url = process.env.NEXT_PUBLIC_GET_DATA_API

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setSheetData(data);
        setLoading(false);
    };

    fetchData();
  }, []);
  if (loading) {
    return (<>
    <div className='flex justify-center items-center p-5'><Loading /></div>
    </>
    );
  }

  return (
    <div className='flex justify-center items-center'>
      {sheetData.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(sheetData[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sheetData.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
