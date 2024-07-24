import React, { useState,useEffect } from 'react';
import './App.css';
import './font.css'
import Navbar from './components/Navbar/Navbar'
import Patients from './components/Patients/Patients';
import History from './components/History/History';
import Profile from './components/Profile/Profile';
import DiagnosticList from './components/DiagnosticList/DiagnosticList';
import LabResults from './components/LabResults/LabResults';
function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  useEffect(() => {
    // Log the current selected patient to the console
    console.log('Selected Patient:', selectedPatient);
}, [selectedPatient]);
  return (
    <div className="App">
     <Navbar/>
     <div className='col-12 d-flex flex-row'>
      <div className='col-3 p-3'>
        <Patients onSelectPatient={setSelectedPatient} />
      </div>
      <div className='col-6 p-3'> 
       <div>
        <History  patient={selectedPatient}/>
        </div>
        <div className='mt-3'>
        {selectedPatient && <DiagnosticList patient={selectedPatient}/>}
        </div>
      </div>
     
      <div className='col-3 p-3'>
        {selectedPatient && <Profile patient={selectedPatient}/>}
        <div className='mt-3'>
        {selectedPatient && <LabResults patient={selectedPatient}/>}
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
