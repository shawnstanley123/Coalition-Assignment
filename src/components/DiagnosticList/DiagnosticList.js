import React from 'react'
import './DiagnosticList.css'
function DiagnosticList({patient}) {

    const data = [
        { id: 1, name: 'Alice', age: 25, city: 'New York' },
        { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
        { id: 3, name: 'Charlie', age: 35, city: 'Chicago' },
        { id: 4, name: 'Alice', age: 25, city: 'New York' },
        { id: 5, name: 'Bob', age: 30, city: 'Los Angeles' },
        { id: 6, name: 'Charlie', age: 35, city: 'Chicago' },
      ];
  return (
    <div className='card border-0 p-3 con'>
    <div className='row'>
        <div className='col-8'>
            <div className='text-semibold-16 text-start'>Diagnostic List</div>
        </div>
       
    </div>
    <div className="table-container col-12 ps-0 pe-0 mt-4">
      <table className="custom-table">
        <thead className=''>
          <tr className=''>
            <th className='col-3 text-semibold-12'>Problem/Diagnosis</th>
            <th className='col-6 text-semibold-12'>Description</th>
            <th className='col-3 text-semibold-12'>Status</th>
          </tr>
        </thead>
        <tbody className='overflow-auto'>
          {patient?.diagnostic_list.map((item) => (
            <tr key={item.id} className='text-regular-12'>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  )
}

export default DiagnosticList