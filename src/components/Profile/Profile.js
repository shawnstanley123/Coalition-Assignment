import React from 'react'
import './Profile.css'
function Profile({patient}) {
  const formatDate = (dateString) => {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', dateOptions);
  };
  console.log(patient)
  return (
    <div className='card border-0 p-3'>
    <div className='profile'>
      <div className='profile_header d-flex justify-content-center flex-column my-2'>
        <div className='d-flex justify-content-center'>
      <img src={patient?.profile_picture} className='d-flex justify-content-center profile_picture' alt='imag3e'/>
      </div>
      <div className='text-semibold-18 my-3 text-center'>{patient?.name}</div>
     
      </div>
      <div className='profile_content text-start'>
        <div className='dob my-3 d-flex align-items-center'>
         
          <img src="assets/images/BirthIcon.png" alt="nothing" className='des_icon'/>
          <div className='ms-2'>
          <div className='text-regular-12'>Date Of Birth</div>
          <div className='text-semibold-12'>{formatDate(patient?.date_of_birth)}</div>
          </div>
          </div>
        
        <div className='gender my-3 d-flex align-items-center'>
        <img src="assets/images/FemaleIcon.png" alt="nothing" className='des_icon'/>
        <div className='ms-2'>
          <div className='text-regular-12'>Gender</div>
          <div className='text-semibold-12'>{patient?.gender}</div>
        </div>
        </div>
        <div className='phone my-3 d-flex align-items-center'>
        <img src="assets/images/PhoneIcon.png" alt="nothing" className='des_icon'/>
        <div className='ms-2'>
          <div className='text-regular-12'>Contact Info.</div>
          <div className='text-semibold-12'>{patient?.phone_number}</div>
        </div>
        </div>
        <div className='emergency my-3 d-flex align-items-center'>
        <img src="assets/images/PhoneIcon.png" alt="nothing" className='des_icon'/>
        <div className='ms-2'>
          <div className='text-regular-12'>Emergency</div>
          <div className='text-semibold-12'>{patient?.emergency_contact}</div>
      </div>
      </div>
      <div className='insurance my-3 d-flex align-items-center'>
      <img src="assets/images/InsuranceIcon.png" alt="nothing" className='des_icon'/>
      <div className='ms-2'>
          <div className='text-regular-12'>Insurance Provider</div>
          <div className='text-semibold-12'>{patient?.insurance_type}</div>
      </div>
    </div>
    </div>
    </div>
    <div className='footer my-2 mt-3'>
      <button className='selected border-0 text-semibold-12 py-2 px-4'>Show All Information</button>
    </div>
</div>
  )
}

export default Profile