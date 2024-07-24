import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='container1 py-3'>
        <div className='navbar col-12 mx-3 my-2'>
            <div className='col-3 logo'>
                <img src="assets/icons/TestLogo.svg" className='col-6'/>
            </div>
            <div className='navbar_content col-6'> 
                <ul className='d-flex list-unstyled gap-3 align-items-center my-2'>
                    <li>
                        <button className='d-flex border-0 align-items-center gap-2 background-none'>
                            <img src="assets/icons/overview.svg"/>
                        <div className='text-regular-12'>Overview</div>
                        </button>
                    </li>
                    <li>
                    <button className='d-flex border-0 align-items-center gap-2 background-none selected px-3 py-2'>
                    <img src="assets/icons/patients.svg"/>
                        <div className='text-regular-12'>Patients</div>
                        </button>
                    </li>
                    <li>
                    <button className='d-flex border-0 align-items-center gap-2 background-none'>
                    <img src="assets/icons/schedule.svg"/>
                        <div className='text-regular-12'>Schedule</div>
                        </button>
                    </li>
                    <li>
                    <button className='d-flex border-0 align-items-center gap-2 background-none'>
                    <img src="assets/icons/message.svg"/>
                        <div className='text-regular-12'>Message</div>
                        </button>
                    </li>
                    <li>
                    <button className='d-flex border-0 align-items-center gap-2 background-none'>
                    <img src="assets/icons/transactions.svg"/>
                        <div className='text-regular-12'>Transactions</div>
                        </button>
                    </li>
                </ul>
                
            </div>
            <div className='col-3 d-flex justify-content-end align-items-center mt-1'>
                <div className='col-1'>
            <img src="assets/images/profile.png" className='image'/>
            </div>
            <div className='col-6 d-flex flex-column align-items-center'>
                <div className='text-regular-12'>Dr. Jose Simmons</div>
                <div className='text-semibold-12'>General Practitioner</div>
            </div> 
            <div className='d-flex align-items-center col-3 gap-3 col-4'>
            <img src="assets/images/settings.png" className=''/>
            <img src="assets/images/options.png" className=''/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar