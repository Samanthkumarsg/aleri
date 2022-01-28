import Link from 'next/link';
import React from 'react';
import DataTable from 'react-data-table-component';
import EventModel from '../components/events/EventModel';

function EventContainer() {
    const columns = [
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },

        {
            name: 'Location',
            selector: row => row.location,
            sortable: true,
        },
        {
            name: 'Hosted by ',
            selector: row => row.host,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Meeting regarding fund collection',
            date: '02/02/2022',
            location: 'Karkala',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },
        {
            id: 2,
            title: 'Nivedana patra',
            date: '05/02/2022',
            location: 'Bantwal',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },
        {
            id: 3,
            title: 'Meeting regarding cultural program',
            date: '02/02/2022',
            location: 'Karkala',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },
        {
            id: 4,
            title: 'Meeting regarding Commitee member selection',
            date: '13/02/2022',
            location: 'Bantwal',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },
        {
            id: 5,
            title: 'Meeting regarding fund collection',
            date: '23/02/2022',
            location: 'Sulia',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ) ',
        },

    ];

    const customStyles = {
        rows: {
            style: {

                border: '1px solid #cbd5e1'

            },
        },
        headCells: {
            style: {
                fontSize: '1em',
                borderLeft: '1px solid #cbd5e1',
                background: '#f1f5f9'

            },
        },

        cells: {
            style: {
                fontSize: '1.1em',
                borderLeft: '1px solid #cbd5e1',
                fontWeight: '600'
            },
        },
        headRow: {
            style: {
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                border: '1px solid #cbd5e1'

            },
            denseStyle: {

            },
        },
    };

    const [show, setShow] = React.useState(false)
    const toggleHostEvent = () => {
        setShow(!show);
    }

    return (
        <div className='container mx-auto py-0 h-screen bg-gray-50'>
            <div className=' border w-full bg-white flex flex-col items-start justify-between p-4 mt-4 rounded-sm md:flex-row md:items-center'>
                <div className='text-2xl font-normal text-gray-600'>Events Near you</div>
                <div className='flex space-x-4 py-3'>
                    <Link href='https://api.whatsapp.com/send/?phone=+919535485134&text=i would like to recieve notifications from aleri &app_absent=0'>
                        <button className='border-2 px-3 py-1 rounded text-gray-500 '> Subscribe</button>
                    </Link>
                    <button className='border-2 px-3 py-1 rounded text-gray-500' onClick={toggleHostEvent}> + Host Event</button>


                </div>
            </div>
            <div className='h-1/2 mt-4'>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}

                />
            </div>
            {/* EVENT MODAL */}
            {show ? <EventModel toggleHostEvent={toggleHostEvent} /> : ""}
        </div>
    );
}

export default EventContainer;
