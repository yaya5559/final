import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import '../style/style.css';


function Slide15({ csvPath  }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);


  useEffect(() => {
    Papa.parse(csvPath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setColumns(Object.keys(results.data[0]));
        setData(results.data);
      },
    });
  }, [csvPath]);

  return (
    <div className="data-preview-container">
        
      <h2 className="data-title">📄 Clean & Tidy Homelessness Dataset</h2>
      
       
      <p className="data-description">
        <strong>
        This dataset comprised of 372 Contiuums of Care (CoC) and contains observations of homelessness and demographic metrics of each CoC.
        </strong>
      </p>
      <p>Data comes from : Urban Institute, HUD, ACS</p>
        

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 20).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-note">Showing the first 20 rows of the dataset.</div>
      </div>
    </div>
  );
}

export default Slide15;