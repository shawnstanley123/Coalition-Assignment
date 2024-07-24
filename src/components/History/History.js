import React,{useState,useEffect} from 'react'
import LineChart from '../LineChart/LineChart';
import Divider from '@mui/material/Divider';
import './History.css'
function History({patient}) {
    const [systolic,setSystolic] = useState(null)
    const [selectedPoint, setSelectedPoint] = useState(null);
    const systolicValues = patient?.diagnosis_history?.map((bp) => bp.blood_pressure?.systolic.value);
    const diastolicValues = patient?.diagnosis_history?.map((bp) => bp.blood_pressure?.diastolic.value);
    const matchingData = patient?.diagnosis_history?.find((se)=>se?.month === selectedPoint?.month && se.year === selectedPoint.year )
 
    console.log(JSON.stringify(matchingData))
    if (!patient) {
        return (
          <div className="text-center mt-5">
            <h3>Select a patient to view their history</h3>
          </div>
        );
      }
  return (
    <div className='card border-0 p-3'>
    <div className='row'>
        <div className='col-8'>
            <div className='text-semibold-16 text-start'>Diagnosis History</div>
        </div>
        <div className='col-12 p-2'>
       <div className='card_custom d-flex'>
        <div className='col-8 pt-3'>
        <LineChart history={patient?.diagnosis_history} setSelectedPoint={setSelectedPoint}/>
        </div>
        {selectedPoint?(<div className='col-4 pt-3 ps-2'>
          <div className='systolic text-start'>
            <div className='d-flex align-items-center'>
          <div className="circle-dot me-1"></div> <div className='text-semibold-12 my-1'>Systolic</div>
          </div>
        <div className='text-semibold-16 my-1'>{matchingData?.blood_pressure.systolic.value}</div>
        <div className='text-regular-12 my-1'>{matchingData?.blood_pressure.systolic.levels}</div>
        </div>
        <Divider sx={{ bgcolor: '#CBC8D4', height: 2, marginRight:1 }} className='my-2' />
        <div className='diastolic text-start'>
        <div className='d-flex align-items-center'>
          <div className="circle-dot1 me-1"></div> <div className='text-semibold-12 my-1'>Diastolic</div>
          </div>
        <div className='text-semibold-16 my-1'>{matchingData?.blood_pressure.diastolic.value}</div>
        <div className='text-regular-12 my-1'>{matchingData?.blood_pressure.diastolic.levels}</div>
        </div>
        </div>):
        (<div className='col-4 pt-3 ps-2 h-100 align-items-center'>
          <div className='text-regular-10 text-start'>Click on the points to view the data</div>
        </div>)}
       </div>
       </div>
    </div>
    <div className='col-12 d-flex'>
    <div className='col-4 pe-2'>
      <div className='card_custom1 text-start p-3'>
      <div>
        <img src="assets/icons/respiratory.svg" className='image3'/>
      </div>
      <div className='my-2'>
      <div className='text-regular-12 text-black'>Respiratory Rate</div>
      <div className='text-semibold-18'>{matchingData?.respiratory_rate?.value} bpm</div>
      </div>
      <div className='text-regular-12 mt-3'>{matchingData?.respiratory_rate?.levels}</div>
      </div>
    </div>
    <div className='col-4 ps-1 pe-1'>
      <div className='card_custom2 text-start p-3'>
      <div>
        <img src="assets/icons/temperature.svg" className='image3'/>
      </div>
      <div className='my-2'>
      <div className='text-regular-12 text-black'>Temperature</div>
      <div className='text-semibold-18'>{matchingData?.temperature?.value}°F</div>
      </div>
      <div className='text-regular-12 mt-3'>{matchingData?.temperature?.levels}</div>
      </div>
    </div>
    <div className='col-4 ps-2'>
      <div className='card_custom3 text-start p-3'>
      <div>
        <img src="assets/icons/HeartBPM.svg" className='image3'/>
      </div>
      <div className='my-2'>
      <div className='text-regular-12 text-black'>Heart Rate</div>
      <div className='text-semibold-18'>{matchingData?.heart_rate?.value} bpm</div>
      </div>
      <div className='text-regular-12 mt-3'>{matchingData?.heart_rate?.levels}</div>
      </div>
    </div>
    </div>
    
</div>
  )
}

export default History