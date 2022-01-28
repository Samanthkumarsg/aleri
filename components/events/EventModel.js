import React from 'react';
import Router from 'next/router'

function EventModel({ toggleHostEvent }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        var data = new FormData(event.target)
        let formObject = Object.fromEntries(data.entries())
        console.log(formObject);
        // window.open(`https://api.whatsapp.com/send/?phone=+919535485134&text=*Name :* ${formObject.name}%0a*Mobile :* ${formObject.mobile}%0a*Title :* ${formObject.title}%0a*Location :* ${formObject.location}%0a*Organisation Name :* ${formObject.organisationName}&app_absent=0`);
        window.open(`mailto:vinodh.kokila143@gmail.com?subject=Requesting for event approval from Kaandakatada.com &body=Name : ${formObject.name}%0a Mobile : ${formObject.mobile}%0a Title : ${formObject.title}%0a Location : ${formObject.location}%0a Organisation Name : ${formObject.organisationName}`);
        toggleHostEvent();
    }
    return (
        <div className='mx-auto container h-full fixed top-0 bg-[transparent] backdrop-blur-sm flex items-center justify-center shadow-xl'>
            <div className='border mx-auto bg-white w-96 p-5 shadow-xl'>
                <div className='flex flex-col mb-3 border border-x-0 border-b-1 border-t-0  pb-3'>
                    <h1 className='mb-1 font-bold text-blue-500'>Host Event</h1>
                    <p className='text-gray-400 text-sm'>Please fill the details to host event</p>
                </div>
                <form className='flex flex-col ' onSubmit={(e) => handleSubmit(e)}>
                    <div className='flex flex-col mb-4 '>
                        <label className='text-sm text-gray-500 mb-1'>Name</label>
                        <input type="text" className='border w-100 p-1 rounded' name="name" required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm text-gray-500 mb-1'>Mobile</label>
                        <input type="text" className='border w-100 p-1 rounded' name="mobile" required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm text-gray-500 mb-1'>Title</label>
                        <input type="text" className='border w-100 p-1 rounded' name="title" required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm text-gray-500 mb-1'>Location</label>
                        <input type="text" className='border w-100 p-1 rounded' name="location" required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm text-gray-500 mb-1'>Organisation name</label>
                        <input type="text" className='border w-100 p-1 rounded' name="organisationName" required />
                    </div>
                    <div className='flex flex-row mb-4'>
                        <button className='border p-2 text-sm text-white w-1/2 rounded bg-blue-600' type='submit'>Submit</button>
                        <button className='border p-2 text-sm text-white w-1/2 rounded bg-rose-600' onClick={toggleHostEvent}>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EventModel;
