import React from 'react'
import './LabResults.css'
function LabResults({patient}) {
  return (
    <div className='card border-0 p-3'>
        <div className='row'>
        <div className='col-8'>
            <div className='text-semibold-16 text-start'>Lab Results</div>
        </div>
        </div>
        <div className='lab_results mt-3 con-2'>
            {patient.lab_results.map((result)=>(
                <div className='px-3 d-flex justify-content-between align-items-center inside_con'>
                    <div className='text-regular-12 text-start'>{result}</div>
                    <img src="assets/icons/download.svg" className='download_icon'/>
            </div>))}
        </div>
    </div>
  )
}

export default LabResults