import React, { useEffect, useState } from 'react';
import './Patients.css'
function Patients({ onSelectPatient }) {
    const [members, setMembers] = useState([]);
    async function fetchWithBasicAuth(url, username, password) {
        const encodedCredentials = btoa(`${username}:${password}`);
      console.log(encodedCredentials)
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Basic ${encodedCredentials}`,
              'Content-Type': 'application/json',
            },
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log(data)
          setMembers(data);
          return data;
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
      
    useEffect(() => {
        // Access environment variables
        const username = process.env.REACT_APP_API_USERNAME;
        const password = process.env.REACT_APP_API_PASSWORD;
        const apiUrl = process.env.REACT_APP_API_URL;
        console.log(apiUrl, username, password);
        fetchWithBasicAuth(apiUrl, username, password);
        // Call the function with the API URL and credentials
       
      }, []); // Empty dependency array to run once
    
  return (
    <div className='card border-0 p-1'>
        <div className='row p-3'>
            <div className='col-8'>
                <div className='text-semibold-16 text-start'>Patients</div>
            </div>
            <div className='col-4'>
                <div className='text-semibold-16 text-end'>
                    <img src="assets/images/search.png"/>
                </div>
            </div>
        </div>
        <div>
         
            <ul className='list-unstyled mt-3 scroll overflow-auto'>
        {members.map((member, index) => (
            <li key={index} className="bg-blue-50 flex flex-col selector" onClick={() => onSelectPatient(member)} >
             <div className='col-12 d-flex align-items-center py-3'>
                <img src={member.profile_picture} className='image1 ms-3'/>
                <div className='col-7 text-start ms-3'>
                   <div className='text-regular-14'>{member.name}</div> 
                   <div className='text-regular-12'>{member.gender}, {member.age}</div> 
                </div>
                <div>
                    <img src="assets/images/option_patient.png"/>
                </div>
            </div>
            </li>
          ))}
          </ul>
        </div>
    </div>
  )
}

export default Patients